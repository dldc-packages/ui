import { GeometryPaper } from "@dldc/ui-components/geometry-paper";

import { Menu } from "./Menu";

const MENU_VISIBLE = true;

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative grid grid-cols-[250px_1fr] gap-3 px-3">
      {/* Sidebar */}
      <aside className="sticky top-0 flex max-h-screen flex-col gap-2 py-3">
        <GeometryPaper
          background="900"
          className="py-paddingVar gap-paddingVar flex flex-col overflow-y-auto"
          padding="2"
          rounded="3"
        >
          <h1 className="px-3 text-2xl font-bold text-neutral-100">UI Docs</h1>
          {MENU_VISIBLE && <Menu />}
        </GeometryPaper>
      </aside>

      <main>{children}</main>
    </div>
  );
}
