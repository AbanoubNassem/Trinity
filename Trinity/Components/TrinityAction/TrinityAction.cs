using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Utilities;

namespace AbanoubNassem.Trinity.Components.TrinityAction;

/// <summary>
/// Represents the result of an action.
/// </summary>
public class TrinityActionResult
{
    /// <summary>
    /// Initializes a new instance of the <see cref="TrinityActionResult"/> class.
    /// </summary>
    public TrinityActionResult(string type, object data)
    {
        Type = type;
        Data = data;
    }

    /// <summary>
    /// Gets the type of the action result.
    /// </summary>
    public string Type { get; init; }

    /// <summary>
    /// Gets the data of the action result.
    /// </summary>
    public object Data { get; init; }
}

/// <summary>
/// Represents the severity of an action.
/// </summary>
public enum ActionSeverity
{
    /// <summary>
    /// Primary severity action.
    /// </summary>
    Primary,

    /// <summary>
    /// Secondary severity action.
    /// </summary>
    Secondary,

    /// <summary>
    /// Success severity action.
    /// </summary>
    Success,

    /// <summary>
    /// Info severity action.
    /// </summary>
    Info,

    /// <summary>
    /// Warning severity action.
    /// </summary>
    Warning,

    /// <summary>
    /// Help severity action.
    /// </summary>
    Help,

    /// <summary>
    /// Danger severity action.
    /// </summary>
    Danger
}

/// <inheritdoc />
public sealed class TrinityAction : TrinityAction<TrinityAction>
{
    /// <inheritdoc />
    public TrinityAction(string action) : base(action)
    {
    }
}

/// <summary>
/// Represents a generic action that can be performed.
/// </summary>
/// <typeparam name="T">The type of the action.</typeparam>
public abstract class TrinityAction<T> : TrinityComponent<T, object>, ITrinityAction where T : TrinityAction<T>
{
    /// <inheritdoc />
    public override string Type => "Action";

    /// <inheritdoc />
    public override string ComponentName => "TrinityAction";

    /// <inheritdoc />
    public string ActionName { get; init; }

    /// <summary>
    /// Initializes a new instance of the <see cref="TrinityAction{T}"/> class.
    /// </summary>
    /// <param name="action">The name of the action.</param>
    protected TrinityAction(string action)
    {
        ActionName = action;
    }

    /// <inheritdoc />
    public override void Setup()
    {
    }

    /// <summary>
    /// Delegate for handling an action using a form data and a collection of records.
    /// </summary>
    /// <param name="form">form data</param>
    /// <param name="record">The selected record</param>
    /// <returns>A Task representing the asynchronous operation and returning a TrinityActionResult.</returns>
    public delegate TrinityActionResult HandleActionUsingDelegate(Dictionary<string, object?> form,
        IDictionary<string, object?> record);

    /// <summary>
    /// Represents a delegate that returns a URL as a string based on a given record.
    /// </summary>
    /// <param name="record">The record to use for generating the URL.</param>
    /// <returns>The generated URL as a string.</returns>
    public delegate string AsUrlDelegate(IDictionary<string, object?> record);

    /// <summary>
    /// Delegate for handling an action using a form data and a record.
    /// </summary>
    protected virtual HandleActionUsingDelegate? HandleActionUsing { get; private set; }

    /// <summary>
    /// Sets the handle action using delegate.
    /// </summary>
    /// <param name="handleActionUsing">The handle action using delegate to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> action.</returns>
    public T SetHandleActionUsing(HandleActionUsingDelegate handleActionUsing)
    {
        HandleActionUsing = handleActionUsing;
        return (this as T)!;
    }

    private readonly Dictionary<string, object> _fields = new();

    /// <inheritdoc />
    public Dictionary<string, object>? Fields
    {
        get
        {
            if (Schema == null) return null;

            if (_fields.Any()) return _fields;

            foreach (var field in Schema)
            {
                TrinityUtils.GetInnerFields(in _fields, (ITrinityComponent)field);
            }

            return _fields;
        }
    }

    /// <inheritdoc />
    public virtual async Task<List<TrinityActionResult>> Handle(Dictionary<string, object?> form,
        IReadOnlyCollection<IDictionary<string, object?>> records)
    {
        if (HandleActionUsing != null)
        {
            var result = records.Select(record =>
                    HandleActionUsing(form, record)
                )
                .ToList();
            return await Task.FromResult(result);
        }

        if (AsUrlCallback != null)
        {
            var result = records.Select(record =>
                    TrinityAction.Redirect(AsUrlCallback(record), OpenUrlInNewTab)
                )
                .ToList();

            return await Task.FromResult(result);
        }

        return await Task.FromResult(new List<TrinityActionResult>() { new("empty", new { }) });
    }

    /// <summary>
    /// Gets or sets the schema for the action.
    /// </summary>
    public List<object>? Schema =>
        Form?.Schema == null ? null : new List<object>(TrinityForm.FilterSchema(Form?.Schema, ServiceProvider));

