import React from 'react';

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-purple-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4' src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt="delivery_pic" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#843bc4] font-bold'>Explore this page Now</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2' >Discover Flavorful Recipes Today!</h1>
            <p>Welcome to our Recipe Haven, where culinary dreams come to life! Discover a world of 
                flavors with our diverse collection of recipes, meticulously crafted
                 to suit every palate. From succulent shawarmas and refreshing fruit juices to exotic
                  jollof rice and delightful yogurt parfaits, our recipes are designed to inspire and 
                  satisfy. Each dish is accompanied by detailed ingredients and easy-to-follow instructions,
                   ensuring your cooking experience is enjoyable and successful. Whether you’re a seasoned
                    chef or a kitchen novice, our recipes will guide you to create delicious meals and
                     unforgettable dining experiences. Happy cooking!</p>
                     
            <button className='bg-black text-[#a668dd] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' >Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
