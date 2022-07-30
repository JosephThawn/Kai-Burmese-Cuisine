import React from "react";
import ziok from "./assets/ziok.png";
import ziusa from "./assets/ziusa.png";
import zntv from "./assets/zntv.png";
import ok from "./assets/ok.png";
import "./About.css";
import family from "./assets/family.jpeg";
import joseph from "./assets/joseph.jpeg";

function About() {
  return (
    <div className="community" id="About">
      <div className="container">
        <h2>About Our Family</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={ziok} alt="ziok" />
            {/* <img src={family} alt="ziok" /> */}

            <p>
              Lorem ipsum dolor sit amet. Et cupiditate odio vel quaerat
              officiaodio vel quaerat officia officia
            </p>
            <p>
              <span>ZIOK</span>
            </p>
            <p>Zomi Innkuan Oklahoma</p>
          </div>
          <div className="card">
            <img src={joseph} alt="ziusa" />
            <p>
              excepturi eos numquam necessitatibus ut deserunt doloribus? Eum
              atque repudiandae in eius reprehenderit voluptas eligendi ea dolor
            </p>
            <p>
              <span>ZIUSA</span>
            </p>
            <p>Zomi InKuan USA</p>
          </div>
          <div className="card">
            <img src={zntv} alt="zntv" />

            <p>
              Eos nihil veniam id beatae inventore ut perferendis repellendus
              qui neque rerum ex facere nihil sed Quis dignissimos et culpa
              sapiente! Quo architecto enim qui blanditiis excepturi aut ullam
              numquam.
            </p>
            <p>
              <span>ZNTV</span>
            </p>
            <p>Zomin National TV</p>
          </div>
          <div className="card">
            <img src={ok} alt="ok" />
            <p>
              Eos nihil veniam id beatae inventore ut perferendis repellendus
              qui neque rerum ex facere nihil sed Quis dignissimos et culpa
              numquam.
            </p>
            <p>
              <span>ZNTV</span>
            </p>
            <p>Zomin National TV</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
