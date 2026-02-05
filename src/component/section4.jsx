import React, { useEffect } from 'react';
import AOS from 'aos';
import CountUp from 'react-countup';
import { ChevronRight, Star } from 'lucide-react';
import 'aos/dist/aos.css';
import './Section4.css';

import a10 from "../assets/a10.png";
import a11 from "../assets/a11.png";
import a12 from "../assets/a12.png"
export default function Section4() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <section className="top-sellers">
            <h2 data-aos="fade-down">Trending Earphones</h2>

            <div className="filter-tabs" data-aos="fade-down">
                <button className="tab active">Top Picks</button>
                <button className="tab">Wireless</button>
                <button className='tab'>Wired</button>
            </div>

            <div className="products-grid">
                <div className="card" style={{ background: "#e6fcf5" }} data-aos="fade-up">
                    <span className="badge green">Save 60%</span>
                    <div className="img-container">
                        <img src={a10} alt="" className="p-img" />
                    </div>
                    <div className="info">
                        <h4>Boat Rockerz 333</h4>
                        <div className="stars">
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#ff0000" stroke="none" />)}
                            <small>75 Reviews</small>
                        </div>
                        <p className="price">$<CountUp end={20} enableScrollSpy /></p>
                    </div>
                    <button className="add-btn">Add to cart</button>
                </div>

                <div className="card" style={{ background: "#dcf4ff" }} data-aos="fade-up" data-aos-delay="200">
                    <div className="img-container">
                        <img src={a11} alt="" className="p-img" />
                    </div>
                    <div className="info">
                        <h4>Boat kerz 234</h4>
                        <div className="stars">
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#ff0000" stroke="none" />)}
                            <small>75 Reviews</small>
                        </div>
                        <p className="price">$<CountUp end={40} enableScrollSpy /></p>
                    </div>
                    <button className="add-btn">Add to cart</button>
                </div>

                <div className="card" style={{ background: "#f0e6ff" }} data-aos="fade-up" data-aos-delay="400">
                    <span className="badge purple">Save 40%</span>
                    <div className="img-container">
                        <img src={a12} alt="" className="p-img" />
                    </div>
                    <div className="info">
                        <h4>Boat Rockerz 323</h4>
                        <div className="stars">
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#ff0000" stroke="none" />)}
                            <small>75 Reviews</small>
                        </div>
                        <p className="price">$<CountUp end={30} enableScrollSpy /></p>
                    </div>
                    <button className="add-btn">Add to cart</button>
                </div>

                <div className="next-btn" data-aos="fade-left">
                    <ChevronRight size={32} color="#1eb980" />
                </div>
            </div>
        </section>
    );
}