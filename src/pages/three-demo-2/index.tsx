import { useEffect, useRef } from 'react';
import useWorld from '@/hooks/useWorld';

function ThreeDemo2() {
  const sceneContainerRef = useRef<HTMLDivElement>(null);
  const { loopStart } = useWorld(sceneContainerRef);

  useEffect(() => {
    loopStart();
  }, [loopStart]);

  return (
    <div
      ref={sceneContainerRef}
      style={{ width: '100%', height: '100%' }}
    ></div>
  );
}

export default ThreeDemo2;
