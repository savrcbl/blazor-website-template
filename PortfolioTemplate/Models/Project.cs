namespace PortfolioTemplate.Models
{
    public class Project
    {
        public string Name { get; set; } = "";
        public string Description { get; set; } = "";
        public string[] Technologies { get; set; } = Array.Empty<string>();

        public string Slug { get; set; } = "";

        public string Url { get; set; } = "";
    }
}
