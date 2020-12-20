import React from "react";
import heroSectionMan from "./img/heroSectionMan.png";
import watch from "./img/watch.png";
import projectIcon1 from "./img/projectIcon1.png";
import projectIcon2 from "./img/projectIcon2.png";
import projectIcon3 from "./img/projectIcon3.png";
import chatIcon from "./img/chatIcon.png";
import micIcon from "./img/micIcon.png";
import fashionVideo from "./video/fashionVideo.mp4";
import workSectionImg1 from "./img/workSectionImg1.png";
import workSectionImg2 from "./img/workSectionImg2.png";
import workSectionImg3 from "./img/workSectionImg3.png";
import workSectionImg4 from "./img/workSectionImg4.png";
import workSectionImg5 from "./img/workSectionImg5.png";
import workSectionImg6 from "./img/workSectionImg6.png";
import workSectionImg7 from "./img/workSectionImg7.png";
import workSectionImg8 from "./img/workSectionImg8.png";
import workSectionImg9 from "./img/workSectionImg9.png";

import cisco from "./img/cisco.png";
import adidas from "./img/adidas.png";
import lenovo from "./img/lenovo.png";
import disnep from "./img/disnep.png";
import amazon from "./img/amazon.png";
import puma from "./img/puma.png";
import apple from "./img/apple.png";
import mini from "./img/mini.png";

import testimonialSectionMan from "./img/testimonialSectionMan.png";

import windowSection1 from "./img/windowImage1.png";
import windowSection2 from "./img/windowImage2.png";
import windowSection3 from "./img/windowImage3.png";
import windowSection4 from "./img/windowImage4.png";

