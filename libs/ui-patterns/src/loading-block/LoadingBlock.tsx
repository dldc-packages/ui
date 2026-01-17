import { LoadingIcon } from "@dldc/ui-components/loading-icon";
import { loadingBlockClass, loadingTextClass } from "./styles.css";

export function LoadingBlock() {
  return (
    <div className={loadingBlockClass}>
      <LoadingIcon size={60} />
      <div className={loadingTextClass}>Loading...</div>
    </div>
  );
}
