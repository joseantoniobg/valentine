import React from 'react';
import { loadFull } from "tsparticles";
import Particles from 'react-tsparticles';

const ConfettiParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (<Particles
    id="confettiParticles"
    init={particlesInit}
    options={{
      "emitters": [
        {
          "position": {
            "x": 0,
            "y": 30
          },
          "rate": {
            "quantity": 15,
            "delay": 0.15
          },
          "particles": {
            "move": {
              "direction": "top-right",
              "outModes": {
                "top": "none",
                "left": "none",
                "default": "destroy"
              }
            }
          }
        },
        {
          "position": {
            "x": 100,
            "y": 30
          },
          "rate": {
            "quantity": 15,
            "delay": 0.15
          },
          "particles": {
            "move": {
              "direction": "top-left",
              "outModes": {
                "top": "none",
                "right": "none",
                "default": "destroy"
              }
            }
          }
        }
      ],
      "particles": {
        "color": {
          "value": [
            "#ffffff",
            "#FF0000"
          ]
        },
        "move": {
          "decay": 0.05,
          "direction": "top",
          "enable": true,
          "gravity": {
            "enable": true
          },
          "outModes": {
            "top": "none",
            "default": "destroy"
          },
          "speed": {
            "min": 20,
            "max": 50
          }
        },
        "number": {
          "value": 0
        },
        "opacity": {
          "value": 1
        },
        "rotate": {
          "value": {
            "min": 0,
            "max": 360
          },
          "direction": "random",
          "animation": {
            "enable": true,
            "speed": 40
          }
        },
        "tilt": {
          "direction": "random",
          "enable": true,
          "value": {
            "min": 0,
            "max": 360
          },
          "animation": {
            "enable": true,
            "speed": 30
          }
        },
        "size": {
          "value": {
            "min": 0,
            "max": 3
          },
          "animation": {
            "enable": true,
            "startValue": "min",
            "count": 1,
            "speed": 16,
            "sync": true
          }
        },
        "roll": {
          "darken": {
            "enable": true,
            "value": 25
          },
          "enable": true,
          "speed": {
            "min": 5,
            "max": 15
          }
        },
        "wobble": {
          "distance": 30,
          "enable": true,
          "speed": {
            "min": -7,
            "max": 7
          }
        },
        "shape": {
          "type": [
            "circle",
            "square",
            "triangle",
            "polygon",
            "character"
          ],
          "options": {
            "polygon": [
              {
                "sides": 5
              },
              {
                "sides": 6
              }
            ],
            "character": {
              "fill": true,
              "font": "Verdana",
              "style": "",
              "weight": 400,
              "particles": {
                "size": {
                  "value": 8
                }
              },
              "value": [
                "🥰",
                "💕",
                "👨‍❤️‍💋‍👨",
                "🌈",
                "🦄",
                "❤️"
              ]
            }
          }
        }
      }
    }}
  />)
}

export default ConfettiParticles;