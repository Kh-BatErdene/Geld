"use client";

import Cards from "./cards";
import Category from "./category";

export default function Main() {
  const data = [
    {
      title: "Food & Drinks",
      name: "Food & Drinks",
      img: "food.svg",
      date: "14:00",
      color: "#EAB308",
      cash: "- 1,000₮",
    },
    {
      title: "Shopping",
      name: "Food & Drinks",
      img: "food.svg",
      date: "14:00",
      color: "#EAB308",
      cash: "- 1,000₮",
    },
    {
      title: "Housing",
      name: "Food & Drinks",
      img: "food.svg",
      date: "14:00",
      cash: "- 1,000₮",
      color: "#EAB308",
    },
    {
      title: "Transportation",
      name: "Food & Drinks",
      img: "food.svg",
      date: "14:00",
      color: "#EAB308",
      cash: "- 1,000₮",
    },
    {
      title: "Vehicle",
      name: "Food & Drinks",
      img: "food.svg",
      date: "14:00",
      color: "#EAB308",
      cash: "- 1,000₮",
    },
    {
      title: "Life & Entertainment",

      name: "Lending & Renting",
      img: "house.svg",
      date: "14:00",
      cash: "- 1,000₮",
      color: "#23E01F",
    },
    {
      title: "Financial expenses",

      name: "Food & Drinks",
      img: "food.svg",
      date: "14:00",
      cash: "- 1,000₮",
      color: "#F54949",
    },
    {
      title: "Investments",
      name: "Food & Drinks",
      img: "food.svg",
      date: "14:00",
      cash: "- 1,000₮",
      color: "#EAB308",
    },
    {
      title: "Income",
      name: "Food & Drinks",
      img: "food.svg",
      date: "14:00",
      cash: "- 1,000₮",
      color: "#EAB308",
    },
    {
      title: "Others",
      name: "Food & Drinks",
      img: "food.svg",
      date: "14:00",
      cash: "- 1,000₮",
      color: "#EAB308",
    },
  ];
  const Today = Array.from(data).slice(5);
  const Yesterday = Array.from(data).slice(4);

  return (
    // column-1
    <div className="w-full max-w-[1200px] h-[1148px] m-auto flex gap-6 ">
      <div className="w-[282px] h-[1080px] bg-white p-4 mb-6">
        <h1 className="font-black text-[24px] mb-6">Records</h1>
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="btn bg-[#0166FF] hover:bg-[#2f81fc] text-white h-8 rounded-3xl w-full mb-6"
        >
          + Add
        </button>
        <div className="mb-6">
          <input
            type="search"
            placeholder="Search"
            className="w-full py-1 px-3 rounded-md border-2"
          />
        </div>
        <p>Types</p>
        <div className="flex items-center gap-2 mb-2 mt-4">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span>All</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span>Income</span>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="checkbox checkbox-md" />
          <span>Expense</span>
        </div>
        <div className="flex justify-between mt-7">
          <h2>Category</h2>
          <span className="text-[#E5E7EB]">Clear</span>
        </div>

        <div>
          {data.map((items) => {
            return <Category title={items.title} />;
          })}
          <button className="mt-1">+ Add Category</button>
        </div>
        <p className="mb-4 mt-6">Amount Range</p>
        <div className="flex gap-4">
          <input
            className="bg-[#F3F4F6] w-[114.5px] h-[48px] p-3 outline-none border-2 rounded-md"
            type="text"
          />
          <input
            className="bg-[#F3F4F6] w-[114.5px] h-[48px] p-3 outline-none border-2 rounded-md"
            type="text"
          />
        </div>
        <input type="range" className="mt-4 range" />
        <div className="flex justify-between text-base">
          <span>0</span>
          <span>1000</span>
        </div>
      </div>
      {/* column-2 */}
      <div className="w-full">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
            <img src="arrow.svg"></img>
            <p className="w-[92p]">Last 30 Days</p>
            <img className="rotate-180" src="arrow.svg"></img>
          </div>

          <div className=" pr-2 bg-white border-2 rounded-md">
            <select className="py-3 px-4 pr-8  rounded-md">
              <option className="text-base">Newest first</option>
              <option className="text-base">Yesterday</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center px-6 bg-white py-3 border-2 rounded-md mb-3">
          <div className="flex items-center gap-4">
            <input type="checkbox" className="checkbox rounded-sm" />
            <span>Select all</span>
          </div>

          <span>- 35,500₮</span>
        </div>

        <div>
          <h3 className="mb-3 mt-6">Today</h3>
          {Today.map((item) => {
            return (
              <Cards
                key={item}
                name={item.name}
                date={item.date}
                img={item.img}
                color={item.color}
                cash={item.cash}
              />
            );
          })}
          <h3 className="mb-3">Yesterday</h3>
          {Yesterday.map((item) => {
            return (
              <Cards
                name={item.name}
                date={item.date}
                img={item.img}
                color={item.color}
                cash={item.cash}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}