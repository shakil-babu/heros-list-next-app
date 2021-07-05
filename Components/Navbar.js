import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
    return (
        <>
            <nav className='container'>
                <div className={styles.navarea}>
                    <Link href='/'><a>Our Heros</a></Link>
                    <div className={styles.navItems}>
                        <Link href='/'><a>Home</a></Link>
                        <Link href='/about'><a>About</a></Link>
                        <Link href='/heros'><a>Heros</a></Link>
                    </div>
                </div>
            </nav>   
        </>
    )
}

export default Navbar
