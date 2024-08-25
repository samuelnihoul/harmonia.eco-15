import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by visiting one of our sites below&nbsp;
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/pure2.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        Global Environmental Protection Services
      </div>

      <div className={styles.grid}>
        <a
          href="https://karbonbasar.harmonia.eco"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Karbon Basar <span>-&gt;</span>
          </h2>
          <p>Carbon offset marketplace with collectibles</p>
        </a>

        <a
          href="https://priorite.harmonia.eco"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Priorite <span>-&gt;</span>
          </h2>
          <p>Collaborative developmental priorities list</p>
        </a>

        <a
          href="https://tarif.harmonia.eco"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Tarif <span>-&gt;</span>
          </h2>
          <p>Opinionated time and carbon pricing helper for daily decision-making</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
