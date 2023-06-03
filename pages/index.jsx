/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import HeroBanner from "@/components/HeroSections/HeroBanner";
import ProductCard from "@/components/Products/ProductCard";
import { Icon } from '@iconify/react';
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default function Home() {
  const [namkeen, setNamkeen] = useState([]);

  useEffect(() => {
    const fetchNamkeen = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "namkeen"));

        let data = [];
        querySnapshot.forEach((namkeen) => {
          data.push({ ...namkeen.data(), id: namkeen.id });
        });

        setNamkeen(data);
      } catch (error) {
        console.error("An error occurred", error);
      }
    };

    fetchNamkeen();
  }, []);

  return (
    <>
      {/* <HeroFirst /> */}
      <HeroBanner />
      {/* <HeroSecond /> */}
      <div className="flex align-center pt-10">
        <div className="pl-[5.5rem] w-80 bg-inherit">
          <select className="select select-bordered border-orange-500 w-full  pr-10 bg-inherit">
            <option disabled selected>Sort</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="ml-[47px] w-[67%]">
          <Icon icon="ic:baseline-search" color="#888E99" className="absolute w-10 h-10 mt-1 ml-1" />
          <input type="text" placeholder="Type here" className="input input-bordered border-orange-500 w-full pl-12 bg-inherit" />
        </div>
      </div>
      <div className="grid grid-cols-4 grid-flow-row p-8 place-content-center mx-14">
        {namkeen.length > 0 ? (
          <>
            {namkeen.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </>
        ) : (
          <p className="pl-5 mt-2 text-3xl md:text-3xl font-bold w-full text-center">
            No namkeen items found.
          </p>
        )}
      </div>
    </>
  )
}
