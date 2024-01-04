import Link from "next/link";
import classes from "./main-navbar.module.css";

const MainNavbar = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Sallam&apos; Next Blog</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavbar;
