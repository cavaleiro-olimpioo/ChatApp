public class Program
{
    public static void Main(String[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        app.MapGet("/", () => Results.File("../frontend/pages/index.html", "text/html"));

        app.Run();

    }
}