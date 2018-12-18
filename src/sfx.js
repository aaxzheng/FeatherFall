class Sound {
  constructor(file) {
    this.sound = document.createElement("audio");
    this.sound.src = file;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  play() {
    this.sound.play();
  }

  pause() {
    this.sound.pause();
  }
}

export default Sound;
