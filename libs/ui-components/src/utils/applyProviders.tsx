import { cloneElement, Fragment, ReactElement, ReactNode } from "react";

export function applyProviders(
  ...providers: (ReactElement | undefined | null)[]
): (children: ReactNode | undefined) => ReactElement {
  const filteredProviders = providers.filter((provider): provider is ReactElement => !!provider);
  if (filteredProviders.length === 0) {
    return (children: ReactNode | undefined): ReactElement => <Fragment>{children}</Fragment>;
  }

  return (children: ReactNode | undefined): ReactElement => {
    return filteredProviders.reduce<ReactElement>((acc, provider) => {
      if (!provider) {
        return acc;
      }
      return cloneElement(provider, undefined, acc);
    }, children as ReactElement);
  };
}
