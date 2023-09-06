import { WebGLRenderer } from 'three';

export default function useWebGLRenderer() {
  const createRenderer = () => {
    const renderer = new WebGLRenderer({ antialias: true });

    return renderer;
  };

  return {
    createRenderer,
  };
}
