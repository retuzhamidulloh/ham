let ism = prompt("Ismingizni kiriting:");

let ismElement = document.createElement("p");
ismElement.textContent = ism;
ismElement.style.color = "yellow";
ismElement.style.fontSize = "50px";
ismElement.style.textAlign = "center";
ismElement.style.textContent = "center";

document.body.style.backgroundColor = "blue";
document.body.appendChild(ismElement);
