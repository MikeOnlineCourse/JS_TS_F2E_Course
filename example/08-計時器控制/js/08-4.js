window.onload = () => {
  let pageidx = 1;
  let time = null;
  const a1 = document.querySelector("#a1");
  const a2 = document.querySelector("#a2");
  const a3 = document.querySelector("#a3");
  const a4 = document.querySelector("#a4");
  const a5 = document.querySelector("#a5");
  const photo = document.querySelector("#contentPhoto");

  a1.addEventListener("click", showPhoto);
  a2.addEventListener("click", showPhoto);
  a3.addEventListener("click", showPhoto);
  a4.addEventListener("click", showPhoto);
  a5.addEventListener("click", showPhoto);

  function showPhoto() {
    pageidx = Number(this.id.substr(1));
    photo.style.backgroundImage = `url("../images/08/big/${this.id}.jpg")`;
    reset();
    clearInterval(time);
    timeGo();
  }

  function timeGo() {
    time = setInterval(() => {
      pageidx++;
      if (pageidx > 5) {
        pageidx = 1;
      }
      photo.style.backgroundImage = `url("../images/08/big/a${pageidx}.jpg")`;
      reset();
    }, 3000);
  }

  function reset() {
    for (let i = 1; i < 6; i++) {
      document.querySelector(`#a${i}`).style.opacity = 0.5;
    }
    document.querySelector(`#a${pageidx}`).style.opacity = 1;
  }

  timeGo();
  document.querySelector(`#a${pageidx}`).style.opacity = 1;
};
