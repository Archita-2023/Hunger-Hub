import React, {useState} from 'react';
import {mealData} from '../data/data'

const Meal = () => {
    const [foods, setFoods] = useState(mealData)

    const fillterCat = (category)=>{
        setFoods(
            mealData.filter((item)=>{
                return item.category === category;
            })
        )
    }

  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-purple-500 font-bold text-2xl text-center py-4 '>
            Meals
        </h1>
        <div className='flex flex-col lg:flex-row justify-center '>
            <div className='flex justify-center md:justify-center '>
                <button 
                onClick={()=>setFoods(mealData)}
                className='p-2 m-2 border-purple-700  bg-purple-500 text-white hover:bg-white hover:text-purple-900 hover:border-purple-900 rounded-lg'>All</button>
                <button
                onClick={()=>fillterCat("pizza")}
                className='p-2 m-2 border-purple-700  bg-purple-500 text-white hover:bg-white hover:text-purple-900 hover:border-purple-900 rounded-lg'>Pizza</button>
                <button 
                onClick={()=>fillterCat("chicken")}
                className='p-2 m-2 border-purple-700  bg-purple-500 text-white hover:bg-white hover:text-purple-900 hover:border-purple-900 rounded-lg'>fried</button>
                <button 
                onClick={()=>fillterCat("salad")}
                className='p-2 m-2 border-purple-700  bg-purple-500 text-white hover:bg-white hover:text-purple-900 hover:border-purple-900 rounded-lg'>Salad</button>
            </div>
        </div>

        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                foods.map((item)=>(
                    <div >
                    <div key={item.id} className='border-none hover:scale-105 duration-300'>
                        <img src={item.image} 
                            alt={item.name}
                            className='w-full h-full object-cover rounded-lg py-5' 
                        />
                        <div className='flex justify-between py-2 px-4'>
                            <p className='bg-purple-500 h-18 w-18 rounded-lg -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.name}</p>
                        </div>

                        
                    </div>
                    <div>
                    <p className='font-bold py-4'>Ingredients: {item.ingredients.join(", ")}</p>
                    <br />
                    <p className='font-bold'>Recipe: {item.recipe}</p>
                    </div>
                    </div>
                ))
            }
        </div>
      
    </div>
  );
}

export default Meal;
