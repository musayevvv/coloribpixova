import React from 'react'
import styles from './Navbar.module.css'
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.left}>PIXOVA LITE</div>
                <div className={styles.right}>
                    <div className={styles.pages}>
                        <span>ABOUT</span>
                        <span>RECENT WORKS</span>
                        <span>TESTIMONIALS</span>
                        <span>TEAM</span>
                        <span>NEWS</span>
                        <span>CONTACT</span>
                    </div>
                    <div className={styles.hamburger}><FaBars /></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar