export const particle_json = {

    "fullScreen": {
        "enable": true,
        "zIndex": -1
    },
    particles: {
      number: {
        value: 142,
        density: {
          enable: true,
          value_area: 1499.3805191013182
        }
      },
      color: {
        value: "#48bb78"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 1,
          color: "#000000"
        },
        polygon: {
          nb_sides: 3
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.09620472365193136,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 29.234779642848423,
          size_min: 4.87246327380807,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 224.4776885211732,
        color: "#48bb78",
        opacity: 0.4,
        width: 1.2827296486924182
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }