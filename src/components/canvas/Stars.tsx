import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import { Points as PointsType } from 'three';

import * as random from 'maath/random/dist/maath-random.cjs';


interface StarsProps {
  [x: string]: any;
}

const Stars: React.FC<StarsProps> = (props) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState<Float32Array>(() => {
    const sphereData = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    return new Float32Array(sphereData.buffer);
  });

  useFrame((_ , delta) => {
    if (ref && ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
