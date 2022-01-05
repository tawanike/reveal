import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ItsABoy: NextPage = () => {
  return (
    <div className={styles.containerBoy} >
      <video className={styles.video} controls autoPlay>
        <source src="https://res.cloudinary.com/mmogomedia/video/upload/v1641412511/reveal/Blue_Stars_Watercolor_Boy_Baby_Shower_Animated_Square_Invitation_1_1_jfiesv.mp4" type="video/mp4"/>
      </video>
    </div>
  )
}

export default ItsABoy;
