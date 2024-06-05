import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from './particles.json';

{/*The majority of this code was found in the tsparticles repo: https://github.com/tsparticles/react*/}

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => (particlesConfig),
    [],
  );

  if (init) {
    return (
      <Particles
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesComponent