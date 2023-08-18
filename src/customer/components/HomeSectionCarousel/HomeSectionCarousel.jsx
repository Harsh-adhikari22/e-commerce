import { Button } from '@mui/material';
import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const HomeSectionCarousel = () => {
    const [activeIndex,setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);
    const syncActiveIndex=({item})=>setActiveIndex(item)

    const items = [1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item) => <HomeSectionCard />)
    return (<div className='border'>
        <div className='relative p-5 '>
            <AliceCarousel
                items={items}
                disableButtonsControls
                infinite
                responsive={responsive}
                disableDotsControls
                onSlideChange={syncActiveIndex}
                activeIndex={activeIndex} 
            />
            <Button className='z-50 bg-white' variant='contained' sx={{position:'absolute',top:"8rem",right:"0rem",transform:" rotate(90deg)",bgcolor:"white",}} aria-label='next'>
                <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}/>
            </Button>
            <Button className='z-50 bg-white' variant='contained' sx={{position:'absolute',top:"8rem",left:"0rem",transform:" rotate(-90deg)",bgcolor:"white",}} aria-label='next'>
                <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}/>
            </Button>
        </div>
    </div>
    )
}
export default HomeSectionCarousel;