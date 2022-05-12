import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-16 flex justify-between items-center px-16">
      <div className="h-28 w-28">
        <Link href="/">
          <img className="rounded-full" src="images.jpg" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
