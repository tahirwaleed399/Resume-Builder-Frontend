import React, { useState } from "react";
import styles from "./Template01.module.css";

import DragAndDropArea from "../../Components/DragAndDropArea/DragAndDropArea";
import { randomIdGenerator } from "../../Utils/randomIdGenerator";


// Everything is into small components because we need to make them drag and drop
function Achievements({data}) {
  const {achievements} =data;
  return (
    <div className={`${styles.box}`}>
      <p className={`${styles.head}`}>awards</p>
      {
        achievements.map(({achievement , id})=><p key={id} className={`${styles.gray_text}`}>{achievement}</p>)
      }
      
    </div>
  );
}
function Skills({data}) {
  const {skills} = data;
  return (
    <div className={`${styles.box}`}>
      <p className={`${styles.head}`}>my skills</p>
      <ul className={`${styles.skills}`}>
        {
          skills.map(({skill,id})=><li key={id}><span>{skill}</span></li>)
        }
      </ul>
    </div>
  );
}
function ContactDetails({data}) {
  const {phone , email , website , linkedin} = data.contactDetails ;
  return (
    <div className={`${styles.box}`}>
      <p className={`${styles.head}`}>Contact</p>
      <p className={`${styles.gray_text}`}>
        <i className="fa fa-phone" aria-hidden="true"></i> &nbsp;&nbsp;{phone}
      </p>
      <p className={`${styles.gray_text}`}>
        <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
        &nbsp;&nbsp;{email}
      </p>
      <p className={`${styles.gray_text}`}>
        <i className="fa fa-home" aria-hidden="true"></i> &nbsp;&nbsp;<a href={linkedin}>linkedin</a>
      </p> 
      <p className={`${styles.gray_text}`}>
        <i className="fa fa-home" aria-hidden="true"></i> &nbsp;&nbsp;<a href={website}>Website</a>
      </p>
    </div>
  );
}

function Profile({data}){
  const {summary} = data.basicInfo;
    return (<>
    <div className={`${styles.box}`}>
    <p className={`${styles.head}`}>profile</p>
            <p className={`${styles.gray_text}`} style={{ fontSize: "14px" }}>
              {summary}
            </p>
    </div>
    </>)
}

function Experience({data}){
  const {workExperience}= data;
    return (<>
    <div className={`${styles.box}`}>
    <p className={`${styles.head}`}>EXPERIENCE</p>
            {
              workExperience.map(({companyName,description ,startDate,endDate, id})=><>
               <p>{companyName} ({startDate} - {endDate})</p>
            <p className={`${styles.para_text}`}>
             {description}54454
            </p></>)
            }

            
    </div>
    </>)
}
function Education({data}){
  const {education} = data;
    return (<>
    <div className={`${styles.box}`}>
    <p className={`${styles.head}`}>Education</p>
    {
      education.map(({title , startDate , endDate})=> <p className={`${styles.para_text}`}>{title} ({startDate} - {endDate})</p>)
    }
           
           
    </div>
    </>)
}

const Template01 = ({resume}) => {
const {name , profile , title ,gender} = resume.basicInfo;
// getting profile url on basis of gender 
function getProfile(){
  if(profile){
    return profile ;
  }else {
    return gender === "male" ? "/Images/male.png" : "/Images/female.png"
  }
}
  let [leftSideCol, setleftSideCol] = useState([
    {
      component: <ContactDetails data={resume} />,
      id: randomIdGenerator(),
    },
    {
      component: <Skills  data={resume}/>,
      id: randomIdGenerator(),
    },
    {
      component: <Achievements data={resume}/>,
      id: randomIdGenerator(),
    },
  ]);  
  let [rightMainSideCol, setRightMainSideCol] = useState([
    {
      component: <Profile  data={resume} />,
      id: randomIdGenerator(),
    },
    {
      component: <Experience data={resume} />,
      id: randomIdGenerator(),
    },
    {
      component: <Education data={resume} />,
      id: randomIdGenerator(),
    },
  ]);
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.top_section}`}>
        <img src={getProfile()} className={`${styles.profile}`} alt="User PRofile"/>
        <p className={`${styles.name}`}>
          {name}
        </p>
        <p className={`${styles.role}`}>{title}</p>
      </div>

      <main className={`${styles.cover}`}>
        <div className={`${styles.left_side_cols}`}>
          <div className={`${styles.content_box}`}>
      
         <DragAndDropArea droppableId={randomIdGenerator()} itemsArray={leftSideCol} setItemsArray={setleftSideCol} ></DragAndDropArea>

          </div>
        </div>

        <div className={`${styles.line}`}></div>
        <div className={`${styles.main_content}`}>
          <div className={`${styles.content_box}`}>
         <DragAndDropArea droppableId={randomIdGenerator()} itemsArray={rightMainSideCol} setItemsArray={setRightMainSideCol} ></DragAndDropArea>
      
          </div>
        </div>
      </main>
    </div>
  );
};

export default Template01;
