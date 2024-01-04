import Image from "next/image";

import classes from "./hero.module.css";

// Welcome section.
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sallam.jpg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Sallam Rady</h1>
      <p>
        I blog about web development - especially mern stack and JS I love JS so much &#128525;. 
      </p>
    </section>
  );
}

export default Hero;
