import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { List } from "semantic-ui-react";
import Coordinators from "../components/Sections/Coordinators";
import VCSir from "../components/Sections/VCSir";
import ManishSir from "../components/Sections/ManishSir";
// Sections
import SocialIcon from "../components/Nav/side_social_icons";
import Header from "../components/Sections/Header";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Team from "../components/Sections/Team";
import HeaderImage from "../assets/img/add_udaan_3.jpg";
import AtharvaBhawsar from "../assets/img/Team/AtharvaBhawsar.JPG";
import Monalisa from "../assets/img/Team/Monalisa.JPG";
import AmoghPraveenPete from "../assets/img/Team/AmoghPraveenPete.JPG";
import AyushAgarwal from "../assets/img/Team/AyushAgarwal.JPG";
import SrijaniSom from "../assets/img/Team/SrijaniSom.JPG";
import RahulKumar from "../assets/img/Team/RahulKumar.JPG";
import SwetaRaj from "../assets/img/Team/SwetaRaj.JPG";
import JyotiSaini from "../assets/img/Team/JyotiSaini.JPG";
import ANIKETMANIKPURI from "../assets/img/Team/ANIKETMANIKPURI.JPG";
import OMPANDEY from "../assets/img/Team/OMPANDEY.JPG";
//import APURVAAZAD from "../assets/img/Team/APURVAAZAD.JPG";
import NITIKUMARI from "../assets/img/Team/NITIKUMARI.JPG";
import JANVIGAWADE from "../assets/img/Team/JANVIGAWADE.JPG";
import SHANTANUVAISHNAV from "../assets/img/Team/SHANTANUVAISHNAV.JPG";
//import LOVINARANJAN from "../assets/img/Team/LOVINARANJAN.JPG";
//import SHUBHANKSONKAR from "../assets/img/Team/SHUBHANKSONKAR.JPG";
import TamannaJagra from "../assets/img/Team/TamannaJagra.JPG";
import AyushYadav from "../assets/img/Team/AyushYadav.JPG";
import JhanveeSingh from "../assets/img/Team/JhanveeSingh.JPG";
import KartikaGupta from "../assets/img/Team/KartikaGupta.JPG";
import PiyushRajak from "../assets/img/Team/PiyushRajak.JPG";
//import Sancharikasingh from "../assets/img/Team/Sancharikasingh.JPG";
import ShwataTamrakar from "../assets/img/Team/ShwataTamrakar.JPG";
import TriptiVerma from "../assets/img/Team/TriptiVerma.JPG";
// import DIVYARATHORE from "../assets/img/Team/DIVYARATHORE.JPG";
import GAUTAMIDESHMUKH from "../assets/img/Team/GAUTAMIDESHMUKH.JPG";
import HIMANICHAURASIA from "../assets/img/Team/HIMANICHAURASIA.JPG";
import NIKITADUBEY from "../assets/img/Team/NIKITADUBEY.JPG";
import PRAKHARGUPTA from "../assets/img/Team/PRAKHARGUPTA.JPG";
import SAKSHIJHA from "../assets/img/Team/SAKSHIJHA.JPG";
import SHUBHANGIBAJPAYEE from "../assets/img/Team/SHUBHANGIBAJPAYEE.JPG";
import SHUBHSHRIGUPTA from "../assets/img/Team/SHUBHSHRIGUPTA.JPG";
import NidhiTiwari from "../assets/img/Team/NidhiTiwari.JPG";
import AshutoshYadav from "../assets/img/Team/AshutoshYadav.JPG";
import ShivamSati from "../assets/img/Team/ShivamSati.JPG";
import AishwaryaSahu from "../assets/img/Team/AishwaryaSahu.JPG";
import PiyanshuKashyap from "../assets/img/Team/PiyanshuKashyap.JPG";
// import RatneshSingh from "../assets/img/Team/RatneshSingh.JPG";
import VidhiAgrawal from "../assets/img/Team/VidhiAgrawal.JPG";
// import LakhniSahu from "../assets/img/Team/LakhniSahu.JPG";
// import Nikitajha from "../assets/img/Team/Nikitajha.JPG";
import Omgupta from "../assets/img/Team/Omgupta.JPG";
// import Chittetiharshvardhan from "../assets/img/Team/Chittetiharshvardhan.JPG";
import Prashantyadav from "../assets/img/Team/Prashantyadav.JPG";
import Sheetal from "../assets/img/Team/Sheetal.JPG";
import Lishagupta from "../assets/img/Team/Lishagupta.JPG";
import RitikaAhirwar from "../assets/img/Team/RitikaAhirwar.JPG";
import RESHABH from "../assets/img/Team/RESHABH.JPG";
import ASHISH from "../assets/img/Team/ASHISH.JPG";
import RAHULPATEL from "../assets/img/Team/RAHULPATEL.JPG";
// import RosyMinj from "../assets/img/Team/RosyMinj.JPG";
import ALANKRITAMISHRA from "../assets/img/Team/ALANKRITAMISHRA.JPG";
import UMANGVERMA from "../assets/img/Team/UMANGVERMA.JPG";
import SUMANSHRIWAS from "../assets/img/Team/SUMANSHRIWAS.JPG";
import AKHILPATEL from "../assets/img/Team/AKHILPATEL.JPG";


