import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container} >
      <img className={styles.image} src="https://res.cloudinary.com/mmogomedia/image/upload/v1641403268/reveal/welcome.png" />
      <div className={styles.buttonContainer}>
        <Link href="/what-to-be-called">
          <a className={styles.button}>NEXT</a></Link>
      </div>
      
    </div>
  )
}

export default Home;
