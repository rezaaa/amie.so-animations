import styles from "./page.module.css";
import clsx from "clsx";

const FeaturePreview = ({
  className,
  activeTitle,
  id,
}: {
  className: string;
  activeTitle: number | null;
  id: number;
}) => {
  return (
    <div
      className={clsx(
        styles.previewBox,
        className,
        activeTitle === id && styles.visible
      )}
    ></div>
  );
};

export default FeaturePreview;
