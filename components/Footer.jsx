import {UilGithub,UilInstagram} from '@iconscout/react-unicons'
import css from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={css.container}>
        <span>©2023 All rights reserved.</span>
        <div className={css.social}>
            <UilGithub size={45}/>
            <UilInstagram size={45}/>
        </div>
    </div>
  )
}

export default Footer