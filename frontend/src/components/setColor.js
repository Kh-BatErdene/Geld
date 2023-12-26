"use client";
import { Context } from "@/app/layout";
import { useContext, useState } from "react";
// import { AiFillAlipayCircle } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { PiLadderFill } from "react-icons/pi";
import { PiIntersectSquareFill } from "react-icons/pi";
import { FaImage } from "react-icons/fa6";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiNotepadFill } from "react-icons/pi";
import { ImMenu } from "react-icons/im";
import { PiLeafFill } from "react-icons/pi";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { PiRoadHorizonFill } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { PiAnchorSimpleBold } from "react-icons/pi";
import { PiTriangleFill } from "react-icons/pi";
import { PiIntersectBold } from "react-icons/pi";
import { BiLogoFlickrSquare } from "react-icons/bi";
import { FaBaseballBall } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { TbSquareRoundedLetterA } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { PiGlobeSimpleFill } from "react-icons/pi";
import { TbLemon } from "react-icons/tb";
import { FaPeace } from "react-icons/fa";
import { PiToiletPaperFill } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";

const colorData = [
  "#FF7B01",
  "#AE01FF",
  "#FF0101",
  "#01B3FF",
  "#41CC00",
  "#0166FF",
  "#F9D100",
];

export default function AddCatergoryIcons(props) {
  const { categoryValueAdd, setCategoryValueAdd, color_, setColor } =
    useContext(Context);

  const style = { color: color_, size: 84 };
  const data = [
    <TiHome {...{ style }} />,
    <MdHomeFilled {...{ style }} />,
    <RiContactsBook2Fill {...{ style }} />,
    <MdContactMail {...{ style }} />,
    <PiLadderFill {...{ style }} />,
    <PiIntersectSquareFill {...{ style }} />,
    <FaImage {...{ style }} />,
    <FaMagnifyingGlassPlus {...{ style }} />,
    <FaMicrophone {...{ style }} />,
    <SiMicrosoftexcel {...{ style }} />,
    <PiNotepadFill {...{ style }} />,
    <ImMenu {...{ style }} />,
    <PiLeafFill {...{ style }} />,
    <PiNumberFiveFill {...{ style }} />,
    <PiNumberCircleSevenFill {...{ style }} />,
    <PiRoadHorizonFill {...{ style }} />,
    <GiSandsOfTime {...{ style }} />,
    <PiAnchorSimpleBold {...{ style }} />,
    <PiTriangleFill {...{ style }} />,
    <PiIntersectBold {...{ style }} />,
    <BiLogoFlickrSquare {...{ style }} />,
    <FaBaseballBall {...{ style }} />,
    <AiFillQuestionCircle {...{ style }} />,
    <TbSquareRoundedLetterA {...{ style }} />,
    <BsWatch {...{ style }} />,
    <PiGlobeSimpleFill {...{ style }} />,
    <TbLemon {...{ style }} />,
    <FaPeace {...{ style }} />,
    <PiToiletPaperFill {...{ style }} />,
    <FaPencilAlt {...{ style }} />,
  ];
  return (
    <div className="w-[312px] h-[336px] bg-white flex flex-col p-[24px] absolute top-[48px] left-[0px] border-[2px] rounded-lg border-black">
      <div className="grid grid-row-5 grid-cols-6 h-[264px] w-full">
        {data.map((icon, index) => (
          <div
            key={index}
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => {
              setCategoryValueAdd(index);
            }}
          >
            {icon}
          </div>
        ))}
      </div>
      <hr></hr>
      <div className="flex flex-row w-full h-[72px] items-center justify-between">
        {colorData.map((color, index) => (
          <span
            className="w-[24px] h-[24px] rounded-[12px]"
            style={{ backgroundColor: color }}
            key={index}
            onClick={() => {
              setColor(color);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
