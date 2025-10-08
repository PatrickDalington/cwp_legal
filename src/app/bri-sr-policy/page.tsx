/* eslint-disable react/no-unescaped-entities */
'use client';

import styles from './brisr.module.css';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bri Screen Recorder — Privacy Policy</title>
        <meta name="description" content="Privacy Policy for Bri Screen Recorder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.h1}>Privacy Policy</h1>
        <p className={styles.p}>
          <em>Effective Date: October 8, 2025</em>
        </p>

        <section>
          <h2 className={styles.h2}>Introduction</h2>
          <p className={styles.p}>
            Bri Screen Recorder ("Bri SR", "we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains what information we collect, how we use it, and the choices you have when using our mobile application, <strong>Bri Screen Recorder</strong>.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>What We Record & Store</h2>
          <ul className={styles.p}>
            <li><strong>Screen & Audio Recordings:</strong> Videos you capture (screen, internal audio, microphone) are saved locally on your device (e.g., <em>Movies/BriSR</em>). We do <strong>not</strong> upload your recordings to our servers.</li>
            <li><strong>Thumbnails & Metadata:</strong> We may generate local thumbnails and basic metadata (file name, duration, resolution, size) to display your library. These remain on your device unless you share them.</li>
            <li><strong>Optional Captions/Transcripts:</strong> If you enable AI features (e.g., captions, summaries), transcription may run on-device or via a selected third-party service; we’ll clearly indicate when a cloud service would be used and request consent.</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Information We Collect</h2>
          <ul className={styles.p}>
            <li><strong>Personal Information:</strong> Bri SR does not require an account and does not collect personal identifiers by default.</li>
            <li><strong>Device & App Data (minimal):</strong> Non-personal information such as app version, OS version, and basic device model may be used for performance, compatibility, and crash diagnostics.</li>
            <li><strong>Analytics/Diagnostics (optional):</strong> If you opt in, we may collect anonymized analytics or crash logs (e.g., event counts, error traces). You can opt out at any time in Settings.</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Permissions We Request</h2>
          <ul className={styles.p}>
            <li><strong>Screen Capture / Media Projection:</strong> Required to record your screen. Granted via a system prompt each time you start recording.</li>
            <li><strong>Record Audio (Microphone):</strong> Optional, used only if you enable mic recording.</li>
            <li><strong>Post Notifications (Android 13+):</strong> To show recording status and controls.</li>
            <li><strong>Media Storage Access:</strong> To save recordings to your device and show your library.</li>
          </ul>
          <p className={styles.p}>You can change permissions in your device settings at any time.</p>
        </section>

        <section>
          <h2 className={styles.h2}>How We Use Information</h2>
          <ul className={styles.p}>
            <li>Provide core features (record, pause/stop, save, list, share).</li>
            <li>Improve stability and performance (e.g., diagnose crashes, compatibility issues).</li>
            <li>Offer optional AI features (captions, summaries, chaptering) with your consent.</li>
          </ul>
          <p className={styles.p}>
            We do <strong>not</strong> sell your data. We do <strong>not</strong> access your recordings unless you explicitly share them via the system share sheet or enable a cloud feature.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Data Sharing</h2>
          <p className={styles.p}>
            We only share information in the following circumstances:
          </p>
          <ul className={styles.p}>
            <li><strong>With Your Consent:</strong> For example, when you choose to share a video or enable a cloud-based AI feature.</li>
            <li><strong>Service Providers (optional):</strong> If you opt in to analytics or crash reporting (e.g., Google Play Services, Firebase Crashlytics), limited diagnostic data may be processed under their policies.</li>
            <li><strong>Legal:</strong> If required to comply with applicable law or valid legal process.</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Data Security & Retention</h2>
          <p className={styles.p}>
            Recordings and thumbnails are stored locally on your device. You control deletion from within the app or your device’s file manager. 
            If you enable analytics/crash reporting, diagnostic data is retained by the respective provider per their policies. 
            While we use industry-standard safeguards, no method of storage or transmission is 100% secure.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Your Choices</h2>
          <ul className={styles.p}>
            <li><strong>Permissions:</strong> Enable/disable microphone, notifications, and other permissions in OS settings.</li>
            <li><strong>Internal/Mic Audio:</strong> Toggle each in app Settings before recording.</li>
            <li><strong>Analytics/Crash Reports:</strong> Opt in or out in Settings (where available).</li>
            <li><strong>Delete Files:</strong> Remove recordings and thumbnails at any time from the app or file manager.</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.h2}>Children’s Privacy</h2>
          <p className={styles.p}>
            Bri SR is not directed to children under 13. We do not knowingly collect personal information from children. 
            If you believe a child has provided us information, please contact us and we will promptly delete it.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Third-Party Services</h2>
          <p className={styles.p}>
            Some optional features may rely on third-party services (e.g., analytics, crash reporting, or AI providers). 
            Use of such services is disclosed in-app and governed by their respective privacy policies.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>International Users</h2>
          <p className={styles.p}>
            If you use optional cloud services, your data may be processed on servers located outside your country. 
            Where applicable, we take steps to ensure appropriate safeguards are in place.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Changes to This Policy</h2>
          <p className={styles.p}>
            We may update this Privacy Policy to reflect changes to the app or legal requirements. 
            We will update the "Effective Date" above and, where appropriate, notify you in-app.
          </p>
        </section>

        <section>
          <h2 className={styles.h2}>Contact Us</h2>
          <p className={styles.p}>
            If you have questions or concerns about this Privacy Policy, contact us at:<br />
            <strong>Email:</strong> <a href="mailto:aiobible1@gmail.com" className="text-blue-800">brisr@gmail.com</a>
          </p>
        </section>
      </main>
    </div>
  );
}
