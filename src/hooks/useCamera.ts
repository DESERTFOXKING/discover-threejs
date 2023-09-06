import { PerspectiveCamera } from 'three';

export default function useCamera() {
  const createCamera = () => {
    const camera = new PerspectiveCamera(35, 1, 0.1, 100);

    camera.position.set(0, 0, 10);

    return camera;
  };

  return {
    createCamera,
  };
}
