import { ReactNode, useRef, useEffect } from "react";
import styles from "./page.module.css";
import clsx from "clsx";
import { useInView } from "framer-motion";

const FeatureTitle = ({
  children,
  id,
  activeTitle,
  setActiveTitle,
}: {
  children: ReactNode;
  id: number;
  activeTitle: number | null;
  setActiveTitle: any;
}) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveTitle(id);
    }
  }, [isInView]);

  return (
    <div
      className={clsx(styles.title, activeTitle === id && styles.active)}
      ref={titleRef}
    >
      {children}
    </div>
  );
};

export default FeatureTitle;
