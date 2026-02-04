import { Button } from "@dldc/ui-ariakit/button";
import { Link, useLocation, useRouter } from "@tanstack/react-router";

import { buildMenuTree, type TMenuItem } from "@/utils/buildMenuTree";
import { cn } from "@/utils/styles";

export function Menu() {
  const location = useLocation();
  const { routesByPath } = useRouter();

  const menuItems = buildMenuTree(Object.keys(routesByPath));

  return (
    <ul className="flex flex-col gap-1 px-2">
      {menuItems.map((item) => (
        <MenuItem key={item.segment} item={item} location={location} />
      ))}
    </ul>
  );
}

interface MenuItemProps {
  item: TMenuItem;
  location: ReturnType<typeof useLocation>;
  level?: number;
}

function MenuItem({ item, location, level = 0 }: MenuItemProps) {
  const isActive = item.link && location.pathname === item.link;
  const hasChildren = item.children && item.children.length > 0;
  const paddingLeft = `${0.75 + level * 1.25}rem`;

  const self = item.link ? (
    <Button
      render={<Link to={item.link} />}
      variant={isActive ? "solid" : "ghost"}
      color={isActive ? "blue" : "neutral"}
      height="8"
      contentHeight="4x"
      className="w-full"
    >
      {item.label}
    </Button>
  ) : (
    <div className="text-sm font-semibold tracking-wide text-neutral-400 uppercase" style={{ paddingLeft }}>
      {item.label}
    </div>
  );

  return (
    <li className={cn("flex flex-col items-stretch", hasChildren && "mt-2 gap-1")}>
      {self}
      {hasChildren && (
        <ul className="ml-2 flex flex-col gap-1">
          {item.children!.map((child) => (
            <MenuItem key={child.segment} item={child} location={location} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
