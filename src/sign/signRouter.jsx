import React, { Component } from 'react'
import Register from './register/register'
import DefaultLogin from './login/defaultLogin'
import Particles from 'react-particles-js'

export default class SignRouter extends Component {

    render() {
        const { history } = this.props
        return (
            <div className="peers ai-s fxw-nw h-100vh">
                <div className="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv d-none d-sm-block" style={{ backgroundImage: 'url("assets/static/images/space.jpg")' }}>
                    <Particles params={particles} style={{position:'fixed'}}/>
                    <div className="pos-a centerXY">
                        <div className="bdrs-50p pos-r" style={{ width: "120px", height: "120px", backgroundColor: 'black' }}>
                        
                            <img className="pos-a centerXY" src="assets/static/images/logo.png" alt="" />
                        </div>
                    </div>
                </div>
                {
                    history.location.pathname === '/register' ?
                        <Register /> :
                        <DefaultLogin />
                }

            </div>
        )
    }
}

const particles={
    
    "particles": {
        "number": {
            "value": 160,
                "density": {
                "enable": true,
                    "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
                "stroke": {
                "width": 0,
                    "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                    "width": 100,
                        "height": 100
            }
        },
        "opacity": {
            "value": 1,
                "random": true,
                    "anim": {
                "enable": true,
                    "speed": 0.5,
                        "opacity_min": 0,
                            "sync": false
            }
        },
        "size": {
            "value": 3,
                "random": true,
                    "anim": {
                "enable": false,
                    "speed": 4,
                        "size_min": 0.3,
                            "sync": false
            }
        },
        "line_linked": {
            "enable": false,
                "distance": 150,
                    "color": "#ffffff",
                        "opacity": 0.4,
                            "width": 1
        },
        "move": {
            "enable": true,
                "speed": 1,
                    "direction": "none",
                        "random": true,
                            "straight": false,
                                "out_mode": "out",
                                    "bounce": false,
                                        "attract": {
                "enable": false,
                    "rotateX": 600,
                        "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
            "events": {
            "onhover": {
                "enable": true,
                    "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                    "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                    "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                    "size": 0,
                        "duration": 2,
                            "opacity": 0,
                                "speed": 3
            },
            "repulse": {
                "distance": 400,
                    "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

