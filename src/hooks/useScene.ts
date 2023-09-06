import { Color, Scene } from 'three'

export default function useScene() {
  const createScene = () => {
    const scene = new Scene();

    scene.background = new Color('skyblue');

    return scene
  }

  return {
    createScene
  }
}