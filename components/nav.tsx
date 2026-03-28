"use client";

import { usePathname } from "next/navigation";
import styles from "./nav.module.css";

const links = [
  { href: "/", label: "Start" },
  { href: "/test", label: "Test" },
  { href: "/results", label: "Result" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className={styles.navBar}>
      {links.map(({ href, label }) => (
        <span
          key={href}
          className={`${styles.navItem} ${pathname === href ? styles.active : ""}`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}