import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container} >
      <img className={styles.image} src="https://res.cloudinary.com/mmogomedia/image/upload/v1641403268/reveal/welcome.png" />
      <div className={styles.buttonContainer}>
        <a href="/what-to-be-called" className={styles.button}>NEXT</a>
      </div>
      
    </div>
  )
}

export default Home;
