import * as THREE from "three";

export class SceneManager {
  static instance: SceneManager | null = null;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer();
  }

  static getInstance(): SceneManager {
    if (!SceneManager.instance) {
      SceneManager.instance = new SceneManager();
    }
    return SceneManager.instance;
  }

  static init(canvas: HTMLCanvasElement) {
    console.info("Initializing scene manager");
    const sceneManager = SceneManager.getInstance();

    sceneManager.camera.position.z = 5;
    sceneManager.camera.aspect = window.innerWidth / window.innerHeight;
    sceneManager.camera.updateProjectionMatrix();

    sceneManager.renderer.setSize(window.innerWidth, window.innerHeight);
    sceneManager.renderer.render(sceneManager.scene, sceneManager.camera);

    canvas.appendChild(sceneManager.renderer.domElement);

    window.addEventListener("resize", () => {
      console.info("Resizing scene manager");
      sceneManager.camera.aspect = window.innerWidth / window.innerHeight;
      sceneManager.camera.updateProjectionMatrix();
      sceneManager.renderer.setSize(window.innerWidth, window.innerHeight);
      sceneManager.renderer.render(sceneManager.scene, sceneManager.camera);
    });
  }

  static cleanup() {
    const sceneManager = SceneManager.getInstance();
    sceneManager.renderer.dispose();
    window.removeEventListener("resize", () => {});
  }
}
