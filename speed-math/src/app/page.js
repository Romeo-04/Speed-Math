import Image from "next/image";
import styles from "./page.module.css";
import StartButton from "./components/startButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Speed Math!
          </h1>
        <StartButton />

      </main>
    </div>
  );
}
