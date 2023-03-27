using System.Text.Json.Serialization;
using AbanoubNassem.Trinity.Components.Interfaces;
using AbanoubNassem.Trinity.Utilities;

namespace AbanoubNassem.Trinity.Components.TrinityAction;

public class TrinityActionResult
{
    public TrinityActionResult(string type, object data)
    {
        Type = type;
        Data = data;
    }

    public string Type { get; init; }
    public object Data { get; init; }
}

public interface ITrinityAction : ITrinityComponent
{
    public string ActionName { get; init; }
    [JsonIgnore] public TrinityForm? Form { get; set; }

    public Task<TrinityActionResult> Handle(Dictionary<string, object?> form,
        IReadOnlyCollection<IDictionary<string, object?>> records);
}

public enum ActionSeverity
{
    Primary,
    Secondary,
    Success,
    Info,
    Warning,
    Help,
    Danger
}

public sealed class TrinityAction : TrinityAction<TrinityAction>
{
    public TrinityAction(string action) : base(action)
    {
    }
}

public abstract class TrinityAction<T> : TrinityComponent<T, object>, ITrinityAction where T : TrinityAction<T>
{
    public override string Type => "Action";
    public override string ComponentName => "TrinityAction";
    public string ActionName { get; init; }

    protected TrinityAction(string action)
    {
        ActionName = action;
    }

    public override void Setup()
    {
    }

    public delegate Task<TrinityActionResult> HandleActionUsingDelegate(Dictionary<string, object?> form,
        IReadOnlyCollection<IDictionary<string, object?>> records);

    protected virtual HandleActionUsingDelegate? HandleActionUsing { get; private set; }

    public T SetHandleActionUsing(HandleActionUsingDelegate handleActionUsing)
    {
        HandleActionUsing = handleActionUsing;
        return (this as T)!;
    }

    public virtual async Task<TrinityActionResult> Handle(Dictionary<string, object?> form,
        IReadOnlyCollection<IDictionary<string, object?>> records)
    {
        if (HandleActionUsing != null)
            return await HandleActionUsing(form, records);

        return await Task.FromResult(new TrinityActionResult("empty", new { }));
    }

    public List<object>? Schema =>
        Form?.Schema == null ? null : new List<object>(TrinityForm.FilterSchema(Form?.Schema, ServiceProvider));

    [JsonIgnore] public virtual TrinityForm? Form { get; set; }

    public T SetForm(TrinityForm form)
    {
        Form = form;
        return (this as T)!;
    }

    public virtual string? Icon { get; protected set; }

    public T SetIcon(string value)
    {
        Icon = value;
        return (this as T)!;
    }

    public virtual string Severity { get; protected set; } = "primary";

    public T SetSeverity(ActionSeverity severity)
    {
        Severity = Enum.GetName(severity)?.ToLower() ?? "primary";
        return (this as T)!;
    }

    public string? Url { get; protected set; }

    public bool OpenUrlInNewTab { get; protected set; }

    public T SetAsUrl(string url, bool openUrlInNewTab = false)
    {
        Url = url;
        OpenUrlInNewTab = openUrlInNewTab;
        return (this as T)!;
    }

    public bool RequiresConfirmation { get; protected set; }

    public T SetRequiresConfirmation(bool requiresConfirmation = true)
    {
        RequiresConfirmation = requiresConfirmation;
        SetConfirmHeader(ComponentName);
        SetConfirmText("Are you sure you want to run this action?", "pi pi-info-circle");
        SetConfirmButtonText("Yes", "pi pi-check", "p-button-success");
        SetCancelButtonText("No", "pi pi-times");
        return (this as T)!;
    }

    public virtual string? ConfirmHeader { get; protected set; }
    public virtual string? ConfirmHeaderClassNames { get; protected set; }

    public T SetConfirmHeader(string value, string? classes = null)
    {
        ConfirmHeader = value;
        ConfirmHeaderClassNames = classes;
        return (this as T)!;
    }

    public virtual string? ConfirmText { get; protected set; }
    public virtual string? ConfirmTextIcon { get; protected set; }
    public virtual string? ConfirmTextClassNames { get; protected set; }

    public T SetConfirmText(string value, string? icon = null, string? classes = null)
    {
        ConfirmText = value;
        ConfirmTextIcon = icon;
        ConfirmTextClassNames = classes;
        return (this as T)!;
    }

    public virtual string? ConfirmButtonText { get; protected set; }
    public virtual string? ConfirmButtonIcon { get; protected set; }
    public virtual string? ConfirmButtonClassNames { get; protected set; }

    public T SetConfirmButtonText(string value, string? icon = null, string? classes = null)
    {
        ConfirmButtonText = value;
        ConfirmButtonIcon = icon;
        ConfirmButtonClassNames = classes;
        return (this as T)!;
    }

    public virtual string? CancelButtonText { get; protected set; }
    public virtual string? CancelButtonIcon { get; protected set; }
    public virtual string? CancelButtonClassNames { get; protected set; }

    public T SetCancelButtonText(string value, string? icon = null, string? classes = null)
    {
        CancelButtonText = value;
        CancelButtonIcon = icon;
        CancelButtonClassNames = classes;
        return (this as T)!;
    }

    public static TrinityActionResult Errors(List<object> notifications, Dictionary<string, string> errors)
    {
        return new TrinityActionResult("errors", new
        {
            notifications,
            errors
        });
    }

    public static TrinityActionResult Redirect(string url, bool openUrlInNewTab = false)
    {
        return new TrinityActionResult("redirect", new
        {
            url, openUrlInNewTab
        });
    }

    public static TrinityActionResult Download(string url, string filename)
    {
        return new TrinityActionResult("download", new
        {
            url,
            filename
        });
    }

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