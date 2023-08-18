import React from 'react'
import Carousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
const HomePage = () => {
    return(
        <div>
            <Carousel/>
            <div className='space-y-10 py-20 flex flex-col justify-center'>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
            </div>
        </div>
    )
}
export default HomePage;