particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,  // パーティクル数を少し増やす
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#E0FFFF", "#90f8fe", "#25bffe", "#215295", "#fcfdba"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.8,  // 不透明度を上げる
      random: true,
      animation: {
        enable: true,
        speed: 1,
        opacity_min: 0.4,  // 最小不透明度を上げる
        sync: false
      }
    },
    size: {
      value: 8,  // サイズを大きく
      random: true,
      animation: {
        enable: true,
        speed: 2,
        size_min: 2,  // 最小サイズも大きく
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 4,  // 動きを少し速く
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",  // 画面端で跳ね返るように
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.5,  // 線の不透明度を上げる
      width: 1  // 線を太く
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 200,
        size: 12,  // ホバー時のサイズをより大きく
        duration: 2,
        opacity: 1,  // ホバー時は完全に不透明に
        speed: 3
      },
      push: {
        particles_nb: 8
      }
    }
  },
  retina_detect: true
});