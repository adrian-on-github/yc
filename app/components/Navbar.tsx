import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
