"use client";

import { SceneManager } from "@/managers/scene";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    SceneManager.init(document.getElementById("canvas") as HTMLCanvasElement);

    return () => {
      SceneManager.cleanup();
    };
  }, []);

  return (
    <div className="flex flex-col h-screen p-4">
      <canvas id="canvas" />
    </div>
  );
}
