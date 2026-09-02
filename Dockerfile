# ===== Build stage =====
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Copy only the project file first so Docker can cache the restore step
COPY PortfolioTemplate/PortfolioTemplate.csproj PortfolioTemplate/
RUN dotnet restore PortfolioTemplate/PortfolioTemplate.csproj

# Copy the rest of the source and publish
COPY PortfolioTemplate/ PortfolioTemplate/
RUN dotnet publish PortfolioTemplate/PortfolioTemplate.csproj -c Release -o /app/publish

# ===== Runtime stage =====
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "PortfolioTemplate.dll"]
