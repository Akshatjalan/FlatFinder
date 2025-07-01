import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const listings = [
  {
    id: 1,
    title: "1BHK in Koramangala",
    description: "Fully furnished, near Forum Mall",
    location: "Kondapur",
    price: "₹18,000",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-1166641853711758251/original/510281ab-176b-4992-93b1-9491106c3ad7.jpeg",
  },
  {
    id: 2,
    title: "Apartment in Kondapur",
    description: "2BHK shared room, girls only",
    location: "Kondapur",
    price: "₹15,589",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-1166641853711758251/original/cac498c8-4139-4db3-b176-ce20fe822944.jpeg",
  },
  {
    id: 3,
    title: "Room in Kondapur",
    description: "Private space, close to metro",
    location: "Kondapur",
    price: "₹16,600",
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQwMTIwOTU0ODkwNDIyNzU3OA==/original/eeb17939-5358-4bd5-ba4d-1ba2c1023d3d.png",
  },
  {
    id: 4,
    title: "1BHK in Koramangala",
    description: "Fully furnished, near Forum Mall",
    location: "Kondapur",
    price: "₹18,000",
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQzMDE3MDM5MzU2NDI3MDMzNQ==/original/5507fafb-5dd8-491c-9f8f-f69e3f08110c.jpeg",
  },
  {
    id: 5,
    title: "Apartment in Kondapur",
    description: "2BHK shared room, girls only",
    location: "Kondapur",
    price: "₹15,000",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-1421564668789696361/original/a4a0f5a1-1458-4526-8bb1-4a497d5b3776.jpeg",
  },
  {
    id: 6,
    title: "Room in Kondapur",
    description: "Private space, close to metro",
    location: "Kondapur",
    price: "₹13,000",
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1423919136604292671/original/ecd618a5-c959-450e-9acc-eac952eaea1d.jpeg",
  },
  {
    id: 8,
    title: "Apartment in Kondapur",
    description: "2BHK shared room, girls only",
    location: "Kondapur",
    price: "₹15,000",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-1421564668789696361/original/a4a0f5a1-1458-4526-8bb1-4a497d5b3776.jpeg",
  },
  {
    id: 9,
    title: "Room in Kondapur",
    description: "Private space, close to metro",
    location: "Kondapur",
    price: "₹13,000",
    img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1423919136604292671/original/ecd618a5-c959-450e-9acc-eac952eaea1d.jpeg",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2>Over 1,000 places in Kondapur</h2>
      <div className="listings">
        {listings.map((item) => (
          <div
            key={item.id}
            className="listing-card"
            onClick={() => navigate(`/listing/${item.id}`)}
          >
            <img src={item.img} alt={item.title} className="listing-img" />
            <div className="listing-info">
              <p className="listing-title">{item.title}</p>
              <p className="listing-desc">{item.description}</p>
              <p className="listing-location">{item.location}</p>
              <p className="listing-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