export default function pageOne() {
  return (
    <div id="homePageContainer">
      <section id="heroSection">
        <div id="leftPart">
          <article>
            <h3>We are best and creative agency</h3>
            <h1>
              We turn creative ideas <br /> into your business.
            </h1>
            <p>
              Lorem ipsum dolor sit am et. consec tetur adipi scing elit.Sed{" "}
              <br /> sodales enim ut rhoncus lorem ipsum ese terds.
            </p>
            <div id="buttonSection">
              <button id="ourStory">OUR STORY</button>
              <button id="readmore">READ MORE</button>
            </div>
          </article>
        </div>
        <div id="rightPart">
          <img src={heroSectionMan} alt=""></img>
        </div>
      </section>
      <section id="watchSection">
        <article>
          <h3>Dream Big Inspire the world</h3>
          <h1>
            We turn creative ideas <br />
            into your business.
          </h1>
          <div id="tabContainer">
            <div id="buttonCpontainer">
              <button id="webDesign"> WEB DESIGN</button>
              <button id="mobileApp"> MOBILE APP</button>
              <button id="branding"> BRANDING</button>
              <button id="Product"> PRODUCT</button>
              <p id="watchSectionText">
                Lorem ipsum dolor sit am et. consec tetur adipi scing elit.Sed
                sodales enimm ut <br /> rhoncus lorem ispsum ese terds.Lorem
                dolor si am et.consec tetur adipi <br /> scing elit.Sed sodales
                enimm ut rhoncus lorem ispsum ese terds.Lorem dolor <br />
                sit am et.consec tetur adipi scing elit.
              </p>
              <button id="readmore">READ MORE</button>
            </div>
          </div>
        </article>

        <div id="watchImageContainer">
          <img src={watch} alt=""></img>
        </div>
      </section>
      <section id="projectSection">
        <div id="projectContainer">
          <div id="first">
            <img src={projectIcon1} alt="this is a mic icon. "></img>
            <h1> 500+00</h1>
            <h2> Sucessfully</h2>
            <h3> completed projects</h3>
            <p>
              Lorem ipsum dolor sit am et. consec tetur <br /> adipi scing
              elit.Sed sodales enimm ut <br /> rhoncus lorem ispsum ese terds.
            </p>
          </div>

          <div id="second">
            <img src={projectIcon2} alt="this is a mic icon. "></img>
            <h1> 254+</h1>
            <h3>
              <span id="highly"> Highly </span> specilized <br /> employees
            </h3>
            <p>
              Lorem ipsum dolor sit am et. consec tetur <br /> adipi scing
              elit.Sed sodales enimm ut <br /> rhoncus lorem ispsum ese terds.
            </p>
          </div>
          <div id="third">
            <img src={projectIcon3} alt="this is a mic icon. "></img>
            <h1> 45+</h1>
            <h2> Awards</h2>
            <h3> around the world</h3>
            <p>
              Lorem ipsum dolor sit am et. consec tetur <br /> adipi scing
              elit.Sed sodales enimm ut <br /> rhoncus lorem ispsum ese terds.
            </p>
          </div>
        </div>
      </section>
      <section id="ideaSection">
        <h2> Let's Grow Together</h2>
        <h1> We turn creative ideas into your business.</h1>
        <p>
          Lorem ipsum dolor sit am et. consec tetur adipi scing elit.Sed sodales
          enimm ut rhoncus lorem <br /> ispsum ese terds. Lorem ipsum dolor sit
          am et. consec tetur adipi scing elit.
        </p>
        <div>
          <button id="ReadMore"> READ MORE</button>
        </div>
      </section>
      <section id="videoSection">
        <div id="videoSectionContainer">
          <div id="leftSection">
            <article>
              <h3> We are the best creative agency</h3>
              <h1>
                We turn creative ideas <br /> into your business.
              </h1>
              <p>
                {" "}
                Lorem ipsum dolor sit am et. consec tetur adipi scing elit.Sed{" "}
                <br /> sodales enimm ut rhoncus lorem ispsum ese terds. Lorem
                ipsum <br /> dolor sit am et. consec tetur adipi scing elit.Sed{" "}
                sodales enimm ut <br /> rhoncus lorem ispsum ese terds.{" "}
              </p>
            </article>
            <div id="cardContainer">
              <div id="cardLeft">
                <img src={chatIcon} alt=" this is a chat icon."></img>
                <h1> Graphic Design</h1>
                <p>
                  {" "}
                  Lorem ipsum dolor sit am et. consec <br /> tetur adipi scing
                  elit.Sed sodales <br /> enimm ut rhoncus lorem ispsum ese{" "}
                  <br /> terds.
                </p>
                <button id="cardLeftButton">READ MORE</button>
              </div>
              <div id="cardRight">
                <img src={micIcon} alt="this is a mic icon."></img>
                <h1> Graphic Design</h1>
                <p>
                  {" "}
                  Lorem ipsum dolor sit am et. consec <br /> tetur adipi scing
                  elit.Sed sodales <br /> enimm ut rhoncus lorem ispsum ese{" "}
                  <br /> terds.
                </p>
                <button id="cardLeftButton">READ MORE</button>
              </div>
            </div>
          </div>
          <div id="rightSection">
            <video width="500" height="300" controls>
              <source src={fashionVideo} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </section>
      <section id="workSection">
        <h1> Our Recent Work</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit am et. consec tetur adipi scing elit.Sed sodales
          enimm ut rhoncus lorem <br /> ispsum ese terds. Lorem ipsum dolor sit
          am et. consec tetur adipi scing elit.Sed sodales enimm ut <br />{" "}
          rhoncus lorem ispsum ese terds. Lorem ipsum dolor sit am et. consec
          tetur adipi scing elit.{" "}
        </p>

        {/* ===============================================================start  */}
        <div id="buttonContainer">
          <button id="webDesign">WEB DESGIN</button>
          <button id="mobileApp">MOBILE APP</button>
          <button id="branding">BRANDING</button>
          <button id="product">PRODUCT</button>
        </div>
        {/* =============================================================== end */}
        <ol id="productContainer">
          <li id="products">
            <img src={workSectionImg1} alt="image"></img>
          </li>
          <li id="products">
            <img src={workSectionImg2} alt="image"></img>
          </li>
          <li id="products">
            <img src={workSectionImg3} alt="image"></img>
          </li>
          <li id="products">
            <img src={workSectionImg4} alt="image"></img>
          </li>
          <li id="products">
            <img src={workSectionImg5} alt="image"></img>
          </li>
          <li id="products">
            <img src={workSectionImg6} alt="image"></img>
          </li>
          <li id="products">
            <img src={workSectionImg7} alt="image"></img>
          </li>
          <li id="products">
            <img src={workSectionImg8} alt="image"></img>
          </li>
          <li id="products">
            <img src={workSectionImg9} alt="image"></img>
          </li>
        </ol>
        <div id="workButtonContainer">
          <button id="workReadMore"> READ MORE</button>
        </div>
      </section>
      <section id=" sponserSection">
        <ol id="sponserLogoContainer">
          <li>
            <img src={cisco} alt="" />
          </li>
          <li>
            <img src={adidas} alt="" />
          </li>
          <li>
            <img src={lenovo} alt="" />
          </li>
          <li>
            <img src={disnep} alt="" />
          </li>
          <li>
            <img src={amazon} alt="" />
          </li>
          <li>
            <img src={puma} alt="" />
          </li>
          <li>
            <img src={apple} alt="" />
          </li>
          <li>
            <img src={mini} alt="" />
          </li>
        </ol>
      </section>
      <section id="testimonialSection">
        <div id="leftPart">
          <h3> Our Happy Client</h3>
          <h1> Testimonials</h1>
          <p>
            <span>&#10077;</span> Lorem ipsum dolor sit am et. consec tetur
            adipi scing elit.Sed sodales enimm ut rhoncus lorem <br /> ispsum
            ese terds. Lorem ipsum dolor sit am et. <br />
            consec tetur adipi scing elit.
          </p>
          <div id="feedBackContainer">
            <div id="starContainer">
              &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
            </div>
            <p>Mr.John Doe </p>
          </div>
        </div>
        <div id="rightPart">
          <img
            src={testimonialSectionMan}
            alt="man smiling with hands folding"
          />
        </div>
      </section>
      <section id="helpSection">
        <h1> Need Help?</h1>
        <h2> Don't Forget to Contact With Us</h2>
        <p>
          Lorem ipsum dolot sit am et. cosec tetr adipi scing elit. Sed sodales
          enim ut rhoncus lorm iopsum ese terds. Lorem ipsum dolor <br /> sit am
          et, consec tetur adipi scing elit. Sed sodales enim ut rhoncus.{" "}
        </p>
        <form id="nameEmail">
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Email"></input>
          <button id="submit" type="submit">
            {" "}
            SUBMIT
          </button>
        </form>
      </section>
      <section id="socialMediaSection">
        <a href="home">
          <button>facebook</button>
        </a>
        <a>
          <button>twitter</button>
        </a>
        <a>
          <button>linkedin</button>
        </a>
        <a>
          <button>instagram</button>
        </a>
        <a>
          <button>behance</button>
        </a>
      </section>
      <section id="companySection">
        <div id="companyLeftSide">
          <div id="company1">
            <h1> Company</h1>
            <ol>
              <li>About</li>
              <li>Approach</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>News</li>
            </ol>
          </div>
          <div id="company1">
            <h1> Company</h1>
            <ol>
              <li>About</li>
              <li>Approach</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>News</li>
            </ol>
          </div>
          <div id="company2">
            <h1> Company</h1>
            <ol>
              <li>About</li>
              <li>Approach</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>News</li>
            </ol>
          </div>
          <div id="company3">
            <h1> Company</h1>
            <ol>
              <li>About</li>
              <li>Approach</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>News</li>
            </ol>
          </div>
          <div id="company4">
            <h1> Company</h1>
            <ol>
              <li>About</li>
              <li>Approach</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>News</li>
            </ol>
          </div>
        </div>
        <div id="companyRightSide">
          <div id="galleryContainer">
            <div id="photo1">
              <img src={windowSection1} alt="img1"></img>
            </div>
            <div id="photo2">
              <img src={windowSection2} alt="img2"></img>
            </div>
            <div id="photo3">
              <img src={windowSection3} alt="img3"></img>
            </div>
            <div id="photo4">
              <img src={windowSection4} alt="img4"></img>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <ol>
          <li>&copy; 2022 theme by psdfreebies.com</li>
          <li className="dot">Privacy</li>

          <li className="dot"> Terms of Use</li>
          <li className="dot"> Site Map</li>
        </ol>
      </footer>
    </div>
  );
}
