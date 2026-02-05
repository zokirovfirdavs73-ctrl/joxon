import React, { useEffect } from 'react'
import './section1.css'
import back from '../assets/back.png'
import headphones from '../assets/headphones.png'
import head from '../assets/head.png'
import head2 from '../assets/head2.png'
import head3 from '../assets/head3.png'
import head4 from '../assets/head4.png'
import CountUp from 'react-countup'
import Aos from 'aos'
useEffect


const Section1 = () => {

      useEffect(() => {
    Aos.init({
      duration: 2000
    })
  })
    return (
        <>
            <div data-aos="flip-up" className="container">
                <div className="cont_text">
                    <h1>Discover Our <br /> Latest  Products</h1>
                    <p>Lorem ipsum is a placeholder text commonly used <br /> to demonstrate the visual form of a product</p>
                    <button>Buy Now</button>
                </div>
                <div className="img">
                    <img src={back} alt="" />
                    <img className='airpods' src={headphones} alt="" />
                    <div className="count">
                        <CountUp
                            start={0}
                            end={50}
                            duration={10}
                        >
                            <h1>$50</h1>
                        </CountUp>
                    </div>
                </div>
            </div>

            <div className="img_cont">
                <img src={head} alt="" />
                <img className='round_img' src={head2} alt="" />
                <img className='round_img2' src={head3} alt="" />
                <img className='round_img3' src={head4} alt="" />
                <h3>15k Well <br /> Reviews</h3>
            </div>
        </>
    )
}

export default Section1