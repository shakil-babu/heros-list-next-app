import Link from 'next/link';
import styles from '../../styles/Home.module.css';

import Head from 'next/head';
const index = () => {
    return (
        <>
        <Head>
            <title>Our Heros | About</title>
        </Head>
        <div className='container'>
            <section className={styles.homeSection}>
                <h1>know <span>About</span> us.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi assumenda officia cupiditate officiis, maiores obcaecati dignissimos qui magnam cumque asperiores dolorem saepe recusandae fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, et?</p>
                <Link href='/heros'><a>Click here</a></Link>
            </section>
        </div>
        </>
    )
}

export default index
