const refreshbtn = document.getElementById("btn");
const container = document.querySelector(".container");

const maxnumber = 30;
const generatepalette = () => {
  container.innerHTML = " ";
  for (let i = 0; i < maxnumber; i++) {
    let randomHEX = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHEX = `#${randomHEX.padEnd(6, "0")}`;
    const color = document.createElement("li");

    color.classList.add("color");
    color.innerHTML = `
    <div class="react-box" style="background: ${randomHEX}"></div>
        <span class="hex-value">${randomHEX}</span>`;
    container.appendChild(color);
    color.addEventListener("click", () => copycolor(color, randomHEX));
  }
};
generatepalette();
const copycolor = (elem, hex) => {
  let hexvalue = elem.querySelector(".hex-value");
  navigator.clipboard.writeText(hex).then(() => {
    hexvalue.innerHTML = "copied...";
    setTimeout(() => (hexvalue.innerHTML = hex), 1000);
  });
};

const generatepalet = () => {
  container.innerHTML = " ";
  for(let a = 0 ; a < 6 ; a++){
  let randomhex = Math.floor(Math.random() * 0xffffff).toString(16);
  randomhex = `#${randomhex.padStart(6,"0")}`
  let color = document.createElement("li");
  color.classList.add("color");
  color.innerHTML = `
  <div class="react-box" style="background: ${randomhex}"></div>
  <span class="hex-value">${randomhex}</span>`;

  container.appendChild(color);
  }

}

refreshbtn.addEventListener("click", generatepalette);
refreshbtn.addEventListener("dblclick", generatepalet);







// #28c543













