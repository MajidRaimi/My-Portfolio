import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const [scale, setScale] = useState(0.75);
  const computer = useGLTF('./desktop_pc/scene.gltf');

  useEffect(() => {
    const handleResize = () => {
      // Define your own breakpoints here to match Tailwind's.
      if (window.innerWidth < 640) {
        setScale(0.5);
      } else {
        setScale(0.75);
      }
    };

    handleResize(); // Call once to set initial scale
    window.addEventListener('resize', handleResize); // Update scale whenever window size changes
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{
        position: [20, 3, 5], // x, y, z
        fov: 25,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
