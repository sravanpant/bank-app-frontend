"use client";
import { ChevronRight, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "/public/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const contents = [
    { id: 1, name: "Deposit", link: "deposit" },
    { id: 2, name: "Dashboard", link: "dashboard" },
    { id: 3, name: "Company", link: "company" },
    { id: 4, name: "Pricing", link: "pricing" },
  ];

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setVisible(false)
    );
  }, []);

  return (
    <div className="font-jakarta sticky top-0 z-50 lg:mt-8 ">
      <div className="w-full flex justify-center">
        <div className="z-10 backdrop-blur-xl lg:backdrop-blur-0 flex justify-between p-5 items-center w-full lg:max-w-[80%]">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-[110px] h-6 " />
          </Link>
          <div className="hidden md:text-base md:flex space-x-16">
            {contents.map((content) => (
              <div className="hover:text-gray-700" key={content.id}>
                <Link href={content.link}>
                  <span>{content.name}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden md:flex space-x-5">
            <Button size={"sm"} className="text-sm font-semibold rounded-full ">
              <span className="px-2">Open your account</span>
            </Button>
            <Button
              size={"sm"}
              variant={"outline"}
              className="text-sm font-semibold rounded-full"
            >
              <span className="pl-2">Sign in </span>
              <div className="p-1">
                <ChevronRight size={15} strokeWidth={2} />
              </div>
            </Button>
          </div>
          <div
            onClick={() => setVisible(!visible)}
            className="md:hidden cursor-pointer"
          >
            {visible ? (
              <X size={35} strokeWidth={2} />
            ) : (
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75002 10.2083H16.0417C16.4285 10.2083 16.7994 10.362 17.0729 10.6354C17.3464 10.9089 17.5 11.2799 17.5 11.6666C17.5 12.0534 17.3464 12.4244 17.0729 12.6978C16.7994 12.9713 16.4285 13.125 16.0417 13.125H8.75002C8.36325 13.125 7.99231 12.9713 7.71882 12.6978C7.44533 12.4244 7.29169 12.0534 7.29169 11.6666C7.29169 11.2799 7.44533 10.9089 7.71882 10.6354C7.99231 10.362 8.36325 10.2083 8.75002 10.2083ZM18.9584 21.875H26.25C26.6368 21.875 27.0077 22.0286 27.2812 22.3021C27.5547 22.5756 27.7084 22.9465 27.7084 23.3333C27.7084 23.7201 27.5547 24.091 27.2812 24.3645C27.0077 24.638 26.6368 24.7916 26.25 24.7916H18.9584C18.5716 24.7916 18.2006 24.638 17.9272 24.3645C17.6537 24.091 17.5 23.7201 17.5 23.3333C17.5 22.9465 17.6537 22.5756 17.9272 22.3021C18.2006 22.0286 18.5716 21.875 18.9584 21.875ZM8.75002 16.0416H26.25C26.6368 16.0416 27.0077 16.1953 27.2812 16.4688C27.5547 16.7423 27.7084 17.1132 27.7084 17.5C27.7084 17.8868 27.5547 18.2577 27.2812 18.5312C27.0077 18.8047 26.6368 18.9583 26.25 18.9583H8.75002C8.36325 18.9583 7.99231 18.8047 7.71882 18.5312C7.44533 18.2577 7.29169 17.8868 7.29169 17.5C7.29169 17.1132 7.44533 16.7423 7.71882 16.4688C7.99231 16.1953 8.36325 16.0416 8.75002 16.0416Z"
                  fill="black"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div
        className={
          visible
            ? "fixed font-jakarta backdrop-blur-lg flex justify-start top-[6%] md:hidden ease-in duration-500 w-full"
            : "fixed font-jakarta top-[-50%] flex justify-start ease-in duration-500 w-full"
        }
      >
        <div className="flex flex-col p-5 items-start text-base space-y-2">
          {contents.map((content) => (
            <div className="hover:text-gray-700" key={content.id}>
              <Link href={content.link}>
                <span>{content.name}</span>
              </Link>
            </div>
          ))}
          <div className="flex flex-col space-y-3 py-2">
            <Button size={"sm"} className="text-sm font-semibold rounded-full ">
              Open your account
            </Button>
            <Button
              size={"sm"}
              variant={"outline"}
              className="text-sm font-semibold rounded-full"
            >
              Sign in{" "}
              <div className="p-1">
                <ChevronRight size={15} strokeWidth={2} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
