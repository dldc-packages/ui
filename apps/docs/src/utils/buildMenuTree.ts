export interface MenuItem {
  path: string | null;
  label: string;
  children?: MenuItem[];
}

export function buildMenuTree(paths: string[]): MenuItem[] {
  const itemMap: Record<string, MenuItem> = {};

  // First pass: create all menu items
  for (const path of paths) {
    if (path === "/") continue; // Skip root path

    const segments = path.split("/").filter(Boolean);

    // Create all items along the path
    let currentPath = "";
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      currentPath += "/" + segment;

      if (!itemMap[currentPath]) {
        const isLeaf = i === segments.length - 1;
        itemMap[currentPath] = {
          label: segment,
          path: isLeaf ? currentPath : null,
        };
      }
    }
  }

  // Second pass: build the tree structure
  const roots: MenuItem[] = [];
  const childrenMap: Record<string, MenuItem[]> = {};

  // Organize items into parent-child relationships
  for (const path of Object.keys(itemMap)) {
    const segments = path.split("/").filter(Boolean);

    if (segments.length === 1) {
      // Root level items
      roots.push(itemMap[path]);
      childrenMap[path] = [];
    } else {
      // Non-root items
      const parentPath = "/" + segments.slice(0, -1).join("/");
      if (!childrenMap[parentPath]) {
        childrenMap[parentPath] = [];
      }
      childrenMap[parentPath].push(itemMap[path]);
    }
  }

  // Assign children to their parent items
  for (const [path, children] of Object.entries(childrenMap)) {
    if (children.length > 0) {
      itemMap[path].children = children;
    }
  }

  return roots;
}
