import Image from "next/image";
import styles from "./page.module.css";
import StartButton from "./components/startButton";
import WelcomeMessage from "./components/WelcomeMessage";
import GamePanel from "./components/GamePanel";

export default function Home() {
  return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="m-5 text-4xl font-bold font-sans"> Speed Math </h1>
        <GamePanel seconds={20} />
      </main>
  );
}
