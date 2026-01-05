
const bgPanel = document.getElementById("backgroundPanel");

// TEMPLATE
document.querySelectorAll("#backgroundPanel ul li").forEach(li => {
  li.addEventListener("click", () => {
    const bg = li.getAttribute("data-bg");
    if(bg){
      card.style.backgroundImage = `url(${bg})`;
      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";
    }
  });
});

// UPLOAD
const upbg = document.getElementById("upbgimage");
upbg.addEventListener("change", e => {
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = event => {
    card.style.backgroundImage = `url(${event.target.result})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
  };
  reader.readAsDataURL(file);
});

// GRADIENT
const fcolor = document.getElementById("fcolor");
const scolor = document.getElementById("scolor");
const gradDirection = document.getElementById("gradDirection");

function updateGradient(){
  const angle = gradDirection.value || 135;
  card.style.backgroundImage = `linear-gradient(${angle}deg, ${fcolor.value}, ${scolor.value})`;
  card.style.backgroundSize = "cover";
}

fcolor.addEventListener("input", updateGradient);
scolor.addEventListener("input", updateGradient);
gradDirection.addEventListener("input", updateGradient);

