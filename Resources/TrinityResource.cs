using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.Resources;

public abstract class TrinityResource
{
    public virtual string? Label { get; set; } 

    public virtual string? PluralLabel { get; set; } 
}