import HeroBanner from "@/components/HeroSections/HeroBanner";
import HeroFirst from "@/components/HeroSections/HeroFirst";
import HeroSecond from "@/components/HeroSections/HeroSecond";
import HeroThird from "@/components/HeroSections/HeroThird";
import ProductCard from "@/components/Products/ProductCard";
import { Icon } from '@iconify/react';



export default function Home() {
  return (
    <>
      {/* <HeroFirst /> */}
      <HeroBanner />
      {/* <HeroSecond /> */}
      <div className="flex align-center pt-10">
        <div className="pl-[5.5rem] w-80">
          <select className="select select-bordered border-orange-500 w-full  pr-10">
            <option disabled selected>Sort</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="ml-[47px] w-[67%]">
        <Icon icon="ic:baseline-search" color="#888E99" className="absolute w-10 h-10 mt-1 ml-1"/>
          <input type="text" placeholder="Type here" className="input input-bordered border-orange-500 w-full pl-12" />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-flow-row p-8 place-content-center mx-14">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}
