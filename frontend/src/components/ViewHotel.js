import React, { Component } from "react";
import axios from "axios";

import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
 import styles from "../style_sheets/View.module.css";
 import Footer from "./Footer";
 import { API_URL } from "../utils/apiConfig";
 import add from "../img/add.jpg"
 import photo1 from "../img/hl1.jpg"
 import photo2 from "../img/hl2.jpeg"
 import photo3 from "../img/hl3.jpeg"
 import photo4 from "../img/hl4.jpeg"
 import photo5 from "../img/hl5.jpeg"
 import photo6 from "../img/hl6.jpeg"
 import photo7 from "../img/hl7.jpeg"
 import photo0 from "../img/hl0.jpeg"
 import cphoto1 from "../img/cus.svg"
 import cphoto2 from "../img/hcus.svg"
 import cphoto3 from "../img/htl.svg"
 import cphoto4 from "../img/rm.svg"
 import logo from "../img/logo.png"
 import{AiFillStar} from "react-icons/ai"
 
 import{FaArrowAltCircleRight} from "react-icons/fa"


export default class ViewHotel extends Component {


   constructor(props) {

      super(props);

      this.state = {

         hotels: []
      };

   }
   componentDidMount() {
      this.retriveHotels();
   }
   retriveHotels() {

      axios.get(`${API_URL}/hotel/all`).then(res => {

         if (res.data.success) {
            this.setState({

               hotels: res.data.existingHotels
            });
            console.log(this.state.hotels)

         }
      })
   }

   filterContent(_hotels,searchTerm){
      const results=_hotels.filter((hotels)=>hotels.type.toLowerCase().includes(searchTerm));
      this.setState({hotels:results}); 
   }
   
   
    
    handleTextSearch=(e)=>{
   
       const searchTerm=e.currentTarget.value;
       axios.get(`${API_URL}/hotel/all`).then(res=>{
   
        if(res.data.success){
           this.filterContent(res.data.existingHotels,searchTerm)
        }
    });
   
   }; 

   render() {

      return (

         <div className={styles.body}>
    {/* <!--Home section---> */}
	<section  className={styles.home2} >
   
		<div  className={styles.home2_text}>
			<h1>Spend Your Holiday</h1>
			<p>Dedicated to providing unparalleled hospitality, creating seamless connections and ultimate satisfaction. <br></br> Deliver exceptional service</p>
			<a href="#"  className={styles.home2_btn}>Let's go now</a>
		</div>
	</section>

    {/* <!--container---> */}
	<section  className={styles.container2}>
		<div  className={styles.row_items2}>
			<div  className={styles.container_box2}>
				<div className={styles.container_img2}>
                <img src={cphoto1} className={styles.cus}></img>
				</div>
				<h4>2563</h4>
				<p>customer</p>
			</div>

            <div  className={styles.container_box2}>
				<div className={styles.container_img2}>
                <img src={cphoto2}  className={styles.hcus}></img>
				</div>
				<h4>1252</h4>
				<p>Happy customer</p>
			</div>

			<div  className={styles.container_box2}>
				<div className={styles.container_img2}>
                <img src={cphoto3}  className={styles.htl}></img>
				</div>
				<h4>514</h4>
				<p>No Of Hotels</p>
			</div>

			<div  className={styles.container_box2}>
				<div className={styles.container_img2}>
                <img src={cphoto4}  className={styles.rm}></img>
				</div>
				<h4>2164</h4>
				<p>No Of Rooms</p>
			</div>

		</div>
	</section>

<section  className={styles.offer} >
    <div  className={styles.container}>
    <input
                className="form-control"
                type="search"
                placeholder="Search type of hotel"
                name="searchTerm"
                onChange={this.handleTextSearch}>                 
</input>
      <div  className={styles.heading}>
      <h1>Hotel <span>Rooms</span></h1>
      </div>

      <div className={styles.content}>
        {this.state.hotels.map((hotels, index) => (
          <>
          <div className={styles.box}>
          <div  className={styles.left}>
          <h4>{hotels.name}</h4>
          <img src={hotels.image}  style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt={hotels.name}></img>
                    </div>
          <div class="right" className={styles.right}>
            <h4> {hotels.type} </h4>
            <div  className={styles.rate}>
            <i className={styles.logo3}><AiFillStar/></i>
            <i className={styles.logo3}><AiFillStar/></i>
            <i className={styles.logo3}><AiFillStar/></i>
            <i className={styles.logo3}><AiFillStar/></i>
            </div>
            <p>{hotels.description || "Description not available."}</p>
            <p>{hotels.location}</p>
            <h5>{hotels.price} / per Night</h5>
            {/* <button className={styles.flex1}>
              <span>Check Availability</span>
              <i className={styles.logo3}><FaArrowAltCircleRight/></i>
            </button> */}

            <Link to="/insert/hotel" type="submit" className={styles.flex1} >
            <span>Resevation</span>
           <i className={styles.logo3}><FaArrowAltCircleRight/></i>
           </Link>
          </div>
        </div>
          </>
        ))}
        
      </div>
    </div>
  </section>


    {/* <!--gallery section---> */}
	<div  className={styles.gallery}>
    <h1>Scenic  Views</h1>
    <div  className={styles.main_gallery}>
        <div  className={styles.inner_gallery}>
               <img src={photo0}  className={styles.hl0}></img>
            
        </div>
        <div  className={styles.inner_gallery}>
               <img src={photo1}  className={styles.hl1}></img>
            
        </div>
        <div  className={styles.inner_gallery}>
               <img src={photo2}  className={styles.hl2}></img>
            
        </div>
        <div  className={styles.inner_gallery}>
               <img src={photo3}  className={styles.hl3}></img>
            
        </div>
        <div  className={styles.inner_gallery}>
               <img src={photo4}  className={styles.hl4}></img>
            
        </div>

        <div  className={styles.inner_gallery}>
               <img src={photo5}  className={styles.hl5}></img>
            
        </div>

         <div  className={styles.inner_gallery}>
               <img src={photo6}  className={styles.hl6}></img>
            
        </div>
        <div  className={styles.inner_gallery}>
               <img src={photo7}  className={styles.hl7}></img>
            
        </div>
        
    </div>
</div>
<Footer/>
		</div>
	
      )
   }

}