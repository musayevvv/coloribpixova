import React from 'react'
import styles from './Someword.module.css'


const Someword = () => {
    return (
        <main>
            <div className={styles.container}>
                <section className={styles.someSection}>
                    <div className={styles.title}>
                        <h2>Some words from our clients</h2>
                        <span>We don't like to brag, others do it for us.</span>
                    </div>
                    <div className={styles.someimage}></div>
                    <div className={styles.word}>
                        <p>Working with Pixova has been an experience for a lifetime. I strongly reccommend these guys for their awesome support. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat eleifend convallis.</p>
                        <span>Katie Parry - Hooli</span>
                    </div>
                </section>
                <section className={styles.latestNews}>
                    <div className={styles.latestTitle}>
                        <h2>Latest news</h2>
                        <span>Straight from our blog</span>
                    </div>

                    <div className={styles.imageBox}>
                        <div className={styles.imageDiv}>
                            <img src="https://149842022.v2.pressablecdn.com/pixova-lite/wp-content/uploads/sites/65/2017/09/scott-webb-51542-250x250.jpg" alt="" />
                            <span>September 15, 2017</span>
                            <h2>Aliquam mauris justo, sagittis vitae lacus non</h2>
                            <p>Aliquam mauris justo, sagittis vitae lacus non, vestibulum sollicitudin nisl.</p>
                        </div>
                        <div className={styles.imageDiv}>
                            <img src="https://149842022.v2.pressablecdn.com/pixova-lite/wp-content/uploads/sites/65/2017/09/matt-barrett-339981-250x250.jpg" alt="" />
                            <span>September 15, 2017</span>
                            <h2>Lorem ipsum dolor sit amet</h2>
                            <p>Suspendisse varius nulla vel mi fringilla, a pharetra lectus tempus.</p>
                        </div>
                    </div>
                </section>


            </div>
        </main>
    )
}

export default Someword