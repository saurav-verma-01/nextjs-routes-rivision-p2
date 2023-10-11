// import React from 'react'
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <p>Next.js</p>
        </Link>

        <ul className={styles.links}>
          <Link href="/about">
            {" "}
            <li>About ✏️</li>
          </Link>
          <Link href="/contact">
            {" "}
            <li>Contact 📞</li>
          </Link>
          <Link href="/signin">
            {" "}
            <li>Sign In 🔑</li>
          </Link>
          <Link href="/signup" className={styles.cta}>
            {" "}
            <li>Sign Up ✉️</li>
          </Link>
          {/* <Link href="/"> <li>Home</li></Link>
      <Link href="/"> <li>Home</li></Link> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
