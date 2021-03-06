import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sole Nation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.navigation}>
          <nav>
            <h1>Welcome to Sole Nation</h1>
          </nav>
        </div>

        <div className={styles.hero}>
          <h1>Hero</h1>
        </div>

        <h2>Categories</h2>
        <div className={styles.categories}>
          <div className={styles.category}>
            <h2>Mens</h2>
          </div>
          <div className={styles.category}>
            <h2>Womens</h2>
          </div>
        </div>

        <h2>Best Seller</h2>
        <div className={styles.best}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>card 1</h3>
            </div>
            <div className={styles.card}>
              <h3>card 2</h3>
            </div>
            <div className={styles.card}>
              <h3>card 3</h3>
            </div>
          </div>
        </div>

        <h2>Most viewed</h2>
        <div className={styles.best}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>card 1</h3>
            </div>
            <div className={styles.card}>
              <h3>card 2</h3>
            </div>
            <div className={styles.card}>
              <h3>card 3</h3>
            </div>
          </div>
        </div>

        <h2>Subscribe to new letter</h2>
        <div className={styles.news}>
          <h2>Subscribe</h2>
        </div>
      </main>

      <footer>
        <div className={styles.best}>
          <div className={styles.cards}>
            <div className={styles.info}>
              <h3>About Footwear</h3>
            </div>
            <div className={styles.info}>
              <h3>Customer Care</h3>
            </div>
            <div className={styles.info}>
              <h3>Information</h3>
            </div>
            <div className={styles.info}>
              <h3>News</h3>
            </div>
            <div className={styles.info}>
              <h3>Contact Information</h3>
            </div>
          </div>
        </div>

        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
