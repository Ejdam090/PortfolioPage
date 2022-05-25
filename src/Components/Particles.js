import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <Particles
        width="100%"
        height="100vh"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },

            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3,
              attract: {
                rotateX: 600,
                rotateY: 1200,
              },
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 109,
            },
            opacity: {
              value: 0.5,
              anim: {
                speed: 1,
                opacity_min: 0.1,
              },
            },
            line_linked: {
              enable: false,
              distance: 140,
              opacity: 0.4,
              width: 1,
              shadow: {
                enable: true,
                color: "#e74c3c",
                blur: 5,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 6,
              },
            },
            size: {
              value: 1,
              random: true,
              anim: {
                speed: 40,
                size_min: 0.1,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}

export default Particle;
