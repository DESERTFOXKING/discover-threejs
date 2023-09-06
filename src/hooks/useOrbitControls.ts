import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { Camera } from 'three/src/cameras/Camera.js';

export default function useOrbitControls() {
  const createControls = (camera: Camera, canvas: HTMLElement) => {
    const controls: OrbitControls & {
      tick?: () => void;
    } = new OrbitControls(camera, canvas);

    controls.enableDamping = true;
    controls.tick = () => controls.update();

    return controls;
  };

  return {
    createControls,
  };
}
