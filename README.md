# Blazor Portfolio Template

A clean, single-page portfolio site built with **Blazor Server (.NET 10)**. Includes a hero section, About, Tech Stack, Projects (with individual project detail pages), and Contact — all styled and ready to customize with your own information.

![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Blazor](https://img.shields.io/badge/Blazor-5C2D91?style=for-the-badge&logo=blazor&logoColor=white)

## Features

- Single-page scrolling layout with smooth-scroll navigation and scrollspy (active nav-link highlighting)
- Sections: Hero, About, Tech Stack, Projects, Contact
- Individual project detail pages (`/projects/{slug}`) generated from a simple C# list — no database needed
- Responsive design, no JS framework dependencies beyond what's included
- Ready to deploy in a Docker container (works on Render, Fly.io, Azure App Service, etc.)

## Getting Started

1. **Use this template** (click the "Use this template" button on GitHub) or clone it directly.
2. Open `PortfolioTemplate.slnx` in Visual Studio, or run from the command line:
   ```bash
   cd PortfolioTemplate
   dotnet run
   ```
3. Open the URL shown in the console (usually `https://localhost:5xxx`).

## Customizing

All the content you need to change lives in a small number of files:

| What to change | File |
|---|---|
| Your name, title, tagline, About text, Tech Stack pills, Contact links | `PortfolioTemplate/Components/Pages/Home.razor` |
| Your projects | `PortfolioTemplate/Models/ProjectRepository.cs` |
| Nav bar initials/logo | `PortfolioTemplate/Components/Layout/NavMenu.razor` |
| Colors, fonts, spacing (design tokens) | `PortfolioTemplate/wwwroot/app.css` (see `:root` at the top) |
| Favicon | `PortfolioTemplate/wwwroot/favicon.png` |
| Page title / meta tags | `PortfolioTemplate/Components/App.razor` |

Every spot that needs your info is marked with a `TODO` comment or an obvious placeholder like `Your Name` / `you@example.com` / `your-handle`.

### Adding a project

Open `ProjectRepository.cs` and add a new entry to the list:

```csharp
new Project
{
    Name = "My Cool Project",
    Description = "A short description of what it does.",
    Technologies = new[] { "C#", "Blazor" },
    Slug = "my-cool-project", // must be unique, used in the URL
    Url = "https://github.com/you/my-cool-project"
}
```

It'll automatically show up in the Projects grid and get its own detail page at `/projects/my-cool-project`.

### Contact links

The Email link in `Home.razor` opens a Gmail compose window in the browser (`mail.google.com/mail/?view=cm...`) rather than using a `mailto:` link, so it works even for visitors without a desktop mail client configured. Swap in your own email address, or change it back to a plain `mailto:` link if you prefer.

## Deploying

This template includes a `Dockerfile` at the repo root, so it can be deployed anywhere that runs Docker containers. A free option that works well:

1. Push this repo to your own GitHub account.
2. Create a free account at [render.com](https://render.com).
3. **New → Web Service** → connect your repo.
4. Set **Language** to `Docker` (Render will detect the Dockerfile automatically).
5. Choose the **Free** instance type.
6. Add this environment variable (avoids a container crash on constrained free-tier hosts):
   - Key: `DOTNET_hostBuilder__reloadConfigOnChange`
   - Value: `false`
7. Click **Create Web Service**.

Your site will be live at `https://your-service-name.onrender.com`.

> **Note:** Render doesn't allow changing a service's region or `.onrender.com` subdomain after creation — pick the name and region carefully, or delete and recreate the service if you need to change them.

## Tech Stack

- .NET 10 / Blazor Server (interactive server-side rendering over SignalR)
- Bootstrap Icons for iconography
- Plain CSS with custom properties for theming — no CSS framework or build step

## License

MIT — see [LICENSE](LICENSE). Free to use for your own portfolio, no attribution required (though it's appreciated!).
