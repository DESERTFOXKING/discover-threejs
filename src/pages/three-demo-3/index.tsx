import { useEffect, useRef } from 'react';
import useWorld from '@/hooks/useWorld';

function ThreeDemo3() {
  const sceneContainerRef = useRef<HTMLDivElement>(null);
  const { renderGroup } = useWorld(sceneContainerRef);

  useEffect(() => {
    renderGroup();
  }, [renderGroup]);

  return (
    <div
      ref={sceneContainerRef}
      style={{ width: '100%', height: '100%' }}
    ></div>
  );
}

export default ThreeDemo3;
