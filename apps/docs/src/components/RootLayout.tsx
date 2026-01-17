import { Paper } from "@dldc/ui-components/paper";
import { Menu } from "./Menu";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="grid grid-cols-[250px_1fr] gap-3 px-3 relative">
      {/* Sidebar */}
      <aside className="py-3 max-h-screen sticky top-0 flex flex-col gap-2">
        <Paper background="900" className="flex flex-col overflow-y-auto py-2 gap-2">
          <h1 className="text-2xl font-bold text-neutral-100 px-3">UI Docs</h1>
          <Menu />
        </Paper>
      </aside>

      <main>{children}</main>
    </div>
  );
}
