import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
import logo from "@/public/logo.png";

const Header = () => {
  return (
    <header className="w-full border-b bg-white border-gray-200">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <div className="relative w-[150px] h-[30px] md:w-[200px] md:h-[40px]">
              <Image
                src={logo}
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
