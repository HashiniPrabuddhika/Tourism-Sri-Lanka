import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style_sheets/frontPage.css";
import axios from "axios";
import Footer from "./Footer";
import { API_URL } from "../utils/apiConfig";

const PackageDetails = () => {
    const { id } = useParams();
    const [packageDetails, setPackageDetails] = useState(null);

    useEffect(() => {
        axios
            .get(`${API_URL}/tourpackages/packages/${id}`)
            .then((response) => {
                setPackageDetails(response.data);
            })
            .catch((error) => {
                console.error("Error fetching package details:", error);
            });
    }, [id]);

    if (!packageDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className="package-details-container">
            <h1 className="header22">{packageDetails.name}</h1>
            <div className="package-detail-header">
                
                <div className="package-info">
                    <div className="package-details">
                        <p>{packageDetails.description}</p>
                        <img className="pic2" src={packageDetails.imageUrl} alt={packageDetails.name} />
                        <p><strong>Destination: </strong>{packageDetails.destination}</p>
                        <p><strong>Number of Days: </strong>{packageDetails.days}</p>
                        <p><strong>Number of Passengers: </strong>{packageDetails.passengers}</p>
                        <p className="price"><strong>Price: </strong>USD {packageDetails.price}</p>
                    </div>
                    {packageDetails.activities && (
                        <div className="package-activities">
                            <h3 >Activities</h3>
                            <ul>
                                {packageDetails.activities.map((activity, index) => (
                                    <li key={index}>{activity}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="additional-info">
                        <p><strong>Accommodation: </strong>{packageDetails.accommodation}</p>
                        <p><strong>Meal Plan: </strong>{packageDetails.mealPlan}</p>
                        <p><strong>Travel Time: </strong>{packageDetails.travelTime}</p>
                        <p><strong>Transfer Mode: </strong>{packageDetails.transferMode}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PackageDetails;
