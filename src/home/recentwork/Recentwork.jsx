import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/reducer/productSlice';
import styles from './Recentwork.module.css';

const Recentwork = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Recent works</h2>
            <div className={styles.line}></div>
            <p className={styles.subtitle}>It's show and tell time.</p>

            <div className={styles.grid}>
                {products.slice(0, 4).map((product) => (
                    <div key={product.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src={product.image} alt={product.title} className={styles.image} />
                            <div className={styles.overlay}>
                                <button className={styles.seeProject}>
                                    SEE PROJECT
                                </button>
                            </div>
                        </div>
                        <div className={styles.brand}>{product.category}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Recentwork;