import { Canvas } from '@react-three/fiber'
import Particles from './Particles'

function App() {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <color attach="background" args={['#ffffff']} />
      <Particles />
    </Canvas>
  )
}

export default App