    /// <summary>
    /// Gets or sets the form for the action.
    /// </summary>
    [JsonIgnore]
    public virtual TrinityForm? Form { get; set; }

    /// <summary>
    /// Sets the form for the action.
    /// </summary>
    /// <param name="form">The form to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> action.</returns>
    public T SetForm(TrinityForm form)
    {
        Form = form;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the icon for the action.
    /// </summary>
    public virtual string? Icon { get; protected set; }

    /// <summary>
    /// Sets the icon for the action.
    /// </summary>
    /// <param name="value">The icon to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> action.</returns>
    public T SetIcon(string value)
    {
        Icon = value;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the severity of the action.
    /// </summary>
    public virtual string Severity { get; protected set; } = "primary";

    /// <summary>
    /// Sets the severity of the action.
    /// </summary>
    /// <param name="severity">The severity to set.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> action.</returns>
    public T SetSeverity(ActionSeverity severity)
    {
        Severity = Enum.GetName(severity)?.ToLower() ?? "primary";
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the URL associated with the action, to open on click.
    /// </summary>
    public string? Url { get; protected set; }

    /// <summary>
    /// Gets or sets a value indicating whether the URL should be opened in a new tab.
    /// </summary>
    public bool OpenUrlInNewTab { get; protected set; }

    /// <summary>
    /// Sets the URL and whether it should be opened in a new tab.
    /// </summary>
    /// <param name="url">The URL to set.</param>
    /// <param name="openUrlInNewTab">A value indicating whether the URL should be opened in a new tab.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> action.</returns>
    public T SetAsUrl(string url, bool openUrlInNewTab = false)
    {
        Url = url;
        OpenUrlInNewTab = openUrlInNewTab;
        return (this as T)!;
    }

    /// <summary>
    /// Sets whether URLs should be opened in a new tab.
    /// </summary>
    /// <param name="openUrlInNewTab">Whether URLs should be opened in a new tab.</param>
    /// <returns>The current instance of TrinityAction.</returns>
    public T SetOpenUrlInNewTab(bool openUrlInNewTab = true)
    {
        OpenUrlInNewTab = openUrlInNewTab;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the delegate used to generate URLs.
    /// </summary>
    protected AsUrlDelegate? AsUrlCallback { get; set; }

    /// <summary>
    /// Sets the delegate used to generate URLs.
    /// </summary>
    /// <param name="callback">The delegate to use for generating URLs.</param>
    /// <returns>The current instance of TrinityAction.</returns>
    public T SetAsUrl(AsUrlDelegate callback)
    {
        AsUrlCallback = callback;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets a value indicating whether confirmation is required before the action can be performed.
    /// </summary>
    public bool RequiresConfirmation { get; protected set; }

    /// <summary>
    /// Sets a value indicating whether confirmation is required before the action can be performed.
    /// </summary>
    /// <param name="requiresConfirmation">A value indicating whether confirmation is required.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> action.</returns>
    public T SetRequiresConfirmation(bool requiresConfirmation = true)
    {
        RequiresConfirmation = requiresConfirmation;
        SetConfirmHeader(ComponentName);
        SetConfirmText(Localizer["confirm_action_run"], "pi pi-info-circle");
        SetConfirmButtonText(Localizer["yes"], "pi pi-check", "p-button-success");
        SetCancelButtonText(Localizer["no"], "pi pi-times");
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the confirmation header text.
    /// </summary>  
    public virtual string? ConfirmHeader { get; protected set; }

    /// <summary>
    /// Gets or sets the class names associated with the confirmation header.
    /// </summary>
    public virtual string? ConfirmHeaderClassNames { get; protected set; }

    /// <summary>
    /// Sets the confirmation header text and class names.
    /// </summary>
    /// <param name="value">The confirmation header text.</param>
    /// <param name="classes">The class names associated with the confirmation header.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> action.</returns>
    public T SetConfirmHeader(string value, string? classes = null)
    {
        ConfirmHeader = value;
        ConfirmHeaderClassNames = classes;
        return (this as T)!;
    }

    /// <summary>
    /// Gets or sets the confirmation text.
    /// </summary>
    public virtual string? ConfirmText { get; protected set; }

    /// <summary>
    /// Gets or sets the icon associated with the confirmation text.
    /// </summary>
    public virtual string? ConfirmTextIcon { get; protected set; }

    /// <summary>
    /// Gets or sets the class names associated with the confirmation text.
    /// </summary>
    public virtual string? ConfirmTextClassNames { get; protected set; }

    /// <summary>
    /// Sets the confirmation text, icon, and class names.
    /// </summary>
    /// <param name="value">The confirmation text.</param>
    /// <param name="icon">The icon associated with the confirmation text.</param>
    /// <param name="classes">The class names associated with the confirmation text.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> action.</returns>
    public T SetConfirmText(string value, string? icon = null, string? classes = null)
    {
        ConfirmText = value;
        ConfirmTextIcon = icon;
        ConfirmTextClassNames = classes;
        return (this as T)!;
    }

    /// <summary>
    /// The text to display in the confirm button.
    /// </summary>
    public virtual string? ConfirmButtonText { get; protected set; }

    /// <summary>
    /// The icon to display on the confirm button.
    /// </summary>
    public virtual string? ConfirmButtonIcon { get; protected set; }

    /// <summary>
    /// The CSS class names to apply to the confirm button.
    /// </summary>
    public virtual string? ConfirmButtonClassNames { get; protected set; }

    /// <summary>
    /// Sets the text, icon, and CSS class names for the confirm button.
    /// </summary>
    /// <param name="value">The text to display on the confirm button.</param>
    /// <param name="icon">The icon to display on the confirm button.</param>
    /// <param name="classes">The CSS class names to apply to the confirm button.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> action.</returns>
    public T SetConfirmButtonText(string value, string? icon = null, string? classes = null)
    {
        ConfirmButtonText = value;
        ConfirmButtonIcon = icon;
        ConfirmButtonClassNames = classes;
        return (this as T)!;
    }

    /// <summary>
    /// The text to display in the cancel button.
    /// </summary>
    public virtual string? CancelButtonText { get; protected set; }

    /// <summary>
    /// The icon to display on the cancel button.
    /// </summary>
    public virtual string? CancelButtonIcon { get; protected set; }

    /// <summary>
    /// The CSS class names to apply to the cancel button.
    /// </summary>
    public virtual string? CancelButtonClassNames { get; protected set; }

    /// <summary>
    /// Sets the text, icon, and CSS class names for the cancel button.
    /// </summary>
    /// <param name="value">The text to display on the cancel button.</param>
    /// <param name="icon">The icon to display on the cancel button.</param>
    /// <param name="classes">The CSS class names to apply to the cancel button.</param>
    /// <returns>The current instance of the <typeparamref name="T"/> action.</returns>
    public T SetCancelButtonText(string value, string? icon = null, string? classes = null)
    {
        CancelButtonText = value;
        CancelButtonIcon = icon;
        CancelButtonClassNames = classes;
        return (this as T)!;
    }

    /// <summary>
    /// Creates a new <see cref="TrinityActionResult"/> instance with an "errors" action and the specified notifications and errors.
    /// </summary>
    /// <param name="notifications">The notifications to include in the action.</param>
    /// <param name="errors">The errors to include in the action.</param>
    /// <returns>A new instance of <see cref="TrinityActionResult"/> with an "errors" action.</returns>
    public static TrinityActionResult Errors(List<object> notifications, Dictionary<string, string> errors)
    {
        return new TrinityActionResult("errors", new
        {
            notifications,
            errors
        });
    }

    /// <summary>
    /// Creates a new instance of the <see cref="TrinityActionResult"/> class with a "redirect" result type.
    /// </summary>
    /// <param name="url">The URL to redirect to.</param>
    /// <param name="openUrlInNewTab">Whether the URL should be opened in a new tab.</param>
    /// <returns>A new instance of the <see cref="TrinityActionResult"/> with a "redirect" action.</returns>
    public static TrinityActionResult Redirect(string url, bool openUrlInNewTab = false)
    {
        return new TrinityActionResult("redirect", new
        {
            url, openUrlInNewTab
        });
    }

    /// <summary>
    /// Creates a new instance of the <see cref="TrinityActionResult"/> class with a "download" result type.
    /// </summary>
    /// <param name="url">The URL to download from.</param>
    /// <param name="filename">The filename to use for the downloaded file.</param>
    /// <returns>A new instance of the <see cref="TrinityActionResult"/> with a "download" action.</returns>
    public static TrinityActionResult Download(string url, string filename)
    {
        return new TrinityActionResult("download", new
        {
            url,
            filename
        });
    }

    /// <summary>
    /// Creates a new instance of the <see cref="TrinityActionResult"/> class with a "notifications" result type.
    /// </summary>
    /// <param name="severity">The severity level of the notification.</param>
    /// <param name="message">The message of the notification.</param>
    /// <param name="title">The title of the notification (optional).</param>
    /// <param name="lifeTimeMs">The amount of time (in milliseconds) that the notification should be displayed (default: 3000ms).</param>
    /// <param name="closable">Whether the notification can be closed by the user (default: true).</param>
    /// <param name="sticky">Whether the notification should stick until the user dismisses it (default: false).</param>
    /// <returns>A new instance of the <see cref="TrinityActionResult"/> class.</returns>
    public static TrinityActionResult Notification(NotificationSeverity severity, string message, string? title = null,
        int lifeTimeMs = 3000, bool closable = true,
        bool sticky = false)
    {
        return new TrinityActionResult("notifications", new
        {
            notifications = new List<object>()
            {
                new
                {
                    severity = Enum.GetName(severity)?.ToLower() ?? "error",
                    summary = title,
                    detail = message,
                    life = lifeTimeMs,
                    closable,
                    sticky
                }
            }
        });
    }
}