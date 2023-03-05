import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/Cherry.png'
import Pizza1 from '../assets/Pizza1.jpg'
import HeroImage from '../assets/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'

const Hero = () => {
  return (
   <div className={css.container}>

    <div className={css.left}>
    <div className={css.cherryDiv}> 
        <span>More than Faster</span> 
        <Image src={Cherry} alt="" width={40} height={25}/> 
    </div>

    <div className={css.heroText}>
        <span>Be The Fastest</span>
        <span>In Delivering</span>
        <span>Your <span style={{color: "var(--themeRed)"}}>Pizza</span></span>
    </div>
    <span className={css.miniText}>
        Our Mission is to filling your tummy with delicious food and with fast and free delivery
    </span>

</div>
    
    <div className={css.right}>
        <div className={css.imgContainer}>
            <Image src={HeroImage} alt="" layout='intrinsic'/>
        </div>
        <div className={css.ContactUs}> 
            <span><a href="mailto:pavansaiganesh777@gmail.com">Contact us</a></span> 
            <div>
            <UilPhone color='white' /> 
            </div>
        </div>
        <div className={css.Pizza}> 
            <div> 
                <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic"/> 
            </div> 
        <div className={css.details}> 
            <span>Italian Pizza</span> 
            <span><span style={{color: "var(--themeRed)"}}>$</span> 7.49</span> 
        </div>
        </div>
    </div>
   </div>
  )
}

export default Hero