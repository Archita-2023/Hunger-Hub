import React,{useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        {
            url:"https://i.pinimg.com/originals/be/e8/df/bee8df9ec5c3ebe4604ef1770ba7f260.jpg"
        },
        {
            url:"https://i.pinimg.com/originals/bb/0f/19/bb0f19204ea81a4e79d9a738b2eeb150.jpg"
        },
        {
            url:"https://i.pinimg.com/originals/66/43/f2/6643f200b4feecae3c01eafb950e8441.jpg"
        },
        
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider=()=>{
        const isFirst = currentIndex===0
        const newIndex = isFirst ? sliders.length-1 : currentIndex-1
        setCurrentIndex(newIndex)
    }
    const nextSlider=()=>{
        const isLast = currentIndex === sliders.length-1
        const newIndex = isLast ? 0 : currentIndex+1
        setCurrentIndex(newIndex)
    }
    const moveToNextSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
             style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
        ></div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-purple-700 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlider} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-purple-700 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlider}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
        {
            sliders.map((sliderItems, slideIndex)=>(
                <div 
                key={slideIndex}
                onClick={()=>moveToNextSlide(slideIndex)}
                className='text-2xl cursor-pointer'>
                    <RxDotFilled/>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Featured;
