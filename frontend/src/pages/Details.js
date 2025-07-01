import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import "../styles/Details.css";

export default function Details() {
  // const { id } = useParams();

  const [fullscreenImg, setFullscreenImg] = useState(null);

  const handleImgClick = (src) => setFullscreenImg(src);
  const closeFullscreen = () => setFullscreenImg(null);

  return (
    <div className="details-page">
      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img
            src={fullscreenImg}
            alt="Fullscreen"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "8px",
              boxShadow: "0 0 20px #000",
            }}
          />
        </div>
      )}

      <div className="details-header">
        <h1>Cozy Dwelling</h1>
        <p>Entire rental unit in Hyderabad, India</p>
        <p className="listing-meta">
          1 Master bedroom · 2 bedroom · 3 beds · 3 bathroom
        </p>
      </div>

      <div className="details-gallery-layout">
        <div className="main-photo">
          <img
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-1288815468960937888/original/2f9ad0af-ae11-4aa4-bdad-58c11db59f2e.jpeg"
            alt="Main listing"
            onClick={() =>
              handleImgClick(
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1288815468960937888/original/2f9ad0af-ae11-4aa4-bdad-58c11db59f2e.jpeg"
              )
            }
          />
          {/* <img src={`/img${id}.jpg`} alt="Main listing" /> */}
        </div>
        <div className="side-photos">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-1166641853711758251/original/510281ab-176b-4992-93b1-9491106c3ad7.jpeg"
            alt="Alt 1"
            onClick={() =>
              handleImgClick(
                "https://a0.muscache.com/im/pictures/miso/Hosting-1166641853711758251/original/510281ab-176b-4992-93b1-9491106c3ad7.jpeg"
              )
            }
          />
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-1166641853711758251/original/cac498c8-4139-4db3-b176-ce20fe822944.jpeg"
            alt="Alt 2"
            onClick={() =>
              handleImgClick(
                "https://a0.muscache.com/im/pictures/miso/Hosting-1166641853711758251/original/cac498c8-4139-4db3-b176-ce20fe822944.jpeg"
              )
            }
          />
          <img
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-1406966950477922384/original/64a87d36-67fe-495c-87ef-e9a533eb07a7.jpeg"
            alt="Alt 3"
            onClick={() =>
              handleImgClick(
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1288815468960937888/original/2f9ad0af-ae11-4aa4-bdad-58c11db59f2e.jpeg"
              )
            }
          />
          <img
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQwMTIwOTU0ODkwNDIyNzU3OA==/original/eeb17939-5358-4bd5-ba4d-1ba2c1023d3d.png"
            alt="Alt 4"
            onClick={() =>
              handleImgClick(
                "https://a0.muscache.com/im/pictures/hosting/Hosting-1288815468960937888/original/2f9ad0af-ae11-4aa4-bdad-58c11db59f2e.jpeg"
              )
            }
          />
        </div>
      </div>

      <div className="details-main-content">
        <div className="left-column">
          <h2 className="section-title">Guest favourite</h2>
          <p>One of the most loved homes on FlatFinder</p>

          <div className="rating-box">
            <span className="rating">4.91</span>
            <span className="stars">⭐</span>
            <span className="reviews">(120 reviews)</span>
          </div>

          {/* DESCRIPTION SECTION */}
          <div className="listing-description">
            <h3>The space</h3>
            <p className="short-text">
              Experience comfort and privacy in our cozy 3BHK stay, perfect for
              families, couples, and professionals. Enjoy full kitchen access,
              CCTV-monitored parking, and a kid-safe empty room. Located in a
              peaceful area near Uppal Bus Stop, National Highway 163, and major
              food outlets like McDonald's and KFC. MJR Square Mall is just 7 km
              away.
              <span className="show-more"> Show more</span>
            </p>
          </div>

          {/* AMENITIES SECTION */}
          <div className="amenities-section">
            <h3>What this place offers</h3>
            <div className="amenities-grid">
              <div>🏙️ City skyline view</div>
              <div>🍽️ Kitchen</div>
              <div>📶 Wifi</div>
              <div>🚗 Free parking on premises</div>
              <div>🛏️ Cot</div>
              <div>📹 Exterior security cameras on property</div>
              <div className="disabled">🚫 Carbon monoxide alarm</div>
              <div className="disabled">🚫 Smoke alarm</div>
            </div>
            <button className="show-all-btn">Show all 13 amenities</button>
          </div>
        </div>

        <div className="right-column">
          <div className="booking-card">
            <div className="price">₹16,377</div>
            <div className="price">Avaible from 1st October</div>
            <div className="price">Master bedroom with attached bathroom</div>
            <button className="reserve-btn">Message Poster</button>
          </div>
        </div>
      </div>
    </div>
  );
}
