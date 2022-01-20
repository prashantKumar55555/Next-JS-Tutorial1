import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();
  const handleClick = ()=>{
    router.push('/product');
  }
  return (
    <>Testing</>
    <div className={styles.container}>
  <h1>Welcome to HomePage</h1>  
  <Link href="/blog">
  <a>Blog</a>
  </Link> <br/>
  <Link href="/product">
    <a>ProductList</a>
  </Link><br/>
  <button onClick={handleClick}>Place Order</button>
    </div>
  )
}
