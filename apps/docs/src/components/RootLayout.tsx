import { Link, useLocation, useRouter } from "@tanstack/react-router";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  const location = useLocation();
  const { routesByPath } = useRouter();

  // Generate menu items from routes
  const menuItems = Object.entries(routesByPath)
    .filter(([path]) => path !== "/__root")
    .map(([path]) => {
      const label =
        path === "/"
          ? "Home"
          : path
              .replace(/^\/|\/$/g, "")
              .split("/")
              .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
              .join(" ");
      return { path, label };
    })
    .sort((a, b) => {
      if (a.path === "/") return -1;
      if (b.path === "/") return 1;
      return a.path.localeCompare(b.path);
    });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-[200px] border-r border-gray-200 bg-white shadow-sm">
        <nav className="flex flex-col h-full overflow-y-auto">
          <div className="px-6 py-8 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">UI Docs</h1>
          </div>

          <ul className="flex-1 space-y-1 px-4 py-6">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-2.5 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 px-6 py-4 text-xs text-gray-500">
            <p>© 2025 DLDC UI</p>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="h-full">{children}</div>
      </main>
    </div>
  );
}
