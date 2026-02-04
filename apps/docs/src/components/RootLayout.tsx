import { Paper } from "@dldc/ui-components/paper";

import { Menu } from "./Menu";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative grid grid-cols-[250px_1fr] gap-3 px-3">
      {/* Sidebar */}
      <aside className="sticky top-0 flex max-h-screen flex-col gap-2 py-3">
        <Paper background="900" className="flex flex-col gap-2 overflow-y-auto py-2">
          <h1 className="px-3 text-2xl font-bold text-neutral-100">UI Docs</h1>
          <Menu />
        </Paper>
      </aside>

      <main>{children}</main>
    </div>
  );
}
