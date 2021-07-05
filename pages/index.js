import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head'
const Home = () => {
  return(
    <>
    <Head>
      <title>Our Heros | Home</title>
    </Head>
    <div className='container'>
      <section className={styles.homeSection}>
        <h1>Our <span>Awesome</span> heros</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi assumenda officia cupiditate officiis, maiores obcaecati dignissimos qui magnam cumque asperiores dolorem saepe recusandae fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et?</p>
        <Link href='/heros'><a>Meet with heros</a></Link>
      </section>  
    </div>
    </>
  )
}

export default Home;