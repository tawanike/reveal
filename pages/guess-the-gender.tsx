import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

const GuessTheGender: NextPage = () => {
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
        router.push('/its-a-boy')
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className={styles.containerGuess} >
      <img className={styles.image} src="https://res.cloudinary.com/mmogomedia/image/upload/v1641412046/reveal/Baby_Pink_and_Blyue_Gender_Reveal_Teaser_Instagram_Story_Template_1080_x_2220_px_1080_x_2300_px_1080_x_2320_px_kuqlng.gif" />
      <div className={styles.buttonContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <input 
              className={styles.field}
              placeholder="What do you think the gender is?"
              value={value} 
              onChange={(e)=> { setValue(e.target.value) }}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>NEXT</button>
          </div>
        </form>  
        </div>   
    </div>
  )
}

export default GuessTheGender;
