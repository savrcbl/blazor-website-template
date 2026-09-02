namespace PortfolioTemplate.Models
{
    // TODO: Replace these with your own projects.
    // Each Slug must be unique — it's used in the URL /projects/{slug}.
    public static class ProjectRepository
    {
        public static List<Project> GetAll() => new()
        {
            new Project
            {
                Name = "Example Project One",
                Description = "A short description of what this project does, the problem it solves, and any interesting technical details worth mentioning.",
                Technologies = new[] { "C#", ".NET", "Blazor" },
                Slug = "example-project-one",
                Url = "https://github.com/your-handle/example-project-one"
            },

            new Project
            {
                Name = "Example Project Two",
                Description = "Another short description. Keep these concise — a sentence or two is usually enough.",
                Technologies = new[] { "Python", "REST API" },
                Slug = "example-project-two",
                Url = "https://github.com/your-handle/example-project-two"
            }
        };
    }
}
