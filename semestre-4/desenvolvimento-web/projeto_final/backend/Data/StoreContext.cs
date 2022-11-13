using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
  public class StoreContext : DbContext
  {
    protected readonly IConfiguration Configuration;
    public StoreContext(IConfiguration configuration)
    {
      Configuration = configuration;
    }
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
      // connect to sql server with connection string from app settings
      options.UseMySql(Configuration.GetConnectionString("StringConexaoMySQL"), new MySqlServerVersion(new Version(8, 0, 11)));
    }
    public DbSet<Product>? Product { get; set; }
    public DbSet<User>? User { get; set; }
  }
}