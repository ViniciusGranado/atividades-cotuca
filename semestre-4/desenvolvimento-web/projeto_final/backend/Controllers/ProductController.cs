using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{

  [Route("api/product")]
  [ApiController]
  public class ProductController : Controller
  {
    private readonly StoreContext _context;
    public ProductController(StoreContext context)
    {
      // construtor
      _context = context;
    }
    [HttpGet]
    public ActionResult<List<Product>> GetAll()
    {
      return _context.Product.ToList();
    }

    [HttpGet("{ProductId}")]
    public ActionResult<List<Product>> Get(int ProductId)
    {
      try
      {
        Product? result = _context.Product.Find(ProductId);
        if (result is null)
        {
          return NotFound();
        }
        return Ok(result);
      }
      catch
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
      }
    }
    [HttpPost]
    public async Task<ActionResult> post(Product model)
    {
      try
      {
        _context.Product.Add(model);
        if (await _context.SaveChangesAsync() == 1)
        {
          //return Ok();
          return Created($"/api/aluno/{model.id}", model);
        }
      }
      catch
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
      }
      // retorna BadRequest se não conseguiu incluir
      return BadRequest();
    }

    [HttpPut("{ProductId}")]
    public async Task<IActionResult> put(int ProductId, Product dadosProductAlt)
    {
      try
      {
        //verifica se existe aluno a ser alterado
        var result = await _context.Product.FindAsync(ProductId);
        if (ProductId != result.id)
        {
          return BadRequest();
        }
        result.id = dadosProductAlt.id;
        result.name = dadosProductAlt.name;
        result.description = dadosProductAlt.description;
        result.imgUrl = dadosProductAlt.imgUrl;
        result.price = dadosProductAlt.price;
        await _context.SaveChangesAsync();
        return Created($"/api/aluno/{dadosProductAlt.id}", dadosProductAlt);
      }
      catch
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, "Falhano acesso ao banco de dados.");
      }
    }

    [HttpDelete("{ProductId}")]
    public async Task<ActionResult> delete(int ProductId)
    {
      try
      {
        //verifica se existe aluno a ser excluído
        Product? aluno = await _context.Product.FindAsync(ProductId);
        if (aluno == null)
        {
          //método do EF
          return NotFound();
        }
        _context.Remove(aluno);
        await _context.SaveChangesAsync();
        return NoContent();
      }
      catch
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
      }
    }
  }
}