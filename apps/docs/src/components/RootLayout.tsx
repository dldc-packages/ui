import { buildMenuTree, type MenuItem } from "@/utils/buildMenuTree";
import { Link, useLocation, useRouter } from "@tanstack/react-router";

interface RootLayoutProps {
  children: React.ReactNode;
}

interface MenuItemProps {
  item: MenuItem;
  location: ReturnType<typeof useLocation>;
  level?: number;
}

function MenuItem({ item, location, level = 0 }: MenuItemProps) {
  const isActive = item.path && location.pathname === item.path;
  const hasChildren = item.children && item.children.length > 0;
  const paddingLeft = `${0.75 + level * 1.25}rem`;

  if (!item.path) {
    // Item without a path - just render the label as text
    return (
      <li>
        <div
          className="px-4 py-3 text-sm font-semibold text-neutral-400 uppercase tracking-wide"
          style={{ paddingLeft }}
        >
          {item.label}
        </div>
        {hasChildren && (
          <ul className="space-y-0">
            {item.children!.map((child) => (
              <MenuItem key={child.path || child.label} item={child} location={location} level={level + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        to={item.path}
        className={`block px-4 py-2 rounded-md transition-colors text-sm ${
          isActive ? "bg-blue-900 text-blue-200 font-medium" : "text-neutral-300 hover:bg-neutral-700"
        }`}
        style={{ paddingLeft }}
      >
        {item.label}
      </Link>

      {hasChildren && (
        <ul className="space-y-0">
          {item.children!.map((child) => (
            <MenuItem key={child.path || child.label} item={child} location={location} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function RootLayout({ children }: RootLayoutProps) {
  const location = useLocation();
  const { routesByPath } = useRouter();

  const menuItems = buildMenuTree(Object.keys(routesByPath));

  return (
    <div className="grid grid-cols-[250px_1fr] gap-3">
      {/* Sidebar */}
      <aside className="bg-neutral-900 shadow-sm sticky top-0 h-screen rounded-md border border-neutral-700">
        <nav className="flex flex-col h-full overflow-y-auto">
          <div className="px-6 py-8 border-b border-neutral-700">
            <h1 className="text-2xl font-bold text-neutral-100">UI Docs</h1>
          </div>

          <ul className="flex-1 space-y-0 px-3 py-6">
            {menuItems.map((item) => (
              <MenuItem key={item.path || item.label} item={item} location={location} />
            ))}
          </ul>
        </nav>
      </aside>

      <main className="">
        <div className="h-full">{children}</div>
      </main>
    </div>
  );
}
