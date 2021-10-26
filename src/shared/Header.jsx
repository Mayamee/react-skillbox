import * as React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./header.css";
export function HeaderComponent() {
  console.log(styles, styles.example);
  return (
    <header>
      <h1 className={styles.example}>Reddit for our own Test</h1>
      <p>Hi test</p>
    </header>
  );
}
export const Header = hot(HeaderComponent);
