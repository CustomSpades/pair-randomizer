import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";
import tailwindstyles from "./tailwind.css";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export let links = () => {
  return [
    { rel: "stylesheet", href: tailwindstyles }
  ];
};