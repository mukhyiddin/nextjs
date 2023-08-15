'use client';

import Image from 'next/image'
import styles from '../page.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios';


export default function Tes() {
  const [getSum,setSum]= useState(1)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const a = setSum('s')

  const abc = () =>{
    setSum(getSum + 10)
  }

  // useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=670c2dba');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    // fetchData();
  // }, []);

  console.log('sdw',data);

  return (
    <main className={styles.main}>
      <div >
        <p>
          &nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="/"
            rel="noopener noreferrer"
          >
            <h1 className='mt-10'>
              SDWD
            </h1>
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div>
        <button onClick={abc}>
          click me !!
        </button>
        ___ {getSum}
      </div>
    </main>
  )
}