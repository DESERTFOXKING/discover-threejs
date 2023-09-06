import { useEffect, useRef } from 'react';
import useWorld from '@/hooks/useWorld';

function ThreeDemo5() {
  const sceneContainerRef = useRef<HTMLDivElement>(null);
  const { renderBirds } = useWorld(sceneContainerRef);

  useEffect(() => {
    renderBirds();
  }, [renderBirds]);

  return (
    <div
      ref={sceneContainerRef}
      style={{ width: '100%', height: '100%' }}
    ></div>
  );
}

export default ThreeDemo5;
