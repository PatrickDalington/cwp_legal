/* eslint-disable react/no-unescaped-entities */
'use client';

import styles from './aio.module.css';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AiO Bible Privacy Policy</title>
        <meta name="description" content="Privacy Policy for AiO Bible" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.h1}>Privacy Policy</h1>
        <p className={styles.p}>
          <em>Effective Date: June 15, 2025</em>
        </p>

        <section>
          <h2 className={styles.h2}>Introduction</h2>
          <p className={styles.p}>
            AiO Bible ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application, AiO Bible.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Information We Collect</h2>
          <p className={styles.p}>
            We may collect the following types of information:
          </p>
          <ul className={styles.p}>
            <li><strong>Personal Information (Optional):</strong> If you choose to sign in or create an account, we may collect your name, email, and profile picture.</li>
            <li><strong>Usage Data:</strong> We may collect non-personal usage data such as the chapters or verses you read, favorited, or shared.</li>
            <li><strong>Device Data:</strong> We may collect anonymized technical information about your device such as operating system version and screen size for performance analytics.</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>How We Use Your Information</h2>
          <ul className={styles.p}>
            <li>Improve app performance and user experience</li>
            <li>Save your favorite verses and settings</li>
            <li>Allow sharing, downloading, and viewing features</li>
            <li>Provide explanations, translations, and biblical meanings (via internal or third-party APIs)</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Data Sharing</h2>
          <p className={styles.p}>
            We do not sell your data. We only share information when:
          </p>
          <ul className={styles.p}>
            <li>Required by law</li>
            <li>Necessary to provide certain app functionalities (e.g., cloud backups, AI services)</li>
            <li>You explicitly consent (e.g., sharing content)</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Data Security</h2>
          <p className={styles.p}>
            We use encryption and secure protocols to protect your data. However, no system is completely secure, so we encourage users to use the app responsibly.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Children's Privacy</h2>
          <p className={styles.p}>
            AiO Bible is not directed at children under the age of 13. We do not knowingly collect personal data from children.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Third-Party Services</h2>
          <p className={styles.p}>
            Some features may rely on third-party services such as Firebase or OpenAI. These services have their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Your Rights</h2>
          <ul className={styles.p}>
            <li>Delete your account and data</li>
            <li>Opt-out of data collection (where available)</li>
            <li>Contact us with any privacy concerns</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Contact Us</h2>
          <p className={styles.p}>
            If you have questions about this Privacy Policy, contact us at:<br />
            <strong>Email: aiobible1@gmail.com</strong>
          </p>
        </section>
      </main>
    </div>
  );
}
