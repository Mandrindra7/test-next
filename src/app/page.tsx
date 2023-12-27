"use client";

import styles from "./page.module.scss";
import Account from "./Account/Account";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <SideBar />
      <div className={styles.container}>
        <Account />
      </div>
    </main>
  );
}
