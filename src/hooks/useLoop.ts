import { useRef } from 'react';
import { Clock } from 'three';
import type { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js';
import type { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';
import type { Scene } from 'three/src/scenes/Scene.js';

const clock = new Clock();

export default function useLoop(
  camera: PerspectiveCamera,
  scene: Scene,
  renderer: WebGLRenderer
) {

  const updatables = useRef<any[]>([]);

  const tick = () => {
    const delta = clock.getDelta();
    for (const object of updatables.current) {
      object?.tick(delta);
    }
  }

  const start = () => {
    renderer.setAnimationLoop(() => {
      tick();
      renderer.render(scene, camera);
    });
  };

  const stop = () => {
    renderer.setAnimationLoop(null);
  };

  const pushUpdatables = (arr: any) => updatables.current = [...updatables.current, ...arr]

  return {
    start,
    stop,
    tick,
    pushUpdatables,
  };
}
