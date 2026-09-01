using Microsoft.AspNetCore.SignalR;

namespace SignalRChat.Hubs
{
    public class ChatHub : Hub
    {
        public async Task sendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReciveMessage", user, message);
        }
    }
}