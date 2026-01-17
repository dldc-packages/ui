export interface TMenuItem {
  segment: string;
  link?: string;
  label: string;
  children: TMenuItem[];
}

export function buildMenuTree(paths: string[]): TMenuItem[] {
  const items: TMenuItem[] = [];

  paths.forEach((path) => {
    const segments = path.split("/").filter(Boolean);

    let currentLevel = items;

    segments.forEach((segment, index) => {
      let existingItem = currentLevel.find((item) => item.segment === segment);

      if (!existingItem) {
        existingItem = {
          segment,
          label: segmentToName(segment),
          children: [],
        };
        currentLevel.push(existingItem);
      }

      if (index === segments.length - 1) {
        existingItem.link = path;
      }

      currentLevel = existingItem.children;
    });
  });

  return items;
}

function segmentToName(segment: string): string {
  return segment
    .replace(/^\d+-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
