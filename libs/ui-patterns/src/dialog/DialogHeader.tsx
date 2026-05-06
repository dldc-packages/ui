import { ComponentPropsBaseWith } from "@dldc/react-utils/types";
import * as ADialog from "@dldc/ui-ariakit/dialog";
import { DesignWrapper } from "@dldc/ui-components/design-wrapper";
import { IconBox } from "@dldc/ui-components/icon-box";
import { Typography } from "@dldc/ui-components/typography";
import { mlAuto } from "@dldc/ui-styles/utility";
import clsx from "clsx";
import { XIcon } from "lucide-react";
import { ReactNode } from "react";

import { dialogHeaderTitleWrapper, dialogHeaderWrapper } from "./dialog.css";

export type DialogHeaderProps = ComponentPropsBaseWith<
  "div",
  {
    title: string | ReactNode;
    startIcon?: ReactNode;
  }
>;

export function DialogHeader(inProps: DialogHeaderProps) {
  const { title, startIcon, className, ...htmlProps } = inProps;

  return (
    <DesignWrapper size="10" padding="0" className={clsx(dialogHeaderWrapper, className)} {...htmlProps}>
      <DesignWrapper padding="2x" className={dialogHeaderTitleWrapper}>
        <IconBox icon={startIcon} />
        <Typography fontWeight="semibold" render={<ADialog.DialogHeading />}>
          {title}
        </Typography>
      </DesignWrapper>
      <ADialog.DialogDismiss padding="2x" variant="ghost" startIcon={<XIcon />} className={mlAuto} />
    </DesignWrapper>
  );
}
