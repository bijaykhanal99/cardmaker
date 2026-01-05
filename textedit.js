// ===== TEXT TARGET MAP =====
const textMap = {
  tSchool: document.getElementById("school"),
  tType: document.getElementById("type"),
  tName: document.getElementById("name"),
  tClass: document.getElementById("classw"),
  tWish: document.getElementById("wish"),
  tDate: document.getElementById("date"),
};

// ===== GET ACTIVE TEXT TARGETS =====
function getTextTargets() {
  return Object.keys(textMap)
    .filter(id => document.getElementById(id).checked)
    .map(id => textMap[id]);
}

// ===== TEXT CONTROLS =====
const textControls = [
  document.getElementById("optBg"),
  document.getElementById("optTxt"),
  document.getElementById("optFs"),
  document.getElementById("optBc"),
  document.getElementById("optBw"),
  document.getElementById("radAll"),
  document.getElementById("radTL"),
  document.getElementById("radTR"),
  document.getElementById("radBL"),
  document.getElementById("radBR"),
  document.getElementById("moveX"),
  document.getElementById("moveY"),
  document.getElementById("btnBold"),
  document.getElementById("btnItalic"),
  document.getElementById("btnUnderline")
];

// ===== ENABLE / DISABLE TEXT CONTROLS =====
function toggleTextControls() {
  const enable = getTextTargets().length > 0;
  textControls.forEach(el => {
    el.disabled = !enable;
    el.style.opacity = enable ? "1" : "0.4";
    el.style.cursor = enable ? "pointer" : "not-allowed";
  });
}

// Listen for text checkboxes
Object.keys(textMap).forEach(id => {
  document.getElementById(id).addEventListener("change", toggleTextControls);
});

toggleTextControls(); // init

// ===== APPLY TEXT STYLES =====
document.getElementById("optTxt").oninput = () =>
  getTextTargets().forEach(t => t.style.color = document.getElementById("optTxt").value);

document.getElementById("optBg").oninput = () =>
  getTextTargets().forEach(t => t.style.backgroundColor = document.getElementById("optBg").value);

document.getElementById("optFs").oninput = () =>
  getTextTargets().forEach(t => t.style.fontSize = document.getElementById("optFs").value + "px");

// BORDER
document.getElementById("optBc").oninput = () =>
  getTextTargets().forEach(t => t.style.borderColor = document.getElementById("optBc").value);

document.getElementById("optBw").oninput = () =>
  getTextTargets().forEach(t => {
    t.style.borderWidth = document.getElementById("optBw").value + "px";
    t.style.borderStyle = "solid";
  });

// BOLD / ITALIC / UNDERLINE
document.getElementById("btnBold").onclick = () =>
  getTextTargets().forEach(t => t.style.fontWeight = t.style.fontWeight === "bold" ? "normal" : "bold");

document.getElementById("btnItalic").onclick = () =>
  getTextTargets().forEach(t => t.style.fontStyle = t.style.fontStyle === "italic" ? "normal" : "italic");

document.getElementById("btnUnderline").onclick = () =>
  getTextTargets().forEach(t => t.style.textDecoration = t.style.textDecoration === "underline" ? "none" : "underline");

// BORDER RADIUS
document.getElementById("radAll").oninput = () =>
  getTextTargets().forEach(t => t.style.borderRadius = document.getElementById("radAll").value + "px");

document.getElementById("radTL").oninput = () =>
  getTextTargets().forEach(t => t.style.borderTopLeftRadius = document.getElementById("radTL").value + "px");

document.getElementById("radTR").oninput = () =>
  getTextTargets().forEach(t => t.style.borderTopRightRadius = document.getElementById("radTR").value + "px");

document.getElementById("radBL").oninput = () =>
  getTextTargets().forEach(t => t.style.borderBottomLeftRadius = document.getElementById("radBL").value + "px");

document.getElementById("radBR").oninput = () =>
  getTextTargets().forEach(t => t.style.borderBottomRightRadius = document.getElementById("radBR").value + "px");

// MOVE
function moveText() {
  getTextTargets().forEach(t => {
    t.style.transform = `translate(${document.getElementById("moveX").value}px, ${document.getElementById("moveY").value}px)`;
  });
}

document.getElementById("moveX").oninput = moveText;
document.getElementById("moveY").oninput = moveText;

// ========================= //
// IMAGE CONTROLS (always enabled)
// ========================= //
const img = document.getElementById("imgupd");

const imgSize = document.getElementById("imgSize");
const imgBorderColor = document.getElementById("imgBorderColor");
const imgBorderWidth = document.getElementById("imgBorderWidth");

const imgRadiusAll = document.getElementById("imgRadiusAll");
const imgRadiusTL = document.getElementById("imgRadiusTL");
const imgRadiusTR = document.getElementById("imgRadiusTR");
const imgRadiusBL = document.getElementById("imgRadiusBL");
const imgRadiusBR = document.getElementById("imgRadiusBR");

const imgMoveX = document.getElementById("imgMoveX");
const imgMoveY = document.getElementById("imgMoveY");

// ===== IMAGE EVENTS =====
imgSize.addEventListener("input", () => {
  img.style.width = imgSize.value + "px";
  img.style.height = imgSize.value + "px";
});

imgBorderColor.addEventListener("input", () => {
  img.style.borderColor = imgBorderColor.value;
  img.style.borderStyle = "solid";
});

imgBorderWidth.addEventListener("input", () => {
  img.style.borderWidth = imgBorderWidth.value + "px";
  img.style.borderStyle = "solid";
});

imgRadiusAll.addEventListener("input", () => img.style.borderRadius = imgRadiusAll.value + "px");
imgRadiusTL.addEventListener("input", () => img.style.borderTopLeftRadius = imgRadiusTL.value + "px");
imgRadiusTR.addEventListener("input", () => img.style.borderTopRightRadius = imgRadiusTR.value + "px");
imgRadiusBL.addEventListener("input", () => img.style.borderBottomLeftRadius = imgRadiusBL.value + "px");
imgRadiusBR.addEventListener("input", () => img.style.borderBottomRightRadius = imgRadiusBR.value + "px");

function moveImage() {
  img.style.transform = `translate(${imgMoveX.value}px, ${imgMoveY.value}px)`;
}
imgMoveX.addEventListener("input", moveImage);
imgMoveY.addEventListener("input", moveImage);
