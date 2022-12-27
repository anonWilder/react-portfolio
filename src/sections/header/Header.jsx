import HeaderImage from '../../assets/HeaderPhoto.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className='container header__container'>
        <div className='header__profile'>
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Egbonu Kenechukwu</h3>
        <p>You are clicks away from my awesome technical writing services plus industry standard dream website or web app of yours. Send me the details of your project for a modern, mobile responsive, highly performant website today!
          P.s: I also accept tutorship roles for Physics, Mathematics, Computer Science and Fron-End Engineering courses. Thanks
        </p>
        <div className='header__cta'>
          <a href="#contact" className='btn primary'>Lets Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel='noopener noreferer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header