using SignalRChat.Hubs;
using Microsoft.EntityFrameworkCore;

public class Program
{

    public static void Main(String[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddSignalR();

        builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("Default")));

        builder.Services.AddCors(options =>
        {
           options.AddPolicy("AllowFrontend", policy =>
           {
               policy.WithOrigins("http://192.168.0.82:5173")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();

           });
        });

        var app = builder.Build();

        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/error");
            app.UseHsts();
        }

        app.UseHttpsRedirection();

        app.UseRouting();

        app.UseCors("AllowFrontend");

        app.UseAuthorization();

        app.MapHub<ChatHub>("/chatHub");
        
        app.Run();

    }
}