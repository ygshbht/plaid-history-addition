import React from "react";

import styles from "./index.module.scss";

interface Props {
  children?: React.ReactNode | Array<React.ReactNode>;
  title: string;
}

const TypeContainer: React.FC<Props> = (props) => (
  <>
    <div className={styles.itemsContainer}>
      <h4 className={styles.itemsHeader}>{props.title}</h4>
      {props.children}
    </div>
  </>
);

TypeContainer.displayName = "TypeContainer";

export default TypeContainer;
