import Image from "next/image";
import styles from "./page.module.css";
import StartButton from "./components/startButton";
import WelcomeMessage from "./components/WelcomeMessage";
import GamePanel from "./components/GamePanel";
import GameScreen from "./components/GameScreen";

export default function Home() {
  return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <GameScreen />
      </main>
  );
}
