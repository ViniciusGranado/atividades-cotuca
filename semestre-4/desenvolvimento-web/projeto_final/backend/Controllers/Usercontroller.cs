using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace backend.Controllers
{
  [ApiController]
  [Route("/api/user")]
  public class UserController : ControllerBase
  {
    private readonly IConfiguration _configuration;
    private readonly StoreContext _context;

    public UserController(
      IConfiguration configuration,
      StoreContext context)
    {
      _configuration = configuration;
      _context = context;
    }

    [HttpPost]
    [Route("login")]
    [AllowAnonymous]
    public ActionResult<dynamic> Login(LoginDto loginDto)
    {
      var user = _context.User.Where((u) => u.username == loginDto.username && u.password == loginDto.password).FirstOrDefault();

      if (user is null)
      {
        return Unauthorized("Invalid user or password");
      }

      var authClaims = new List<Claim>
      {
        new Claim(ClaimTypes.Name, user.username),
        new Claim(ClaimTypes.Role, user.role),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
      };

      var token = GetToken(authClaims);

      return Ok(new
      {
        token = new JwtSecurityTokenHandler().WriteToken(token),
        user = new UserDto{
          Id = user.Id,
          username = user.username,
          role = user.role
        },
      });
    }

    [HttpGet]
    [Route("anonymous")]
    [AllowAnonymous]
    public string Anonymous() => "Anonymous";

    [HttpGet]
    [Route("authenticated")]
    [Authorize]
    public string Authenticated() => String.Format("Authenticated - {0}", User.Identity.Name);

    [HttpGet]
    [Route("seller")]
    [Authorize(Roles = "administrator, seller")]
    public string Seller() => "Seller";

    [HttpGet]
    [Route("administrator")]
    [Authorize(Roles = "administrator")]
    public string Administrator() => "Administrator";

    private JwtSecurityToken GetToken(List<Claim> authClaims)
    {
      var authSigningKey = new

      SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

      var token = new JwtSecurityToken(
      expires: DateTime.Now.AddHours(3),
      issuer: _configuration["JWT:ValidIssuer"],
      audience: _configuration["JWT:ValidAudience"],
      claims: authClaims,
      signingCredentials: new SigningCredentials(authSigningKey,

      SecurityAlgorithms.HmacSha256)

      );
      return token;
    }
  }
}