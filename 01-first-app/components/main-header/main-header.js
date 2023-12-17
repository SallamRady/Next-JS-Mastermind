import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "@/components/main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background/main-header-background";
import NavLink from "@/components/nav-link/NavLink";

const mainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            width="1024"
            height="1024"
            src={logoImg.src}
            alt="A plate with food on it."
            priority
          />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default mainHeader;
