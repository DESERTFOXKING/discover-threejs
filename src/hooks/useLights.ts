import { DirectionalLight, AmbientLight } from 'three';

export default function useLights() {
  const createLights = () => {
    const ambientLight = new AmbientLight('white', 2);
    const mainLight = new DirectionalLight('white', 8);

    mainLight.position.set(10, 10, 10);

    return { mainLight, ambientLight };
  };

  return {
    createLights,
  };
}

