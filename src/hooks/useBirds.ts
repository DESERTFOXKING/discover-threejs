import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AnimationMixer } from 'three';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function useBirds() {
  const loadBirds = async () => {
    const loader = new GLTFLoader();

    const [parrotData, flamingoData, storkData] = await Promise.all([
      loader.loadAsync('/models/Parrot.glb'),
      loader.loadAsync('/models/Flamingo.glb'),
      loader.loadAsync('/models/Stork.glb'),
    ]);

    const parrot = setupModel(parrotData);
    parrot.position.set(0, 0, 2.5);
    const flamingo = setupModel(flamingoData);
    flamingo.position.set(7.5, 0, -10);
    const stork = setupModel(storkData);
    stork.position.set(0, -2.5, -10);

    return { parrot, flamingo, stork };
  };

  const setupModel = (data: GLTF) => {
    const model: any = data.scene.children[0];
    const clip = data.animations[0];

    const mixer = new AnimationMixer(model);
    const action = mixer.clipAction(clip);
    action.play();

    model.tick = (delta: any) => mixer.update(delta);

    return model;
  };

  return {
    loadBirds,
  };
}
