"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import starPic1 from "/public/star1.svg";
import starPic2 from "/public/star2.svg";
import cardPic from "/public/card.svg";
import arrowPic from "/public/arrow.svg";
import cardPic1 from "/public/card1.svg";
import handPic1 from "/public/hand1.svg";
import backgroundPic from "/public/background.svg";
import wavesPic from "/public/waves.svg";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div>
      <div className="w-[33%] h-[40%] bottom-3 left-[67%] z-40 absolute overflow-hidden">
        <Image
          src={wavesPic}
          alt="waves"
          className="lg:block hidden"
        />
      </div>
      <Image
        src={handPic1}
        alt="hand1"
        className="absolute lg:flex z-10 bottom-2 left-[75%] hidden "
      />
      <Image
        src={cardPic1}
        alt="card1"
        className="absolute lg:flex hidden z-20 bottom-[38%]  left-[73%]"
      />
      <Image
        src={backgroundPic}
        alt="background"
        className="absolute z-0 top-0 lg:flex hidden right-0"
      />
      <div className="font-jakarta px-10 md:px-5 py-5 mt-12 md:mt-10 relative lg:max-w-[50%] lg:ml-[10%] lg:mr-[55%] text-[#1D1D1C]  overflow-clip">
        <Image src={starPic1} alt="star1" className="w-12 h-4 mb-11" />
        <Image
          src={starPic2}
          alt="star2"
          className="absolute -top-0 right-8 w-20 h-20"
        />
        <div
          className="absolute top-4 left-12 w-60 h-60 bg-[#F8EAE8] rounded-full 
                mix-blend-multiply filter blur-2xl opacity-70"
        ></div>
        <h1 className="font-cormorant text-6xl md:text-7xl mb-4 leading-[109%]">
          All the <span className="font-bold">experience</span> in the new
          credit card
        </h1>

        <Image src={arrowPic} className="my-10" alt="arrow" />
        <p className="text-base mr-[40%] mb-6">
          Simple transfers, payments for utilities, functional statemement, card
          settings, for which you used to have to go to the branch
          online-banking
        </p>
        <div
          className="absolute top-72 left-72 w-60 h-60 bg-[#E5E9F4] rounded-full 
                mix-blend-multiply filter blur-3xl opacity-70"
        ></div>
        <div className="flex items-center space-x-1 justify-start my-8">
          <Button
            size={"default"}
            className="rounded-full text-base md:text-xl"
          >
            <span className="mx-4">Order a card</span>
          </Button>
          <Button size={"sm"} variant={"link"} className="text-base md:text-xl">
            How it works <ChevronRight size={15} strokeWidth={2} />
          </Button>
        </div>
        <div className="flex space-x-7">
          <div className="flex flex-col">
            <span className="text-sm">Active users</span>
            <span className="text-lg font-bold">5000+</span>
          </div>
          <div className="border"></div>
          <div className="flex flex-col">
            <span className="text-sm">Download</span>
            <span className="text-lg font-bold">30.3k</span>
          </div>
          <div className="border"></div>
          <div className="flex flex-col">
            <span className="text-sm">Reviews</span>
            <span className="text-lg font-bold">1200+</span>
          </div>
        </div>
        <Image src={cardPic} alt="card" className="lg:hidden my-10" />
      </div>
    </div>
  );
};

export default HeroSection;
