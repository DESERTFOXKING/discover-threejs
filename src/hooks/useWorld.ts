import { useRef } from 'react';
import useCamera from './useCamera';
import useScene from './useScene';
import useWebGLRenderer from './useWebGLRenderer';
import useCube from './useCube';
import useResizer from './useResizer';
import useLights from './useLights';
import useLoop from './useLoop';
import useOrbitControls from './useOrbitControls';
import useMeshGroup from './useMeshGroup';
import useBirds from './useBirds';
import { Train } from '@/components/ThreeTrain/Train/Train';


export default function useWorld(
  containerRef: React.RefObject<HTMLDivElement>
) {
  const { createCamera } = useCamera();
  const { createScene } = useScene();
  const { createRenderer } = useWebGLRenderer();
  const { createCube } = useCube();
  const { createLights } = useLights();
  const camera = useRef(createCamera());
  const scene = useRef(createScene());
  const renderer = useRef(createRenderer());
  const { init: resizerInit } = useResizer();
  const { start, stop, pushUpdatables } = useLoop(
    camera.current,
    scene.current,
    renderer.current
  );
  const { createControls } = useOrbitControls();
  const { createMeshGroup } = useMeshGroup();
  const { loadBirds } = useBirds();

  const init = () => {
    if (!containerRef.current) return;
    containerRef.current.append(renderer.current.domElement);

    const cube = createCube();
    const { mainLight, ambientLight } = createLights();
    // pushUpdatables([cube]);
    const controls = createControls(camera.current, renderer.current.domElement);
    controls.target.set(1,2,3);
    controls.target.copy(cube.position);
    controls.enablePan = false;
    pushUpdatables([controls])

    scene.current.add(cube, mainLight, ambientLight);

    resizerInit(containerRef.current, camera.current, renderer.current);
  };

  const render = () => {
    // console.log(containerRef.current);
    // console.log(camera.current)
    // console.log(scene.current)
    // console.log(renderer.current)

    init();
    renderer.current.render(scene.current, camera.current);
  };

  const renderGroup = () => {
    if (!containerRef.current) return;
    containerRef.current.append(renderer.current.domElement);

    const { mainLight, ambientLight } = createLights();
    const controls = createControls(camera.current, renderer.current.domElement);
    const meshGroup = createMeshGroup();

    pushUpdatables([controls])
    scene.current.add(meshGroup, mainLight, ambientLight);

    resizerInit(containerRef.current, camera.current, renderer.current);
    start();
  }

  const renderTrain= () => {
    if (!containerRef.current) return;
    containerRef.current.append(renderer.current.domElement);

    const { mainLight, ambientLight } = createLights();
    const controls = createControls(camera.current, renderer.current.domElement);
    const train = new Train();
    pushUpdatables([controls, train]);
    scene.current.add(train, mainLight, ambientLight);

    resizerInit(containerRef.current, camera.current, renderer.current);
    start();
  }

  const renderBirds = async () => {
    if (!containerRef.current) return;
    containerRef.current.append(renderer.current.domElement);

    const { mainLight, ambientLight } = createLights();
    const controls = createControls(camera.current, renderer.current.domElement);

    
    const { parrot, flamingo, stork } = await loadBirds();
    controls.target.copy(parrot.position);
    
    pushUpdatables([parrot, flamingo, stork]);

    scene.current.add(parrot, flamingo, stork, mainLight, ambientLight);

    resizerInit(containerRef.current, camera.current, renderer.current);
    start();
  }

  return {
    render,
    loopStart: () => {
      init();
      start();
    },
    loopStop: () => {
      init();
      stop();
    },
    renderGroup,
    renderTrain,
    renderBirds,
  };
}
