
# Council Bin Apps Privacy Policy

This is a React-based single-page application (SPA) that hosts privacy policies for multiple council waste collection apps.

## Features

- **Multi-Council Support:** Dynamic routing for different councils (e.g., `/#/hills`, `/#/blacktown`).
- **Responsive Design:** Built with Tailwind CSS for mobile and desktop.
- **Auto-Scrolling:** Sidebar navigation with intersection observers.

## Deployment to GitHub Pages

This project is configured to deploy automatically via GitHub Actions.

### Prerequisites

1.  Ensure you have pushed the `.github/workflows/deploy.yml` file to your repository.
2.  Your `vite.config.ts` must have `base: './'` set (already configured).

### Setup

1.  Go to your GitHub Repository.
2.  Navigate to **Settings** > **Pages**.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  The action will trigger on the next push to the `main` branch.

### URL Structure

Because GitHub Pages does not support SPA routing natively, we use `HashRouter`.

- **Home:** `https://<user>.github.io/<repo>/#/`
- **Hills Policy:** `https://<user>.github.io/<repo>/#/hills`
- **Blacktown Policy:** `https://<user>.github.io/<repo>/#/blacktown`
- **Parramatta Policy:** `https://<user>.github.io/<repo>/#/parramatta`

## Adding a New Council

1.  Open `constants.tsx`.
2.  Add a new entry to the `COUNCILS` object:
    ```typescript
    'newcouncil': {
      id: 'newcouncil',
      appName: 'New Council Bins',
      councilName: 'New Council City',
      lastUpdated: 'Month Day, Year',
      contactEmail: 'support@example.com',
    },
    ```
3.  Deploy the changes. The new route `/#/newcouncil` will be available automatically.
