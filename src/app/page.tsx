import { Button, Card } from 'antd';
import "./style.css"
import {workExperienceData} from './component/experience';
import { projects } from './component/experience';
import { Personal } from './component/experience';
import { Skill } from './component/experience';
import Image from 'next/image';





export default function Home() {
  return (
    <div className='main-align' >
      <div>
         <Card className='aside-info' style={{
        width: "400px",
        padding: "1.5rem",

        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}>
        <div className='profile-align'>
        <div>
        <Image src="/my.jpg" alt='heloo' width={150} height={150} className="profile-image"></Image>
        </div>
        <div className='nama-align'>
        <h1 style={{ fontSize: "20px", fontWeight: "bold"  }} >Harshit Shrivastava</h1>
        <h2 style={{ marginTop: "-2%", fontWeight: 400, color: "gray" }}>Full-Stack Developer</h2>
        </div>
        </div>
        <h5 style={{ fontSize: "15px", paddingTop: "10px", color: "rgb(74, 70, 70)" }}>Full-Stack Developer focused on building scalable, user-centric web applications that drive innovation and deliver measurable impact. With expertise in front-end design, back-end systems, and modern frameworks, I create digital solutions aligned with business goals</h5>
        <a href='/FinalResume.pdf' download="FinalResume.pdf" > <Button type='primary' style={{ width: "100%", margin: "1rem 0", marginTop: "2rem",backgroundColor:"black" }}>Download Resume</Button></a>
        
        
        <div style={{display:"flex" , flexDirection:"column"
        }}>
         {Personal.map((Personal,index)=>(
          <div key={index} style={{display:"flex", marginTop:"10px"}}>
            <Image src={Personal.image} width={25} height={10} alt={Personal.title}></Image>
            <a href={Personal.link} style={{marginLeft:"5px", fontWeight:489 }}>{Personal.title}</a>
          </div>
         ))}
        </div>
        
      </Card>
      <Card style={{maxWidth:"400px" ,marginTop:"20px"}}>
        <div style={{fontSize:"24px" , fontWeight:"bolder" , marginBottom:"20px" }}>Skills</div>
        <div style={{display:"flex" , flexWrap:"wrap" ,gap:"10px",padding:"10px", justifyContent:"flex-start"}} >
           {Skill.map((Skill,index)=>(
          <div key={index} style={{border:"1px solid black" , backgroundColor:"black" , borderRadius:"2rem" , padding:"3px 8px 3px 8px", color:"white"}} >{Skill.title}</div>
        ))}
        </div>
       
      </Card>
      </div>

     

      <div>

        <div style={{ flex: 1, maxWidth: "800px" }}>
          <Card className='About-info' style={{
            padding: "1.5rem",
            marginBottom: "1.5rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}>
            <h1 style={{ fontSize: "26px", fontWeight: "bolder" , marginBottom:"20px" }}>About me</h1>
            <p style={{ fontSize: "16px", color: "rgb(74, 70, 70)" }}>Full-Stack Developer passionate about creating intuitive and scalable digital solutions that captivate users and drive growth. As <span style={{fontWeight:"bold"}}>Co-founder</span> and <span style={{fontWeight:"bold"}}>Frontend Developer</span>  at <span style={{fontWeight:"bold"}}>CRAVEFEED</span>, a food enthusiasts app, I specialize in modern web technologies and efficient problem-solving through a strong foundation in <span>DSA</span>. <span style={{fontWeight:"bold"}}> Winner of the RideHack Phase 2 Hackathon</span> , I deliver user-centric designs that help brands thrive in an evolving digital landscape.</p>

          </Card>
          <div className='feature-info'>
            <h1 style={{ fontSize: "18px", fontWeight: "bolder" }}>Featured Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          style={{display:"flex" , flexDirection:"column" , justifyContent:"space-between"}}
        > <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
          </div>
          <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>
          <p className="text-sm font-medium text-blue-600">{project.stack}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            View Project →
          </a></div>
        </div>
      ))}
    </div>
          </div>
        </div>

      
<div className="experience-info">
          <div style={{ fontSize: "18px", fontWeight: "bolder" }}>Work Experience</div>
          
            <Card
              
              style={{
                
                marginBottom: "1.5rem",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                maxWidth: "800px",
                marginTop:"20px"
              }}
            > 
            <div>
            {workExperienceData.map((experience, index) => (
              <div key={index} style={{marginBottom:"50px"}}>
                <div style={{display:"flex" }}>
                <Image src={experience.image} width={65} height={40} alt={experience.title} ></Image>
                <div style={{marginLeft:"15px"}}>
                <h1 style={{ fontSize: "16px", fontWeight: 700 }}>{experience.title}</h1>
                <h5 style={{ fontSize: "14px", fontWeight: 500 }}>{experience.company}</h5>
                <p style={{fontSize:"12px" , fontWeight:500}}>{experience.date}</p>
                </div>
                </div>
                <div>
                  
                  <p
                    style={{
                      fontSize: "16px",
                      color: "rgb(74, 70, 70)",
                      marginTop: "20px",
                      marginBottom: "24px",
                    }}
                  >
                    {experience.description}
                  </p>
                </div>
              </div> ))}
            </div>
             
            </Card>
         
        </div>
      </div>
      </div>

    
  );
}
