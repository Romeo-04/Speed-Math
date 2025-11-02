import Image from "next/image";
import styles from "./page.module.css";
import StartButton from "./components/startButton";
import WelcomeMessage from "./components/WelcomeMessage";
import GamePanel from "./components/GamePanel";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1> Speed Math </h1>
        <GamePanel seconds={20} />
      </main>
    </div>
  );
}
