// ==============================
// ===== TEXT TARGET MAP ========
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
    .filter(id => document.getElementById(id)?.checked)
    .map(id => textMap[id]);
}

// ==============================
// ===== TEXT CONTROLS ==========
const textControls = [
  document.getElementById("optBg"),
  document.getElementById("optTxt"),
  document.getElementById("optFs"),
  document.getElementById("optBc"),
  document.getElementById("optBw"),
  document.getElementById("optfont"),
  document.getElementById("radAll"),
  document.getElementById("radTL"),
  document.getElementById("radTR"),
  document.getElementById("radBL"),
  document.getElementById("radBR"),
  document.getElementById("moveX"),
  document.getElementById("moveY"),
  document.getElementById("btnBold"),
  document.getElementById("btnItalic"),
  document.getElementById("btnUnderline"),
  document.getElementById("btnAa"),
  document.getElementById("txtpad")
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

Object.keys(textMap).forEach(id => {
  document.getElementById(id)?.addEventListener("change", toggleTextControls);
});

toggleTextControls();

// ==============================
// ===== APPLY TEXT STYLES ======
document.getElementById("optTxt").oninput = e =>
  getTextTargets().forEach(t => t.style.color = e.target.value);

document.getElementById("optBg").oninput = e =>
  getTextTargets().forEach(t => t.style.backgroundColor = e.target.value);

document.getElementById("optFs").oninput = e =>
  getTextTargets().forEach(t => t.style.fontSize = e.target.value + "px");

document.getElementById("optBc").oninput = e =>
  getTextTargets().forEach(t => {
    t.style.borderColor = e.target.value;
    t.style.borderStyle = "solid";
  });

document.getElementById("txtpad").oninput = e =>
  getTextTargets().forEach(t => t.style.padding = e.target.value + "px");

document.getElementById("optBw").oninput = e =>
  getTextTargets().forEach(t => {
    t.style.borderWidth = e.target.value + "px";
    t.style.borderStyle = "solid";
  });

document.getElementById("btnBold").onclick = () =>
  getTextTargets().forEach(t =>
    t.style.fontWeight = t.style.fontWeight === "bold" ? "normal" : "bold"
  );

document.getElementById("btnItalic").onclick = () =>
  getTextTargets().forEach(t =>
    t.style.fontStyle = t.style.fontStyle === "italic" ? "normal" : "italic"
  );

document.getElementById("btnUnderline").onclick = () =>
  getTextTargets().forEach(t =>
    t.style.textDecoration = t.style.textDecoration === "underline" ? "none" : "underline"
  );

// Text Transform Toggle (uppercase/lowercase/capitalize)
document.getElementById("btnAa").onclick = () =>
  getTextTargets().forEach(t => {
    const v = t.style.textTransform;
    t.style.textTransform =
      v === "uppercase" ? "lowercase" :
      v === "lowercase" ? "capitalize" :
      "uppercase";
  });

// ===== BORDER RADIUS =====
["radAll","radTL","radTR","radBL","radBR"].forEach(id=>{
  document.getElementById(id).oninput = e => {
    const val = e.target.value+"%";
    getTextTargets().forEach(t=>{
      if(id=="radAll") t.style.borderRadius=val;
      if(id=="radTL") t.style.borderTopLeftRadius=val;
      if(id=="radTR") t.style.borderTopRightRadius=val;
      if(id=="radBL") t.style.borderBottomLeftRadius=val;
      if(id=="radBR") t.style.borderBottomRightRadius=val;
    });
  }
});

// ===== MOVE TEXT =====
function moveText() {
  const x = document.getElementById("moveX").value;
  const y = document.getElementById("moveY").value;
  getTextTargets().forEach(t => {
    t.style.top = `${y}%`;
    t.style.left = `${x}%`;
  });
}
document.getElementById("moveX").oninput = moveText;
document.getElementById("moveY").oninput = moveText;

// ===== FONT SELECT CONTROL =====
const optFont = document.getElementById("optfont");
const fonts = [
  "Arial, sans-serif",
  "Verdana, sans-serif",
  "Georgia, serif",
  "'Times New Roman', serif",
  "'Courier New', monospace",
  "'Comic Sans MS', cursive",
  "'Lucida Handwriting', cursive",
  "'Brush Script MT', cursive",
  "'Dancing Script', cursive",
  "'Pacifico', cursive"
];

fonts.forEach(font => {
  const option = document.createElement("option");
  option.value = font;
  option.textContent = font.replace(/['"]/g, "").split(",")[0];
  option.style.fontFamily = font;
  optFont.appendChild(option);
});

optFont.onchange = () => {
  if(!optFont.value) return;
  getTextTargets().forEach(t=>t.style.fontFamily=optFont.value);
};

// ===== IMAGE MAP =====
const imageMap = {
  ilogo: document.getElementById("logoupd"),
  iimage: document.getElementById("imgupd")
};

function getImageTargets() {
  return Object.keys(imageMap)
    .filter(id => document.getElementById(id)?.checked)
    .map(id => imageMap[id]);
}

const imgControls = [
  document.getElementById("imgSize"),
  document.getElementById("imgBorderColor"),
  document.getElementById("imgBorderWidth"),
  document.getElementById("imgRadiusAll"),
  document.getElementById("imgRadiusTL"),
  document.getElementById("imgRadiusTR"),
  document.getElementById("imgRadiusBL"),
  document.getElementById("imgRadiusBR"),
  document.getElementById("imgMoveX"),
  document.getElementById("imgMoveY")
];

function toggleImageControls(){
  const enable = getImageTargets().length>0;
  imgControls.forEach(el=>{
    el.disabled = !enable;
    el.style.opacity = enable?"1":"0.4";
    el.style.cursor = enable?"pointer":"not-allowed";
  });
}
Object.keys(imageMap).forEach(id=>{
  document.getElementById(id)?.addEventListener("change", toggleImageControls);
});
toggleImageControls();

// ===== IMAGE EVENTS =====
imgSize.oninput = ()=>getImageTargets().forEach(img=>{img.style.width=imgSize.value+"px";img.style.height=imgSize.value+"px";});
imgBorderColor.oninput = ()=>getImageTargets().forEach(img=>{img.style.borderColor=imgBorderColor.value;img.style.borderStyle="solid";});
// ===== IMAGE BORDER WIDTH =====
imgBorderWidth.oninput = () => 
  getImageTargets().forEach(img => {
    img.style.borderWidth = imgBorderWidth.value + "px";
    img.style.borderStyle = "solid";
  });

// ===== IMAGE BORDER RADIUS =====
imgRadiusAll.oninput = () => 
  getImageTargets().forEach(img => img.style.borderRadius = imgRadiusAll.value + "%");

imgRadiusTL.oninput = () => 
  getImageTargets().forEach(img => img.style.borderTopLeftRadius = imgRadiusTL.value + "%");

imgRadiusTR.oninput = () => 
  getImageTargets().forEach(img => img.style.borderTopRightRadius = imgRadiusTR.value + "%");

imgRadiusBL.oninput = () => 
  getImageTargets().forEach(img => img.style.borderBottomLeftRadius = imgRadiusBL.value + "%");

imgRadiusBR.oninput = () => 
  getImageTargets().forEach(img => img.style.borderBottomRightRadius = imgRadiusBR.value + "%");

// ===== IMAGE MOVE =====
function moveImage() {
  const x = imgMoveX.value;
  const y = imgMoveY.value;
  getImageTargets().forEach(img => {
  
     img.style.top = `${y}%`;
    img.style.left = `${x}%`;
  });
}

imgMoveX.oninput = moveImage;
imgMoveY.oninput = moveImage;

