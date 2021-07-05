
export const getStaticProps =async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props:{data}
    }
}

import styles from '../../styles/Heros.module.css';
import Link from 'next/link';
import Head from 'next/head';
const index = ({data}) => {
    return (
        <>
        <Head>
            <title>Our Heros | Heros</title>
        </Head>
        <div className='container'>
            <section className={styles.herosSection}>
                <h3>OUR HEROS</h3>
                <div className={styles.herosGrid}>
                {
                        data.map((hero) => {
                            return(
                                <>
                                    <Link href={`/heros/${hero.id}`}>
                                        <div className={styles.heroBox} key={hero.id}>
                                            <h4>{hero.name}</h4>
                                        </div>
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </section> 
        </div>
        </>
    )
}

export default index
