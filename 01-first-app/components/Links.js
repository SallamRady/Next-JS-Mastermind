import Link from "next/link";

export default function Links() {
  return (
    <>
      <div className="mainHeader">
        <Link href="/">Home</Link>
        <Link href="/awesome">Awesome</Link>
        <Link href="/about">About us</Link>
      </div>
    </>
  );
}
