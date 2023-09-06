import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader,
} from 'three';

const radiansPerSecond = MathUtils.degToRad(30);

export default function useCube() {
  const createMaterial = () => {
    const textureLoader = new TextureLoader();

    const texture = textureLoader.load('/uv-test-bw.jpg');

    const material = new MeshStandardMaterial({ map: texture });

    return material;
  };

  const createCube = () => {
    const geometry = new BoxGeometry(2, 2, 2);

    const material = createMaterial();

    const cube: Mesh<BoxGeometry, MeshStandardMaterial> & {
      tick?: (delta: number) => void;
    } = new Mesh(geometry, material);

    cube.rotation.set(-0.5, -0.1, 0.8);

    cube.tick = (delta) => {
      cube.rotation.z += radiansPerSecond * delta;
      cube.rotation.x += radiansPerSecond * delta;
      cube.rotation.y += radiansPerSecond * delta;
    };

    return cube;
  };

  return {
    createCube,
  };
}
