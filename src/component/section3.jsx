import React, { useEffect } from 'react'
import './section3.css'
import CountUp from 'react-countup'
import Aos from 'aos'
import 'aos/dist/aos.css'
import boat from '../assets/boat.png'
import boat2 from '../assets/boat2.png'
import boat3 from '../assets/boat3.png'
const Section3 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <div className="page">
      <h1>Top Sellers</h1>

      <div className="tabs">
        <span className="tab active">Top Picks</span>
        <span className="tab">Watches</span>
      </div>

      <div className="cards">

        {/* CARD 1 */}
        <div data-aos="fade-up-right" className="card mint">
          <div className="badge green">Save 60%</div>
          <img src={boat} alt="Boat Rockerz 333" />
          <div className="info">
            <h3>Boat Rockerz 333</h3>
            <div className="rating">★★★★★ <span>75 Reviews</span></div>
            <div className="price1">
              $ <CountUp start={0} end={20} duration={2} />
            </div>
          </div>
          <button>Add to cart</button>
        </div>

        {/* CARD 2 */}
        <div data-aos="fade-down" className="card blue">
          <img src={boat2} alt="Boat kerz 234" />
          <div className="info">
            <h3>Boat kerz 234</h3>
            <div className="rating">★★★★★ <span>75 Reviews</span></div>
            <div className="price1">
              $ <CountUp start={0} end={40} duration={2} />
            </div>
          </div>
          <button>Add to cart</button>
        </div>

        {/* CARD 3 */}
        <div data-aos="fade-up-left" className="card purple">
          <div className="badge violet">Save 40%</div>
          <img src={boat3} alt="Boat Rockerz 323" />
          <div className="info">
            <h3>Boat Rockerz 323</h3>
            <div className="rating">★★★★★ <span>75 Reviews</span></div>
            <div className="price1">
              $ <CountUp start={0} end={30} duration={2} />
            </div>
          </div>
          <button>Add to cart</button>
        </div>

      </div>
    </div>
  )
}

export default Section3
