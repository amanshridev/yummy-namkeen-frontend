import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';


const ItemCard = () => {

    return (
        <div className="card w-72 bg-base-100 border border-[#FE9400] rounded-md mt-8">
            <figure>
                <img src="https://dummyimage.com/600x400/000/fff" className='px-5 pt-5 rounded-[1.75rem]' alt="Shoes" />
                <Icon icon="mdi:fire" color="#ff5440" className='absolute top-[25px] right-6 text-2xl' />
            </figure>
            <div className="card-body p-3">
                <div className='flex'>
                    <h2 className="card-title text-center m-auto text-[#FF0505]">Name</h2>
                    <span className='relative top-[5px] right-5 text-xl'>
                        <Icon icon="mdi:cards-heart" color="#ff5440" />
                    </span>
                </div>
                <p className="card-title text-center m-auto">
                    <Icon icon="material-symbols:currency-rupee-rounded" /> 100
                </p>
                <select className="select select-bordered border-orange-500 w-full max-w-xs">
                    <option disabled selected>Select</option>
                    <option>200 g</option>
                    <option>500 g</option>
                    <option>1 kg</option>
                </select>
                <div className="card-actions justify-center mt-2">
                    <button className="btn bg-red-500 border-none hover:bg-orange-500 w-44"> <Icon icon="material-symbols:shopping-cart" color="white" /> &nbsp; Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCard