import { useEffect, useRef } from 'react';
import useWorld from '@/hooks/useWorld';

const ThreeTrain = () => {
  const sceneContainerRef = useRef<HTMLDivElement>(null);
  const { renderTrain } = useWorld(sceneContainerRef);

  useEffect(() => {
    renderTrain();
  }, [renderTrain]);
  return (
    <div
      ref={sceneContainerRef}
      style={{ width: '100%', height: '100%' }}
    ></div>
  );
};

export default ThreeTrain;
