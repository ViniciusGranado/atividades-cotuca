namespace backend.Models
{
  public class Product
  {
    public int id { get; set; }
    public string name { get; set; }
    public string description { get; set; }
    public string imgUrl { get; set; }
    public float price { get; set; }
    public int userId { get; set; }
  }
}