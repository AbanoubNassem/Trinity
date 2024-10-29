// using AbanoubNassem.Trinity.Models;
// using AbanoubNassem.Trinity.Pages;
//
// namespace AbanoubNassem.Trinity.Notifications;
//
// /// <summary>
// /// Represents a notification regarding a badge update on a <see cref="TrinityPage"/>.
// /// </summary>
// public class TrinityPageBadgeUpdateNotification : TrinityNotification
// {
//     private readonly TrinityPage _page;
//     private readonly TrinityBadge _badge;
//
//     /// <summary>
//     /// Initializes a new instance of the <see cref="TrinityPageBadgeUpdateNotification"/> class.
//     /// </summary>
//     /// <param name="page">The page where the badge is updated.</param>
//     /// <param name="badge">The badge that has been updated.</param>
//     public TrinityPageBadgeUpdateNotification(TrinityPage page, TrinityBadge badge)
//     {
//         _page = page;
//         _badge = badge;
//     }
//
//     /// <summary>
//     /// Gets the data to be sent as part of the notification.
//     /// </summary>
//     /// <param name="serviceProvider">The service provider to resolve services.</param>
//     /// <param name="userIdentifier">The identifiers of the users to be notified.</param>
//     /// <returns>An anonymous object containing the data for the notification.</returns>
//     public override TrinityNotificationData Data(IServiceProvider serviceProvider, string? userIdentifier = null)
//     {
//         // return new
//         // {
//         //     Page = _page.Slug,
//         //     Badge = _badge
//         // };
//         return new TrinityNotificationData()
//         {
//             Title = _page.Slug,
//             Body = _page.Badge;
//         };
//     }
// }