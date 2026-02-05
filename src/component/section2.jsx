import React, { useEffect } from 'react'
import './section2.css'
import pods from '../assets/pods.png'
import pods2 from '../assets/pods2.png'
import pods3 from '../assets/pods3.png'
import CountUp from 'react-countup'
import AOS from 'aos'
import 'aos/dist/aos.css';


const Section2 = () => {
      useEffect(() => {
    AOS.init({
      duration: 2000    
    })
  })
    return (
        <>
            <div className="main">
                <div className="wrapper">
                    <div data-aos="fade-right" className="images">
                        <img className='right' src={pods} alt="" />
                        <img className='middle' src={pods2} alt="" />
                        <img className='left' src={pods3} alt="" />
                        <h1 className='price'>                <CountUp
                            start={0}
                            end={ 45.99}
                            duration={10}

                        >
                            <h1>Price :$45 .99</h1>
                        </CountUp></h1>
                    </div>
                    <div  data-aos="fade-left" className="wrapper_text">
                        <h1>Our Featured Products</h1>
                        <p>Lorem ipsum is a placeholder text commonly <br /> used to demonstrate the visual form of <br /> a product</p>
                        <div className="btns">
                            <button>Add to cart</button>
                            <h2>View more</h2>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2