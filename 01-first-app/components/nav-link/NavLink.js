"use client";

import Link from "next/link";
import classes from "./Navlink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  // declaration...
  let path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith({ href })
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
