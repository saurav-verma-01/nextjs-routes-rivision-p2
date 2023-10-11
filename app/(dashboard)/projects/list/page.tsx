// import React from 'react'

import Link from "next/link";
import styles from "./projects.module.css";

const page = () => {
  return (
    <main>
      <h1>My Projects</h1>

      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">JobIt</Link>
        </li>
        <li>
          <Link href="/projects/carrent">CarRent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">HipNode</Link>
        </li>
      </ul>
    </main>
  );
};

export default page;
