import type { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js';
import type { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js';

export default function useResizer() {
  const setSize = (
    container: HTMLDivElement,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) => {
    camera.aspect = container.clientWidth / container.clientHeight;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  };

  const init = (
    container: HTMLDivElement,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
  ) => {
    setSize(container, camera, renderer);

    window.addEventListener('resize', () => {
      setSize(container, camera, renderer);
    });
  };

  return {
    init,
    setSize,
  };
}
