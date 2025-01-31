import React, { useEffect, useState } from 'react'
import styleHome from "../style_sheets/Home.module.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from "./Footer";
import { API_URL } from "../utils/apiConfig";

import Allservices from "../img/allServices.jpg"

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [trekking, setTrekking] = useState([]);
    const [campFire, setCampFire] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const title = "Adventure"; 
                const response = await axios.get(`${API_URL}/ourallServices?title=${title}`);
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchServices();
    }, []);

    useEffect(() => {
        const fetchTrekking = async () => {
            try {
                const title = "Trekking"; 
                const response = await axios.get(`${API_URL}/ourallServices?title=${title}`);
                setTrekking(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchTrekking();
    }, []);

    useEffect(() => {
        const fetchCampFire = async () => {
            try {
                const title = "Camping"; 
                const response = await axios.get(`${API_URL}/ourallServices?title=${title}`);
                setCampFire(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchCampFire();
    }, []);
    
  return (
    <>
    <div className={styleHome.containerServices}>
    <img src={Allservices}  className={styleHome.img} />
        <div className={styleHome.layer}>
            <div className={styleHome.leftalign}>
                <div className={styleHome.headerTxt}>Where will the holidays take you?</div>
                <div className={styleHome.sloganTxt}>Our Services </div>
            </div>
        </div>
    </div>
    <div className={` ${styleHome.serviceHead}`}>Our Services</div>
    <div className={styleHome.adventure}>
      <div  className={styleHome.adventureText}>Adventure</div>
      <hr style={{ margin: "10px 70px", border: "1px solid #000" }} />
      <div style={{margin: "20px 70px 0px 70px", fontSize:"22px", textAlign:"center", fontWeight:"bold" }}>Most popular adventure Tours and excursions in Sri Lanka</div>
      <div className={`row row-cols-md-4 g-5`} style={{margin: "0px 70px "}}>
      {services.map((service) => (
                <div className={`col`} key={service._id}>
                    <div className={`card h-100`}>
                        <div>
                        <img src={service.photos} style={{ width: '100%', height: '200px', objectFit: 'cover' }} className="card-img-top" alt={service.title} />
                        </div>
                        <div className={`card-body`} style={{ marginLeft: "10px", marginRight: "15px" }}>
                            <div className={`card-text`}  style={{ color:"green" }}>{service.description}</div>
                            <p className={`card-text`} style={{ color:"green", fontWeight:"bold" }}>Departing from - {service.location}</p>
                            <div style={{ color:"red" }}>FROM USD {service.price}</div>
                             <div className={styleHome.readmore}>
                                    <Link to="/allservices" className={styleHome.bookNowButton}>
                                      BOOK NOW
                                    </Link>
                                  </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
      </div>
<div style={{marginTop:"80px"}}></div>
      <div className={styleHome.trekking}>
      <div  className={styleHome.adventureText} style={{ color:"black" }}>Trekking</div>
      <hr style={{ margin: "10px 70px", border: "1px solid #000" }} />
      <div style={{margin: "20px 70px 0px 70px", fontSize:"22px", textAlign:"center", fontWeight:"bold" }}>Trekking and Hiking Tours in Sri Lanka</div>
      <div className={`row row-cols-md-4 g-5`} style={{margin: "0px 70px "}}>
      {trekking.map((service) => (
                <div className={`col`} key={service._id}>
                    <div className={`card h-100`}>
                        <div>
                        <img src={service.photos} style={{ width: '100%', height: '200px', objectFit: 'cover' }} className="card-img-top" alt={service.title} />
                        </div>
                        <div className={`card-body`} style={{ marginLeft: "10px", marginRight: "15px" }}>
                            <div className={`card-text`}  style={{ color:"green" }}>{service.description}</div>
                            <p className={`card-text`} style={{ color:"green", fontWeight:"bold" }}>Departing from - {service.location}</p>
                            <div style={{ color:"red" }}>FROM USD {service.price}</div>
                             <div className={styleHome.readmore}>
                                    <Link to="/allservices" className={styleHome.bookNowButton}>
                                      BOOK NOW
                                    </Link>
                                  </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
      </div>

      <div style={{marginTop:"80px"}}></div>
      <div className={styleHome.campFire}>
      <div  className={styleHome.adventureText} style={{ color:"black" }}>Camping</div>
      <hr style={{ margin: "10px 70px", border: "1px solid #000" }} />
      <div style={{margin: "20px 70px 0px 70px", fontSize:"22px", textAlign:"center", fontWeight:"bold" }}>
      Camping in Sri Lanka can be the best experience you can have while being close to nature
      </div>
      <div className={`row row-cols-md-4 g-5`} style={{margin: "0px 70px "}}>
      {campFire.map((service) => (
                <div className={`col`} key={service._id}>
                    <div className={`card h-100`}>
                        <div>
                        <img src={service.photos} style={{ width: '100%', height: '200px', objectFit: 'cover' }} className="card-img-top" alt={service.title} />
                        </div>
                        <div className={`card-body`} style={{ marginLeft: "10px", marginRight: "15px" }}>
                            <div className={`card-text`}  style={{ color:"green" }}>{service.description}</div>
                            <p className={`card-text`} style={{ color:"green", fontWeight:"bold" }}>Departing from - {service.location}</p>
                            <div style={{ color:"red" }}>FROM USD {service.price}</div>
                             <div className={styleHome.readmore}>
                                    <Link to="/allservices" className={styleHome.bookNowButton}>
                                      BOOK NOW
                                    </Link>
                                  </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
      </div>
      <Footer/>
      </>
  );
}

export default AllServices