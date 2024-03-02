import * as React from "react";
import { createPortal } from "react-dom";

export interface IPortalProps {
  children: JSX.Element | JSX.Element[];
}

export function Portal({ children }: IPortalProps) {
  const [portal, setPortal] = React.useState<HTMLElement>();

  React.useEffect(() => {
    const node = document.getElementById("portal");
    if (node) setPortal(node);
  }, []);

  if (!portal) return null;

  return createPortal(children, portal);
}
