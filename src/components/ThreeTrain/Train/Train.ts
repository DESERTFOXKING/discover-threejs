import { Group } from 'three';
import { createMeshes } from './meshes.js';

class Train extends Group {
  meshes: any;
  constructor() {
    super();

    this.meshes = createMeshes();

    this.add(
      this.meshes.nose,
      this.meshes.cabin,
      this.meshes.chimney,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel
    );
  }

  tick() {

  }
  
}

export { Train };
