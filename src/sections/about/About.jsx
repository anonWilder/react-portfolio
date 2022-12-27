import AboutImage from '../../assets/AboutPhoto.jpg'
import CV from "../../assets/kenCv.docx";
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
               ))
            }
          </div>
          <p>
            Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, im always motivated to do more!
          </p>
          <p>
          Hi there! My name is Egbonu Kenechukwu and I am a multi-talented individual with a diverse range of skills and interests. I am currently a front-end developer for RESBROTHERx( 🌍 ) and a technical writer✍, as well as a science teacher👨‍🔬 and a software engineering student👨‍💻 at ALX_AFRICA. With a strong background in computer science and a passion for creating user-friendly and visually appealing websites, I am dedicated to continuously learning and improving my skills as a developer. Thank you for visiting my portfolio Website, and I hope you find my projects to be both informative and enjoyable.
          </p>
          <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About