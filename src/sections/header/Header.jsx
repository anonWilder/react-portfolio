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
        <p>You are clicks away from building your dream website or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!
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