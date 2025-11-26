import React from "react";

export default function TebraLanding() {
  return (
    <>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap');

        * {
            font-family: "Nunito", sans-serif;
        }

        /* -------- NAVBAR -------- */
        .navbar {
          width: 100%;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e5e7eb;
          background: #ffffff;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .nav-logo {
          height: 32px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 60px;
          font-size: 16px;
          color: #003d36;
          font-weight: 500;
        }

        .nav-links div {
          cursor: pointer;
        }

        .nav-links div:hover {
          color: #015c53;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 40px;
          font-size: 15px;
          color: #003d36;
          margin-right: 60px;
        }

        .nav-button-outline {
          padding: 10px 22px;
          border: 1px solid #003d36;
          border-radius: 30px;
          background: #ffffff;
          font-weight: 500;
          cursor: pointer;
        }
          
        .nav-logo {
          font-size: 30px;
          font-weight: 700;
          color: #0F766E;
        }

        .nav-button-fill {
          padding: 10px 22px;
          background: #ef6e4eff;
          border-radius: 30px;
          color: white;
          font-weight: 500;
          cursor: pointer;
          border: none;
        }

        
        .section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1250px;
          margin: 30px auto;
          padding: 40px 30px;
          align-items: center;
        }

        .ratings {
          display: flex;
          gap: 20px;
          align-items: center;
          color: #003d36;
          font-size: 18px;
        }

        .title {
          font-size: 70px;
          font-weight: 700;
          line-height: 1.1;
          color: #003d36;
          margin-top: 20px;
        }

        .desc {
          max-width: 520px;
          font-size: 20px;
          color: #074d45;
          margin-top: 20px;
          line-height: 1.5;
        }

        .buttons {
          display: flex;
          align-items: center;
          gap: 25px;
          margin-top: 35px;
        }

        .btn-orange {
          background: #f4704fff;
          padding: 14px 28px;
          border-radius: 35px;
          font-size: 18px;
          font-weight: 600;
          color: white;
          cursor: pointer;
          border: none;
        }

        .btn-outline-green {
          font-size: 18px;
          padding: 14px 28px;
          border-radius: 35px;
          border: 2px solid #003d36;
          background: white;
          cursor: pointer;
        }

        /* RIGHT IMAGE */
        .image-wrapper {
          position: relative;
          width: 100%;
          text-align: center;
        }

        .main-image {
          width: 95%;
          object-fit: contain;
        }

        /* Floating Labels */
        .float-tag {
          position: absolute;
          padding: 10px 20px;
          background: #004d45;
          color: white;
          font-size: 15px;
          font-weight: 600;
          border-radius: 25px;
          white-space: nowrap;
        }

        .tag-experience {
          top: -10px;
          right: 60px;
        }

        .tag-ehr {
          top: 160px;
          left: 50px;
        }

        .tag-marketing {
          top: 280px;
          right: 10px;
        }

        .tag-billing {
          bottom: 80px;
          right: 120px;
        }
      `}</style>

      {/* ---------- NAVBAR ---------- */}
      <div className="navbar">
        <div className="nav-left">
          <div className="nav-logo">tebra</div>

          <div className="nav-links">
            <div>Products</div>
            <div>Pricing</div>
            <div>About</div>
            <div>Case Studies</div>
            <div>Resources</div>
          </div>
        </div>

        <div className="nav-right">

          <button className="nav-button-outline">Take a tour</button>
          <button className="nav-button-fill">Get a demo</button>
        </div>
      </div>


      <div className="section">
        {/* LEFT SIDE */}
        <div>
          <div className="ratings">⭐ 4.6 &nbsp;&nbsp; ⭐⭐⭐⭐☆ 4.1</div>

          <h1 className="title">
            Run your entire <br />
            practice with one <br />
            EHR+ platform
          </h1>

          <p className="desc">
            Tebra’s EHR+ platform connects care, billing, scheduling,
            and more. Built-in AI speeds up notes, handles reviews, and
            automates repetitive admin work.
          </p>

          <div className="buttons">
            <button className="btn-orange">Get a demo</button>
            <button className="btn-outline-green">
              Take a product tour
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="image-wrapper">

          <img
            src="\img\image.png"
            className="main-image"
            alt="Doctor and Dashboard"
          />

          <div className="float-tag tag-experience">Patient Experience</div>
          <div className="float-tag tag-ehr">EHR</div>
          <div className="float-tag tag-marketing">
            Medical Practice Marketing
          </div>
          <div className="float-tag tag-billing">Billing & Payments</div>
        </div>
      </div>
    </>
  );
}
