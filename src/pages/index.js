import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// Remove HomepageFeatures import since we're removing that section
// import HomepageFeatures from '../components/HomepageFeatures';

// Remove image imports and use inline placeholder colors instead

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* Removed insurance types from here */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="API Documentation for Shory Insurance Brokers">
      <HomepageHeader />
      <main>
        <div className={styles.insuranceCards}>
          <div className={styles.cardContainer}>
            <Link to="/docs/health-insurance" className={styles.cardLink}>
              <div className={clsx(styles.insuranceCard, "insurance-card")}>
                <div className={styles.placeholderImage} style={{backgroundColor: "#A5D6A7"}}>
                  <span>Health</span>
                </div>
                <h3>Health Insurance</h3>
                <p>Comprehensive health coverage for you and your family</p>
              </div>
            </Link>
            <Link to="/docs/motor-insurance" className={styles.cardLink}>
              <div className={clsx(styles.insuranceCard, "insurance-card")}>
                <div className={styles.placeholderImage} style={{backgroundColor: "#90CAF9"}}>
                  <span>Motor</span>
                </div>
                <h3>Motor Insurance</h3>
                <p>Protection for your vehicles against accidents and damage</p>
              </div>
            </Link>
            <Link to="/docs/home-insurance" className={styles.cardLink}>
              <div className={clsx(styles.insuranceCard, "insurance-card")}>
                <div className={styles.placeholderImage} style={{backgroundColor: "#FFCC80"}}>
                  <span>Home</span>
                </div>
                <h3>Home Insurance</h3>
                <p>Secure your property and belongings</p>
              </div>
            </Link>
            <Link to="/docs/pet-insurance" className={styles.cardLink}>
              <div className={clsx(styles.insuranceCard, "insurance-card")}>
                <div className={styles.placeholderImage} style={{backgroundColor: "#CE93D8"}}>
                  <span>Pet</span>
                </div>
                <h3>Pet Insurance</h3>
                <p>Healthcare coverage for your beloved pets</p>
              </div>
            </Link>
          </div>
        </div>
        {/* Removed HomepageFeatures section */}
      </main>
    </Layout>
  );
}
