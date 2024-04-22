import  {useState} from 'react'; 
import  arrow from './../../assets/images/icons/arrowUp.svg'
import s from './ScrollButton.module.scss'; 
  
const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <button className={s.up_btn} onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}} > 
     <img src={arrow} alt="Наверх" />
    </button> 
  ); 
} 
export default ScrollButton