const Teamdiv = styled.div`
.buttonD{
  border : 1px solid black;
  background-color: black;
  color:white;
  border-radius: 20px;
  padding:0.5vh 0.5vw 0.5vh 0.5vw;
  margin:0.5vh 0.5vw 0.5vh 0.5vw;
  :hover{
    transform: scale(1.05);
  }
}
p{
  text-align: center;
  display: inline-flex;
}
`;


function TeamLanding() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [active, setActive] = useState("CoordinatorCard");
  return (
    <div style={{ overflowX: "hidden" }}>
      <SocialIcon />
      <Header
        img={HeaderImage}
        Greeting="Meet Our"
        title="TEAM"
        salutation=""
        button="Have A Look"
        ButtonLink="#teamnav"
        content="Our people are what turn this club into a home away from home. Each one fits and works in unison to produce the magnum opus that UDAAN is. Come let’s know the parts that make up the whole."
      />
      <VCSir/>
      <ManishSir/>
      <Teamdiv style={{paddingTop:"10vh",textAlign:"center"}} id="teamnav">
        <ol>
        <p className="pointer buttonD"
            onClick={() => setActive("SecondCard")}
          >
            Art & design Board
          </p>
          &nbsp;
          • 
          &nbsp;
          <p className="pointer buttonD"
            onClick={() => setActive("FourthCard")}
          >
            English Editorial Board
          </p>
          &nbsp;
          • 
          &nbsp;
          <p className="pointer buttonD"
            onClick={() => setActive("FifthCard")}
          >
            Graphic Design Board
          </p>
          &nbsp;
          • 
          &nbsp;
          <p className="pointer buttonD"
            onClick={() => setActive("ThirdCard")}
          >
            Hindi Editorial Board
          </p>
          &nbsp;
          • 
          &nbsp;
          <p className="pointer buttonD"
            onClick={() => setActive("SixthCard")}
          >
            Marketing Board
          </p>
          &nbsp;
          • 
          &nbsp;
          <p className="pointer buttonD"
            onClick={() => setActive("SeventhCard")}
          >
            Photography Board
          </p>
          &nbsp;
          • 
          &nbsp;
          <p className="pointer buttonD"
            onClick={() => setActive("FirstCard")}
          >
            Website Board
          </p>
          
        </ol>
      </Teamdiv>
      <div>
      {active === "CoordinatorCard" && (
          <Coordinators/>
        )}
        {active === "FirstCard" && (
          <Team
            board="Website Board"
            boardContent="The face of UDAAN over the web,  the team behind this amazing space who bring us only a click away from the readers. They make UDAAN interactive and reachable to all, giving it a professional outlook."
            // head="Board Head"
            headName="Amogh Praveen Pete"
            // member="Member"
            member2Name="Ayush Agarwal"
            member7Name="Sweta Raj"
            member3Name="Jyoti Saini"
            member5Name="Rahul Kumar"
            member1Name="Atharva Bhawsar"
            member4Name="Monalisa"
            member6Name="Srijani Som"
            M2={AtharvaBhawsar}
            M5={Monalisa}
            M1={AmoghPraveenPete}
            M3={AyushAgarwal}
            M7={SrijaniSom}
            M6={RahulKumar}
            M8={SwetaRaj}
            M4={JyotiSaini}
          />
        )}
        {active === "SecondCard" && (
          <Team
            board="Art & design Board"
            boardContent="The creative maestros of UDAAN, who add on to the beauty of what we do. They are the wizards with paint brushes, because whatever they touch, turns into magic! "
            // head="Member"
            headName="Ayush Yadav"
            // member="Member"
            member1Name="Jhanvee Singh"
            member2Name="Kartika Gupta"
            member3Name="Piyush Rajak"
            member4Name="Shweta Tamrakar"
            member5Name="Tamanna Jangra"
            // member6Name="Sancharika Singh"
            member7Name="Tripti Verma"
            M2={JhanveeSingh}
            // M7={Sancharikasingh}
            M8={TriptiVerma}
            M1={AyushYadav}
            M5={ShwataTamrakar}
            M4={PiyushRajak}
            M3={KartikaGupta}
            M6={TamannaJagra}
          />
        )}
        {active === "ThirdCard" && (
          <Team
            board="Hindi Editorial Board"
            boardContent="Creative minds that pen down impelling thoughts, weaving words into stories. Whether it be reaching the masses through their poetic captions on social media or the thought provoking content you see in our magazines"
            // head="Member"
            headName="Aishwarya Sahu"
            // member="Member"
            member1Name="Ashutosh Yadav "
            member2Name="Nidhi Tiwari "
            member3Name="Priyanshu Kashyap"
            member4Name="Shivam Sati"
            // member5Name="Ratnesh Singh Tandon"
            member5Name="Vidhi Agrawal"
            // member7Name="Lakhnee Sahu"
            // M6={RatneshSingh}
            M2={AshutoshYadav}
            M1={AishwaryaSahu}
            M5={ShivamSati}
            // M8={LakhniSahu}
            M4={PiyanshuKashyap}
            M3={NidhiTiwari}
            M6={VidhiAgrawal}
          />
        )}
        {active === "FourthCard" && (
          <Team
            board="English Editorial Board"
            boardContent="Creative minds that pen down impelling thoughts, weaving words into stories. Whether it be reaching the masses through their poetic captions on social media or the thought provoking content you see in our magazines"
            // head="Member"
            headName="Gautami Deshmukh"
            // member="Member"
            member1Name="Himani Chaurasia"
            member5Name="Shubhangi Bajpayee"
            member3Name="Prakhar Gupta"
            member4Name="Sakshi Jha"
            member2Name="Nikita Dubey"
            member7Name="Shubhshri Gupta"
            M3={NIKITADUBEY}
            M5={SAKSHIJHA}
            M6={SHUBHANGIBAJPAYEE}
            M8={SHUBHSHRIGUPTA}
            M1={GAUTAMIDESHMUKH}
            M2={HIMANICHAURASIA}
            M4={PRAKHARGUPTA}
          />
        )}
        {active === "FifthCard" && (
          <Team
            board="Graphic Design Board"
            boardContent="Designing posters with perfect balance of styling and info is their forte. From crafting UDAAN tshirt to logos, they transform ideas into visuals entailing the digital canvas "
            // head="Board Head"
            headName="Lisha Gupta"
            // member="Member"
            member1Name="Om gupta "
            member2Name="Parshant Yadav "
            member3Name="Ritika Ahirwar"
            member4Name="Sheetal"
            // member5Name="Nikita Jha"
            //member6Name="Om Gupta"
            // M6={Nikitajha}
            // M7={ChittethiHarshwardhan}
            M2={Omgupta}
            M3={Prashantyadav}
            M5={Sheetal}
            M1={Lishagupta}
            M4={RitikaAhirwar}
          />
        )}
        {active === "SixthCard" && (
          <Team
            board="Marketing Board"
            boardContent="The backbone of UDAAN, it is the marketing board that coordinates with all the seven boards of the magazine and ensures proper functioning. From handling our social media along with resolving last minute hiccups and planning our future course, the marketing board aces it with finesse."
            // head="Board Head"
            headName="Akhil Patel "
            // member="Member"
            member1Name="Alankrita Mishra"
            member2Name="Ashish Pathak "
            member3Name="Rahul Patel"
            member4Name="Reshabh Yadu"
            member5Name="Suman Srivastav"
            member7Name="Umang Verma"
            //member7Name="Rosy Minj"
            M1={AKHILPATEL}
            M6={SUMANSHRIWAS}
            M8={UMANGVERMA}
            M2={ALANKRITAMISHRA}
            // M8={RosyMinj}
            M4={RAHULPATEL}
            M3={ASHISH}
            M5={RESHABH}
          />
        )}
        {active === "SeventhCard" && (
          <Team
            board="Photography Board"
            boardContent="Capturing the intricacies and niceties around us, they are the eyes of UDAAN. The photographers are always working from the shadows. Bringing to the fore the ones who are the reason behind every smile captured. "
            // head="Board Head"
            headName="Aniket Manikpuri "
            // member="Member"
            member1Name="Janvi Gawade "
            //member5Name="Apurva Azad"
            //member6Name="Lovina Ranjan"
            member4Name="Shantanu Vaishnav"
            member2Name="Niti Kumari"
            member3Name="Om Pandey"
            //member7Name="Shubhank Sonkar"
            M3={NITIKUMARI}
            // M7={LOVINARANJAN}
            // M1={APURVAAZAD}
            M5={SHANTANUVAISHNAV}
            //M8={SHUBHANKSONKAR}
            M1={ANIKETMANIKPURI}
            M4={OMPANDEY}
            M2={JANVIGAWADE}
            //M6={APURVAAZAD}
          />
        )}
      </div>
      <Contact />
      <Footer />
    </div>
  );
}



export default TeamLanding;
