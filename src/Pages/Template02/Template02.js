import React, { useState } from "react";
import styles from "./Template02.module.css";
import DragAndDropArea from "../../Components/DragAndDropArea/DragAndDropArea";
import { randomIdGenerator } from "../../Utils/randomIdGenerator";


// Everything is into small components because we need to make them drag and drop
function BasicInfo({data}) {
    const {name , title} = data.basicInfo;
    const {phone , email , website , linkedin} = data.contactDetails;
  return (
    <div className={`${styles.resume_item} ${styles.resume_info}`}>
      <div  className={`${styles.title}`}>
        <p className={`${styles.bold}`}>{name}</p>
        <p className={`${styles.regular}`}>{title}</p>
      </div>
      <ul>
        
        <li>
      
          <div   className={`${styles.data}`}>{phone}</div>
        </li>
        <li>
        
          <div   className={`${styles.data}`}>{email}</div>
        </li>
        <li>
         
          <div   className={`${styles.data}`}><a href={website}>{website}</a></div>
        </li>   <li>
         
          <div   className={`${styles.data}`}><a href={linkedin}>{linkedin}</a></div>
        </li>
      </ul>
    </div>
  );
}

function Skills({data}) {
    const {skills} = data;
  return (
    <div  className={`${styles.resume_item} ${styles.resume_skills}`}>
      <div  className={`${styles.title}`}>
        <p   className={`${styles.bold}`}>skill's</p>
      </div>
      <ul>
        {skills.map(({skill , id , skillPercentage})=>    <li key={id}>
          <div   className={`${styles.skill_name}`}>{skill}</div>
          <div  className={`${styles.skill_progress}`}>
            <span style={{ width: `${skillPercentage}%` }}></span>
          </div>
          <div className={`${styles.skill_per}`}>{skillPercentage}%</div>
        </li> )}
      </ul>
    </div> 
  );
}
function Achievements({data}) {

    const {achievements}= data;
  return (
    <div  className={`${styles.resume_item} ${styles.resume_social}`}>
      <div className={`${styles.title}`}>
        <p  className={`${styles.bold}`}>Achievements</p>
      </div>
      <ul>
        {achievements.map(({achievement,id})=><li key={id}>
          <div  className={`${styles.data}`}>
            <p>{achievement}</p>
          </div>
        </li>)}  
      </ul>
    </div>
  );
}
function About({data}) {

    const {summary}= data.basicInfo;
  return (
    <div className={`${styles.resume_item} ${styles.resume_about}`}>
      <div  className={`${styles.title}`}>
        <p  className={`${styles.bold}`}>About us</p>
      </div>
      <p>{summary}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        illo fugit officiis distinctio culpa officia totam atque exercitationem
        inventore repudiandae?
      </p>
    </div>
  );
}
function WorkExperience({data}) {
    const {workExperience}= data;
  return (
    <div  className={`${styles.resume_item} ${styles.resume_work}`}>
      <div  className={`${styles.title}`}>
        <p className={`${styles.bold}`}>Work Experience</p>
      </div>
      <ul>
      {
              workExperience.map(({companyName,description ,startDate,endDate, id})=> <li key={id}>
              <div className={`${styles.date}`}>{startDate} - {endDate}</div>
              <div className={`${styles.info}`}>
                <p className={`${styles.semi_bold}`}>{companyName}</p>
                <p>
                {description}
                </p>
              </div>
            </li>  )
            }
       
      
      </ul>
    </div>
  );
}
function Education({data}) {
    const {education} = data;
  return (
    <div  className={`${styles.resume_item} ${styles.resume_education}`}>
      <div className={`${styles.title}`}>
        <p className={`${styles.bold}`}>Education</p>
      </div>
      <ul>
      {
      education.map(({title ,institute, startDate , endDate})=> <li>
      <div className={`${styles.date}`}>{startDate} - {endDate}</div>
      <div className={`${styles.info}`}>
        <p className={`${styles.semi_bold}`}>{title} ({institute})</p>
        
      </div>
    </li>)
    }
       
      </ul>
    </div>
  );
}

const Template02 = ({resume}) => {
    const { profile  ,gender} = resume.basicInfo;
function getProfile(){
  if(profile){
    return profile ;
  }else {
    return gender === "male" ? "/Images/male.png" : "/Images/female.png"
  }
}
  const [leftSideCols, setLeftSideCols] = useState([
    { id: randomIdGenerator(), component: <BasicInfo data={resume}></BasicInfo> },
    { id: randomIdGenerator(), component: <Skills data={resume}></Skills> },
    { id: randomIdGenerator(), component: <Achievements data={resume}></Achievements> },
  ]);  
  const [rightSideCols, setRightSideCols] = useState([
    { id: randomIdGenerator(), component: <About data={resume}></About> },
    { id: randomIdGenerator(), component: <WorkExperience data={resume}></WorkExperience> },
    { id: randomIdGenerator(), component: <Education data={resume}></Education> },
  ]);
  return (
    <>
      <div className={`${styles.resume}`}>
        <div className={`${styles.resume_left}`}>
          <div className={`${styles.resume_profile}`}>
            <img src={getProfile()} alt="profile_pic" />
          </div>
          <div className={`${styles.resume_content}`}>
         <DragAndDropArea droppableId={randomIdGenerator()} itemsArray={leftSideCols} setItemsArray={setLeftSideCols}></DragAndDropArea>

        
          </div>
        </div>
        <div className={`${styles.resume_right}`}>
        

         <DragAndDropArea droppableId={randomIdGenerator()} itemsArray={rightSideCols} setItemsArray={setRightSideCols}></DragAndDropArea>

        </div>
      </div>
    </>
  );
};

export default Template02;
