using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AbanoubNassem.Trinity.Controllers;

[Authorize]
[AutoValidateAntiforgeryToken]
public abstract class TrinityController : Controller
{
    
}