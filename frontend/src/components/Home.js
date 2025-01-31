import "bootstrap/dist/css/bootstrap.min.css";

import styleHome from "../style_sheets/Home.module.css";
import { Link } from 'react-router-dom';

import Homefro from "../img/homefro.jpg"
import Adventure from "../img/Adventure.jpg"
import Trekking from "../img/Trekking.jpg"
import Camping from "../img/Camping.jpg"
import Footer from "./Footer";

const Home = () => {
    return (
        <>
        <div className={styleHome.container}>
        <video 
          src="https://media.istockphoto.com/id/1460794434/video/mahout-riding-his-elephant-sigiriya-rock-on-the-background-sri-lanka.mp4?s=mp4-640x640-is&k=20&c=k9MfCKhL1oqfN4rZB7yducGp2kGF2yZvicBzS9ZocYY=" 
        className={styleHome.img} 
        controls 
        autoPlay 
        loop 
        muted
      />
      <div className={styleHome.layer}>
    <img src={Homefro} className={`card-img-top ${styleHome.cardImg1}`} alt="..." />
  </div>
            <div className={styleHome.layer}>
                <div className={styleHome.centered}>
                    <div className={styleHome.headerTxt}>Explore the Amazing Country <br/>~ Sri Lanka ~</div>
                    <div className={styleHome.sloganTxt}>Pearl of the Indian Ocean </div>
                    <button className={styleHome.exploreBtn}>Explore Now</button>
                </div>
            </div>
        </div>
        <div className={styleHome.layer2}>
        <div className={` ${styleHome.serviceHead}`}>Our Services</div>
        <div className={`row row-cols-md-3 g-1`} style={{margin: "0px 70px 0px 70px"}}>
            <div className={`col`}>
                <div className={`card h-100 ${styleHome.cardContainer}`}>
                    <div className={styleHome.imgBg}>
                        <img src={Adventure} className={`card-img-top ${styleHome.cardImg}`} alt="..."/>
                    </div>
                    <div className={`card-body`} style={{marginLeft: "10px", marginRight: "15px"}}>
                        <h5 className={`card-title ${styleHome.cardHeader}`}>Adventure</h5>
                        <p className={`card-text ${styleHome.cardDes}`}>Discover thrilling adventures with us.breathtaking views, exciting activities, and unforgettable moments. Your next great journey starts here!</p>
                        <div className={styleHome.readmore}>
        <Link to="/allservices" className={styleHome.link}>
          Read More
        </Link>
      </div>
                    </div>
                </div>
            </div>
           
            <div className={`col`}>
                <div className={`card h-100 ${styleHome.cardContainer}`}>
                    <div className={styleHome.imgBg}>
                        <img src={Trekking} className={`card-img-top ${styleHome.cardImg}`} style={{width: "250px"}} alt="..."/>
                    </div>
                    <div className={`card-body`} style={{marginLeft: "10px", marginRight: "20px"}}>
                        <h5 className={`card-title ${styleHome.cardHeader}`}>Trekking</h5>
                        <p className={`card-text ${styleHome.cardDes}`}>Conquer trails and embrace nature's beauty with our unforgettable trekking adventures!</p>
                        <div className={styleHome.readmore}>
        <Link to="/allservices" className={styleHome.link}>
          Read More
        </Link>
      </div>
                    </div>
                </div>
            </div>
            <div className={`col`}>
                <div className={`card h-100 ${styleHome.cardContainer}`}>
                <div className={styleHome.imgBg}>
                        <img src={Camping} className={`card-img-top ${styleHome.cardImg}`} style={{width: "250px"}} alt="..."/>
                    </div>
                    <div className={`card-body`} style={{marginLeft: "10px", marginRight: "20px"}}>
                        <h5 className={`card-title ${styleHome.cardHeader}`}>Camping</h5>
                        <p className={`card-text ${styleHome.cardDes}`}>Escape to nature and create memories with our unforgettable camping experiences!</p>
                        <div className={styleHome.readmore}>
        <Link to="/allservices" className={styleHome.link}>
          Read More
        </Link>
      </div>
                    </div>
                </div>
            </div>
            </div>
            <div className={`row row-cols-md-2 g-2`} style={{margin: "40px 90px 0px 150px"}}>
       
        </div>
        </div>
        <section className={styleHome.reviewSection}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mb-4" style={{ fontWeight: "700", fontSize: "32px" }}>
              What Our Customers Are Saying
            </h3>
            <p>
            Our customers are the heart of our journey, and their stories inspire us every day. From breathtaking adventures to seamless bookings, we take pride in creating unforgettable experiences. 
                Here's what they have to say: 'The trip of a lifetime,' 'Exceptional service and care,' and 'Truly beyond expectations.' Join thousands of happy travelers who have trusted us to turn their travel dreams into reality. 
                Your next adventure awaits start it with us!
            </p>
          </div>
        </div>

<div className="d-flex overflow-auto text-center">
  {[
    { name: "Alex Morgan", role: "Wildlife Photographer", feedback: "Exploring nature's untouched beauty was a dream come true! The team ensured every detail was perfect." },
    { name: "John Carter", role: "Adventure Enthusiast", feedback: "This was the most thrilling trip of my life! Everything was meticulously planned." },
    { name: "Sophia Lee", role: "Food Blogger", feedback: "Amazing food, incredible destinations, and a team that genuinely cares." },
    { name: "Janet Prins", role: "Solo Traveler", feedback: "Traveling solo can be daunting, but the team's support and detailed itineraries made it effortless. Every moment was a story worth sharing." }
  ].map((review, index) => (
    <div
      className="card mx-3"
      style={{
        width:"400px",
        flex: "0 0 auto",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
       
    animation: "scroll 10s linear infinite",
      }}
      key={index}
    >
      <div className="d-flex justify-content-center mb-4">
        <img
          src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(${index + 2}).webp`}
          alt={review.name}
          className="rounded-circle shadow-1-strong"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <h5 className="mb-3">{review.name}</h5>
      <h6 className="text-primary mb-3">{review.role}</h6>
      <p className="d-flex justify-content-center mb-4">{review.feedback}</p>
    </div>
  ))}
</div>

      </section>
        <div style={{padding: "100px 100px 20px 100px"}}>
            <p className={`text-center ${styleHome.destinationHeading}`}><span style={{color:"#4468E2"}}>BEST</span> DESTINATIONS</p>
            <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://media.istockphoto.com/id/825319778/photo/sunset-on-beach.jpg?b=1&s=612x612&w=0&k=20&c=Dd-1yCpw4WM_IfYtNFoFTFL3YcLc_dco-djbeHLjP-s="
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src="https://images.pexels.com/photos/19469048/pexels-photo-19469048/free-photo-of-krang-shuri-waterfalls-krang-suri-rd-umlarem-meghalaya-india-most-beautiful-falls-in-meghalaya.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://images.pexels.com/photos/20195492/pexels-photo-20195492/free-photo-of-tower-of-fortress-by-the-shore.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src="https://images.pexels.com/photos/18552412/pexels-photo-18552412/free-photo-of-sunrise-over-mountain-valley.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://media.istockphoto.com/id/505221662/photo/elephants-in-river.jpg?b=1&s=612x612&w=0&k=20&c=sOKh-61P_I8uDNohP2nYpyjyeZdNGYUMc49QK7CfBcU="
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src="https://images.pexels.com/photos/10660523/pexels-photo-10660523.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home;