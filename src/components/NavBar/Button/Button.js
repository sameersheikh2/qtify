// import * as styles from "./Button.module.css";

// export const Button = ({ children }) => {
//   return <div className={styles.btn}>{children}</div>;
// };

import React from "react";
import styles from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
