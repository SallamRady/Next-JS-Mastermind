import Link from "next/link";
import logoImg from "@/assets/logo.png";
import stles from "@/components/main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background/main-header-background";

const mainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={stles.header}>
        <Link href="/" className={stles.logo}>
          <Image width='1024' height='1024' src={logoImg.src} alt="A plate with food on it." priority />
          NextLevel Food
        </Link>
        <nav className={stles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default mainHeader;
