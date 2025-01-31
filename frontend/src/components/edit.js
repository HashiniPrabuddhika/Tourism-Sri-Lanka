import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style_sheets/frontPage.css";
import Footer from "./Footer";
import { API_URL } from "../utils/apiConfig";
class Sith extends Component {
  state = {
    packages: [],
    selectedPackage: null,
  };

  componentDidMount() {
    axios.get(`${API_URL}/tourpackages/packages`)
      .then((response) => {
        this.setState({ packages: response.data });
      })
      .catch((error) => {
        console.error("Error fetching packages:", error);
      });
  }

  render() {
    const { packages, selectedPackage } = this.state;

    return (
      <div>
        <h1 className="header22">
          <strong>Tour Packages</strong>
        </h1>

        <div className="packages-container">
          {packages.map((pkg) => (
            <div key={pkg._id} className="card">
              <img className="pic1" src={pkg.imageUrl} alt={pkg.name} />

              <div className="card-content">
                <h4>
                  <a className="name">
                    <strong>{pkg.name}</strong>
                  </a>
                </h4>
                <p>Destination: {pkg.destination}</p>
                <p>Number of days: {pkg.days}</p>
                <p>Number of passengers: {pkg.passengers}</p>
                <p className="text-danger">Total Price: <strong>USD {pkg.price}</strong></p>
                <Link to={`/packages/${pkg._id}`} className="btn btn-warning">
    READ MORE
</Link><br /><br />
                <a href="#" className="btn btn-success">GET PAYMENT</a>
              </div>
            </div>
          ))}
        </div>
         <Footer/>
      </div>
    );
  }
}

export default Sith;
