import { useRef, useEffect } from 'react';
import {
  Scene,
  Color,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  WebGLRenderer,
} from 'three';

function ThreeDemo1() {
  const sceneContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if (
      !sceneContainerRef.current?.clientWidth ||
      !sceneContainerRef.current?.clientHeight
    )
      return;

    // 创建场景
    const scene = new Scene();
    scene.background = new Color('skyblue');

    /**
     * 创建相机
     * fov、aspect、near、far 这四个参数一起用于创建一个有边界的空间区域，我们称之为 视锥体。
     */
    const fov = 35; // 视野：相机的视野有多宽，以度为单位。
    const aspect =
      sceneContainerRef.current.clientWidth /
      sceneContainerRef.current.clientHeight; // 纵横比：场景的宽度与高度的比率。
    const near = 0.1; // 近剪裁平面：任何比这更靠近相机的东西都是不可见的。
    const far = 100; // 远剪裁平面：任何比这更远离相机的东西都是不可见的。
    const camera = new PerspectiveCamera(fov, aspect, near, far);
    /**
     * 定位相机
     * 我们创建的每个对象最初都位于场景的中心，(0,0,0)。 这意味着我们的相机当前位于(0,0,0)，我们添加到场景中的任何对象也将定位在(0,0,0), 都在彼此之上混杂在一起。艺术性地放置相机是一项重要的技能，但是，现在，我们将简单地将其移回（ 朝向我们 ）以给我们一个场景的概览。
     * 或则 camera.position.x = 0; camera.position.y = 0; camera.position.z = 10;
     */
    camera.position.set(0, 0, 10);

    /**
     * 创建一个可见对象
     * 1. 创建几何体
     * 2. 创建材质
     * 3. 创建网格
     * 4. 将网格添加到场景中
     */
    const geometry = new BoxGeometry(2, 2, 2); // 创建几何体
    const material = new MeshBasicMaterial(); // 创建材质
    const cube = new Mesh(geometry, material); // 创建网格
    scene.add(cube); // 将网格添加到场景中

    /**
     * 创建渲染器
     */
    const renderer = new WebGLRenderer();
    renderer.setSize(
      sceneContainerRef.current.clientWidth,
      sceneContainerRef.current.clientHeight
    ); // 设置渲染器的大小
    renderer.setPixelRatio(window.devicePixelRatio); // 设置设备像素比 这是防止 HiDPI 显示器模糊所必需的 （也称为视网膜显示器）。

    sceneContainerRef.current.append(renderer.domElement);
    renderer.render(scene, camera);
  }, []);

  return (
    <div ref={sceneContainerRef} style={{ width: '100%', height: '100%' }}>
    </div>
  );
}

export default ThreeDemo1;
