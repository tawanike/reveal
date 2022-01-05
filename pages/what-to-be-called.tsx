import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const WhatToBeCalled: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState<any>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(value)
    const payload = {
      question: "nickname",
      answer: value
    }
    const response = await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then((response: any) => {
        console.log(response.json());
        router.push('/guess-the-gender')
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className={styles.containerNickname} >
      <img className={styles.image} src="https://res.cloudinary.com/mmogomedia/image/upload/v1641410141/reveal/Blue_Shapes_Gender_Reveal_Announcement_1080_x_2220_px_pxfnlh.gif" />
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <input
            className={styles.field} 
            placeholder="Type here..."
            value={value} 
            onChange={(e)=> { setValue(e.target.value) }}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>NEXT</button>
        </div>  
        </form>    
    </div>
  )
}

export default WhatToBeCalled;
