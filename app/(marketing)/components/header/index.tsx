// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";

import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import logo from "@/public/logo.png";

const Header = () => {
  return (
    <header className="w-full border-b bg-background border-gray-200">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image src={logo} alt="Logo" height={80} width = {80} priority />

            <span className="font-['cinzel'] text-3xl font-bold text-['#ff5e1e']">
              {APP_NAME}
            </span>
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
