import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from './particles.json';

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      console.log('Particles engine initialized');  // Log when the engine is initialized
    }).then(() => {
      setInit(true);
      console.log('Particles component initialized');  // Log when the component is initialized
    });
  }, []);

  const options = useMemo(() => particlesConfig, []);

  const particlesLoaded = (container) => {
    console.log('Particles loaded:', container);  // Log when particles are loaded
  };

  if (init) {
    console.log('Rendering Particles component');  // Log when the component is rendering
    return (
      <Particles
        options={options}
        particlesLoaded={particlesLoaded}
      />
    );
  }

  console.log('Particles component not initialized');  // Log when the component is not initialized
  return <></>;
};

export default ParticlesComponent;
