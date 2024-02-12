using AbanoubNassem.Trinity.Components.TrinityAction;

namespace AbanoubNassem.Trinity.Models;

public class TrinityNotificationData
{
    public string Title { get; set; }
    public string Body { get; set; }
    
    public string? BodyColor { get; set; }

    public string? Icon { get; set; }
    public string? IconColor { get; set; }
    public string? Image { get; set; }

    public TrinityAction? Action { get; set; }
}