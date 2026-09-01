public class SendMessageService
{
    private readonly AppDbContext _context;
    public SendMessageService(AppDbContext context)
    {
        _context = context;
    }

    public void sendMessage(string username, string message)
    {
        _context.Message.Add(new Message
        {
            User = username,
            Msg = message,
            MsgTime = DateTime.Now
        });
        _context.SaveChanges();
    }
    
}