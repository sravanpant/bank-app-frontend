import React from "react";
import logo from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-5 font-jakarta space-y-1">
      <Image src={logo} alt="logo" className="my-1 w-[70px] h-4" />
      <div className="text-sm text-gray-400 py-1">
        Copyright © 2024 Cardo Inc. All rights reserved.
      </div>
      <div className="flex space-x-3 text-gray-400 text-sm">
        <span>Privacy policy</span>
        <div className="">|</div>
        <span>Terms of service</span>
      </div>
      <div>
        <span className="text-sm text-gray-400">
          Designed by{" "}
          <Link href={"https://dribbble.com/m4st3rmiau"} className="underline">
            Mauricio Lopez
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
