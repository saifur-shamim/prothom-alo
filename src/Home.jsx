import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import prothomAloLogo from "./images/logo.jpg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Test from "./test";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Top news section before navbar  */}
      <div className="top">
        {/* 1st column */}
        <div className="logo">
          <a href="/">
            <img src={prothomAloLogo} alt="logo" className="img-fluid" />
          </a>
        </div>

        {/* 2nd Column */}

        <div className="top-news">
          <div className="image-section">
            <img
              src="https://media.prothomalo.com/prothomalo-bangla%2F2025-03-01%2F9b1papdz%2Fweb.jpg?w=110&auto=format%2Ccompress&fmt=avif"
              alt=""
            />
          </div>

          <div className="title-section">
            <i className="bi bi-play">
              ভোটে জিতেও টিকতে পারেননি বিশ্বের যেসব বিতর্কিত নেতা
            </i>
          </div>
        </div>

        {/* 3rd Column */}

        <div className="top-news">
          <div className="image-section">
            <img
              src="https://media.prothomalo.com/prothomalo-bangla%2F2025-03-01%2Fpu50d6c0%2Fhorizontal.01160117.Still2120.jpg?w=110&auto=format%2Ccompress&fmt=avif"
              alt=""
            />
          </div>

          <div className="title-section">
            <i className="bi bi-play">মরুভূমি গাছে ভরিয়ে দেবে রোবট!</i>
          </div>
        </div>

        {/* 4th Column */}
        <div className="top-news">
          <div className="image-section">
            <img
              src="https://media.prothomalo.com/prothomalo-bangla%2F2025-02-28%2F522rcddz%2F%E0%A6%AA%E0%A6%AC%E0%A6%BF%E0%A6%A4%E0%A7%8D%E0%A6%B0-%E0%A6%B0%E0%A6%AE%E0%A6%9C%E0%A6%BE%E0%A6%A8-%E0%A6%AE%E0%A6%BE%E0%A6%B8%E0%A7%87-%E0%A6%B8%E0%A7%81%E0%A6%B8%E0%A7%8D%E0%A6%A5-%E0%A6%A5%E0%A6%BE%E0%A6%95%E0%A6%A4%E0%A7%87-%E0%A6%AF%E0%A7%87%E0%A6%B8%E0%A6%AC-%E0%A6%96%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%96%E0%A7%87%E0%A6%A4%E0%A7%87-%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%A8-.00031716.Still002.jpg?w=110&auto=format%2Ccompress&fmt=avif"
              alt=""
            />
          </div>

          <div className="title-section">
            <i className="bi bi-play">
              পবিত্র রমজান মাসে সুস্থ থাকতে যেসব খাবার খেতে পারেন
            </i>
          </div>
        </div>
      </div>

      {/* Navbar Section   */}

      <div className="navbar">
        <div className="nav-section"> সর্বশেষ </div>
        <div className="nav-section"> রাজনীতি </div>
        <div className="nav-section"> বাংলাদেশ </div>
        <div className="nav-section"> অপরাধ </div>
        <div className="nav-section"> বিশ্ব </div>
        <div className="nav-section"> বাণিজ্য </div>
        <div className="nav-section"> মতামত </div>
        <div className="nav-section"> খেলা </div>
        <div className="nav-section"> বিনোদন </div>
        <div className="nav-section"> চাকরি </div>
        <div className="nav-section"> জীবনযাপন </div>
        <div className="nav-section">
          {" "}
          <i class="bi bi-search"> খুঁজুন </i>{" "}
        </div>
        <div className="nav-section">
          {" "}
          <i class="bi bi-newspaper"> ই-পেপার </i>{" "}
        </div>
        <div className="nav-section">
          {" "}
          <i class="bi bi-globe"> </i> Eng{" "}
        </div>
        <div className="nav-section">
          {" "}
          <i class="bi bi-person-fill"></i>Login{" "}
        </div>
      </div>

      {/* Section-1 Leading news */}
      <div className="section-1">
        <div className="section1-image">
          <img
            src="https://media.prothomalo.com/prothomalo-bangla%2F2025-03-03%2Fxjm6x7xn%2FStarmers-summit.avif?rect=0%2C0%2C1080%2C720&w=622&auto=format%2Ccompress&fmt=avif"
            alt=""
          />
          <p>
            {" "}
            যুক্তরাজ্যের রাজধানী লন্ডনে গতকাল রোববার জড়ো হয়েছিলেন ইউরোপের
            বিভিন্ন দেশের নেতারা | ছবি: এএফপি
          </p>
        </div>

        <div className="section1-body">
          <h3>
            {" "}
            <strong> লন্ডন সম্মেলন কি ট্রাম্পের মন জোগাতে পারবে </strong>
          </h3>

          <p>
            লন্ডন সম্মেলনের ফলাফল আপাতদৃষ্টিতে জেলেনস্কির সমর্থনে ইউরোপের একটি
            ঐক্যবদ্ধ অবস্থান গ্রহণ। ইউক্রেনের জন্য আরও ইউরোপীয় সামরিক সহায়তার
            প্রতিশ্রুতি।
            <br />
            <br />
            ১৩ মিনিট আগে
          </p>
        </div>

        <div className="section1-blank"></div>
      </div>

      {/* Section 2  */}

      <div className="section-2">
        <div className="section2-first">
          <div className="body">
            <h5>
              <strong>
                {" "}
                জিয়া চ্যারিটেবল ট্রাস্ট মামলায় খালেদা জিয়াকে খালাসের রায় বহাল{" "}
              </strong>
            </h5>
            <p> ৩৯ মিনিট আগে </p>
          </div>

          <div className="image">
            <img
              src="https://media.prothomalo.com/prothomalo-bangla%2F2025-02-27%2Fm7q7a4dm%2Fcbe8884a-cd71-4927-beef-10e621aedf0a.jfif?rect=1%2C0%2C1280%2C853&w=622&auto=format%2Ccompress&fmt=avif"
              alt="Begum Zia"
            />
          </div>
        </div>

        <div className="section2-second">
          <div className="body">
            <h5>
              <strong>
                {" "}
                রোজমেরি চিকেনসহ যেসব খাবার না খেয়েই হোয়াইট হাউস ছেড়েছিলেন
                জেলেনস্কি{" "}
              </strong>
            </h5>
            <p> ১৩ মিনিট আগে </p>
          </div>

          <div className="image">
            <img
              src="https://media.prothomalo.com/prothomalo-bangla%2F2025-03-03%2F7di6641m%2FVolodymyr-Zelensky.avif?rect=59%2C0%2C687%2C458&w=622&auto=format%2Ccompress&fmt=avif"
              alt="Begum Zia"
            />
          </div>
        </div>

        <div className="section2-third">
          <div className="body">
            <h5>
              <strong>
                {" "}
                বিস্কুট, তেল, আটা-ময়দা, লবণ, এলপি গ্যাসসহ কিছু পণ্যে ভ্যাট তুলে
                দিল এনবিআর{" "}
              </strong>
            </h5>
            <p> ৪২ মিনিট আগে </p>
          </div>

          <div className="image">
            <img
              src="https://media.prothomalo.com/prothomalo-bangla%2F2022-05%2Fef7c2962-367d-4383-a11a-d8b2c42ab32c%2FCHITTAGONG_BIS_SOWRAV1050518.png?rect=295%2C0%2C2025%2C1350&w=622&auto=format%2Ccompress&fmt=avif"
              alt="Begum Zia"
            />
          </div>
        </div>
      </div>

      {/* section-3 */}

      <div className="section-3">
        <div className="section3-first">
          <div className="body">
            <h5>
              <strong>
                {" "}
                মেট্রোরেলে রিচার্জ সুবিধা কেন বিকাশ–রকেট–ডেবিট কার্ডে চালু হচ্ছে
                না{" "}
              </strong>
            </h5>
            <p>
              ঢাকায় মেট্রোরেল চালু হয়েছে দুই বছরের বেশি সময় পেরিয়েছে। গণপরিবহনের
              এই বাহনটি ধীরে ধীরে বেশ জনপ্রিয় হয়ে উঠেছে। ব্যস্ত সময়ে ভিড়ের কারণে
              অনেক যাত্রী উঠতেও পারছেন না। এখন দৈনিক যাত্রী সংখ্যা চার লাখ
              ছাড়িয়েছে।{" "}
            </p>
            <p> ১ ঘণ্টা আগে </p>
          </div>

          <div className="image">
            <img
              src="https://media.prothomalo.com/prothomalo-bangla%2F2025-03-03%2F24xx6ozm%2Fmrt.jpg?rect=0%2C0%2C1600%2C1067&w=622&auto=format%2Ccompress&fmt=aviff"
              alt="Metro ticket"
            />
          </div>
        </div>

        <div className="section3-second">
          <div className="body">
            <h5>
              <strong> মির্জা ফখরুল হাসপাতালে ভর্তি </strong>
            </h5>
            <p>
              শায়রুল কবীর খান বলেন, গত সপ্তাহে সোহরাওয়ার্দী উদ্যানে বই মেলায়
              রাতে বইয়ের মোড়ক উন্মোচন ছিল। সেখানে প্রচুর ধুলাবালি থাকার কারণে
              অসুস্থ অনুভব করছিলেন বিএনপির মহাসচিব।
            </p>
            <p> ২৭ মিনিট আগে </p>
          </div>

          <div className="image">
            <img
              src="https://media.prothomalo.com/prothomalo-bangla%2F2024-11-30%2Ft9xt6h8k%2Fmirzafakhrul.webp?rect=0%2C0%2C450%2C300&w=622&auto=format%2Ccompress&fmt=avif"
              alt="Mirza Fakrul"
            />
          </div>
        </div>
      </div>

      {/* Section-4 */}

      <div className="section-4">
        <div className="section4-first">
          <div className="body">
            <h5>
              <strong>
                <span>মতামত:</span> ইউক্রেন নিয়ে ইউরোপ আর আমেরিকার মুখ চেয়ে বসে থাকবে না
              </strong>
            </h5>
            <p> ৫১ মিনিট আগে </p>
          </div>

          <div className="image">
            <img
              src="https://media.prothomalo.com/prothomalo-bangla%2F2025-03-03%2F3osvb40o%2FCapture.JPG?rect=69%2C0%2C542%2C361&w=622&auto=format%2Ccompress&fmt=avif"
              alt="Begum Zia"
            />
          </div>
        </div>

        <div className="section4-second">
          <div className="body">
            <h5>
              <strong>
                <span>বিশ্লেষণ: </span> ইয়াহিয়া যেভাবে মুজিবকে ধোঁকা দিয়েছিলেন
              </strong>
              
            </h5>
            <p> ১৩ মিনিট আগে </p>
          </div>

          <div className="image">
            <img
              src="https://media.prothomalo.com/prothomalo-bangla%2F2025-03-03%2Fhobnqc1k%2F03032025-cm-5.jpg?rect=0%2C110%2C1251%2C834&w=622&auto=format%2Ccompress&fmt=avif"
              alt="Begum Zia"
            />
          </div>
        </div>

        <div className="section4-third">
          <div className="body">
            <h5>
              <strong>
              ২ মাস চলে গেল, আর কবে বই পাবে শিক্ষার্থীরা
              </strong>
            </h5>
            <p> ২৪ মিনিট আগে </p>
          </div>

          <div className="image">
            <img
              src="https://media.prothomalo.com/prothomalo-bangla%2F2025-01-01%2F0n7aq145%2Fyucw02lb.jpg?rect=0%2C0%2C3360%2C2240&w=622&auto=format%2Ccompress&fmt=avif"
              alt="Begum Zia"
            />
          </div>
        </div>
      </div>

      {/* section-5 */}

      <div className="section-5">

      <div className="section5-body">
          <img
            src="https://media.prothomalo.com/prothomalo-bangla%2F2025-02-18%2Fe5roz2hz%2FShahbagh.jpeg?rect=0%2C0%2C1599%2C1066&w=622&auto=format%2Ccompress&fmt=avif"
            alt=""
          />
          
            {" "}
            <h6> <strong> সরকারি প্রাথমিক বিদ্যালয়ে ৬৫৩১ জনের যোগদানের পথ খুলল </strong>  </h6>
            <p> 
            ১ ঘণ্টা আগে
          </p>
        </div>

        <div className="section5-body">
          <img
            src="https://media.prothomalo.com/prothomalo-bangla%2F2025-01-01%2Fg87194vj%2FChia-water.webp?rect=50%2C0%2C540%2C360&w=622&auto=format%2Ccompress&fmt=avif"
            alt=""
          />
          
            {" "}
            <h6> <strong> রমজান মাসে কোন সময় চিয়া সিড খেলে সবচেয়ে বেশি উপকার পাবেন </strong>  </h6>
            <p> 
            ১ ঘণ্টা আগে
          </p>
        </div>

        <div className="section5-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-3cog4Zfv1Eu3WtKoA_rle3iqEqwJk-IGw&s"
            alt=""
          />
          
           
            {" "}
            <h6> <strong> রোজা রাখতে ডায়াবেটিস রোগীদের যা যা মানতে হবে </strong>  </h6>
            <p> 
            ১ ঘণ্টা আগে
          </p>
        </div>

      </div>

      {/* Section-6 */}

      <div className="section-6">
        
      </div>
    </>
  );
}

export default Home;
