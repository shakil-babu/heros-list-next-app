import styles from '../../styles/HeroDetails.module.css'
import Head from 'next/head';


export const getStaticPaths =async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map((hero) => {
        return {
            params: {id: hero.id.toString()}
        }
    });
    
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps =async(context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json();

    return {
        props:{hero: data}
    }
}



const Details = ({hero}) => {
    console.log(hero);
    return (
        <>
        <Head>
            <title>Our Heros | {hero.name}</title>
        </Head>
            <section className={styles.detailsArea}>
                <div className={styles.name}>
                    <h4>About {hero.name}</h4>
                </div>

                <div className={styles.info}>
                    <h3>{hero.name}({hero.username})</h3>
                    <h5>{hero.email}</h5>
                    <h5>{hero.website}</h5>
                    <h5>{hero.address.city}</h5>

                </div>
            </section>
        </>
    )
}

export default Details
