import {
  Group,
  Mesh,
  SphereGeometry,
  MeshStandardMaterial,
  MathUtils,
} from 'three';

const radiansPerSecond = MathUtils.degToRad(30);

export default function useMeshGroup() {
  const createMeshGroup = () => {
    const group: Group & {
      tick?: (delta: number) => void;
    } = new Group();
    const geometry = new SphereGeometry(0.25, 16, 16);
    const material = new MeshStandardMaterial({
      color: 'indigo',
    });

    const protoSphere = new Mesh(geometry, material);
    group.add(protoSphere);

    for (let i = 0; i < 1; i += 0.05) {
      const sphere = protoSphere.clone();
      sphere.position.x = Math.cos(2 * Math.PI * i);
      sphere.position.y = Math.sin(2 * Math.PI * i);
      sphere.scale.multiplyScalar(0.01 + i);

      group.add(sphere);
    }

    group.tick = (delta) => {
      group.rotation.z -= delta * radiansPerSecond;
    };

    return group;
  };

  return {
    createMeshGroup,
  };
}
