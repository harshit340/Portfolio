import { Button, Card } from 'antd';


export default function Home() {
  return (
    <div style={{ display: "flex" , justifyContent:"center" }}>
      <div>
        <Card style={{ width: 400, border: "0.5px solid grey" }}>
          <div>image</div>
          <h1>Harshit Shrivastava</h1>
          <h2>Software Developer</h2>
          <h5>Full-Stack Developer dedicated to creating scalable, user-focused web applications that drive innovation and growth. Combining expertise in front-end design, back-end systems, and modern frameworks, I craft digital experiences that align with business goals and deliver measurable impact.</h5>
          <Button type='primary'>Contact Me</Button>
          <div>----------------------</div>
          <div>linkedin</div>
          <div>Github</div>
          <div>leetcode</div>
        </Card></div>
      <div>

        <div>
          <Card style={{ width: 600, height: 300 }} >
            <h1>About me</h1>
            <p>Full-Stack Developer passionate about building intuitive, scalable digital solutions that captivate users and drive measurable growth. As the <span>Co-founder</span>  and <span>Frontend Developer </span> at <span>CRAVEFEED</span>, an innovative app for food enthusiasts, With a strong foundation in modern web technologies and a deep commitment to mastering (DSA), I excel at solving complex problems efficiently, ensuring robust and optimized solutions. I strive to deliver user-centric designs that help brands stand out in an ever-evolving digital landscape.</p>
            
          </Card>
          <div>
            <h1>Feature Project</h1>
            
          </div>
        </div>

        <div>
          <div>Work Experience</div>
          <Card>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>

      </div>

    </div>
  );
}
