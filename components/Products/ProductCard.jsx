import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';


const ItemCard = ({item}) => {

    return (
        <div key={item.id} className="card w-72 bg-base-100 border border-[#FE9400] rounded-md mt-8 bg-inherit">
            <figure>
                <img 
                src={item.imageUrl} 
                className='w-full h-44 p-2 object-cover' 
                alt={item.itemName} />
                <Icon icon="mdi:fire" color="#ff5440" className='absolute top-[25px] right-6 text-2xl' />
            </figure>
            <div className="card-body p-3">
                <div className='flex'>
                    <h2 className="card-title text-center m-auto text-[#FF0505]">{item.itemName}</h2>
                    <span className='relative top-[5px] right-5 text-xl'>
                        <Icon icon="mdi:cards-heart" color="#ff5440" />
                    </span>
                </div>
                <p className="card-title text-center m-auto">
                    <Icon icon="material-symbols:currency-rupee-rounded" /> {item.price}
                </p>
                <select className="select select-bordered border-orange-500 w-full max-w-xs bg-inherit">
                    <option disabled selected>Select</option>
                    <option>200 g</option>
                    <option>500 g</option>
                    <option>1 kg</option>
                </select>
                <div className="card-actions justify-center mt-2">
                    <button className="btn bg-red-500 border-none hover:bg-orange-500 w-44 text-white font-semibold"> <Icon icon="material-symbols:shopping-cart" color="white" /> &nbsp; Add to cart</button>
                </div>
            </div>
        </div>
    )
}

ItemCard.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      itemName: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
  };
  

export default ItemCard