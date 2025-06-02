import React from 'react';
import styles from './builder.module.css'; // Import the CSS module

const Builder = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Builder Page</h1>
            <p className={styles.description}>
                Welcome to the portfolio builder. Here you can create and customize your developer portfolio.
            </p>
            <div className={styles.formContainer}>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Name:</label>
                        <input type="text" id="name" name="name" className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="bio" className={styles.label}>Bio:</label>
                        <textarea id="bio" name="bio" className={styles.textarea}></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Create Your Portfolio
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Builder;