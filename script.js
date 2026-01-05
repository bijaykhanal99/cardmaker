const $ = s => document.querySelector(s);

const card = $("#card");

// ===== ROLE HANDLER =====
function checkRole() {
    const isStu = stu.checked;

    stul.style.color = isStu ? "red" : "cornflowerblue";
    stal.style.color = !isStu ? "red" : "cornflowerblue";

    cls.style.display = isStu ? "block" : "none";
    pos.style.display = isStu ? "none" : "block";

    classw.innerHTML = isStu
        ? `Class : ${cls.value || ""}`
        : (pos.value || "Teacher");
}

// init + events
["change", "input"].forEach(e => {
    stu.addEventListener(e, checkRole);
    sta.addEventListener(e, checkRole);
    cls.addEventListener(e, checkRole);
    pos.addEventListener(e, checkRole);
});
checkRole();




// ===== SHORTCUT TEXT FUNCTIONS =====
function sclname(){ 
    document.querySelector('#school').innerHTML =
        document.querySelector('#sclname').value;
} 

function fullname(){ 
    document.querySelector('#name').innerHTML =
        document.querySelector('#mrs').value + " " +
        document.querySelector('#fullname').value;
} 

function datej(){ 
    document.querySelector('#date').innerHTML =
        document.querySelector('#dob').value + " " +
        document.querySelector('#datej').value;
}

function wishx(){ 
    document.querySelector('#wish').innerHTML =
        document.querySelector('#wishx').value;
}

function wishy(){ 
    document.querySelector('#wish').innerHTML =
        document.querySelector('#wishy').value;
}

function hbd() {
    const hbdVal = document.querySelector("#hbd").value;
    const wishEl = document.querySelector(".wish");
    const typeEl = document.querySelector("#type");

    // show / hide wish
    wishEl.style.display =
        hbdVal === "Congratulation" ? "none" : "block";

    // change type text
    typeEl.innerHTML =
        hbdVal === "Congratulation"
            ? "Congratulation"
            : "Happy Birthday";
}


function formopen(){
    let form = document.querySelector(".form");
    let background = document.querySelector(".backgrounds");
    form.style.display = "block";
    background.style.display = "none";
}
function backgroundopen(){
    let form = document.querySelector(".form");
    let background = document.querySelector(".backgrounds");
    form.style.display = "none";
    background.style.display = "block";
}
function imageedit(){
    let imgedit = document.querySelector(".sidebarX");
    let txtedit = document.querySelector(".sidebar");
    imgedit.style.display = "block";
    txtedit.style.display = "none";
}
function textedit(){
    let imgedit = document.querySelector(".sidebarX");
    let txtedit = document.querySelector(".sidebar");
    imgedit.style.display = "none";
    txtedit.style.display = "block";
}
function closeform(){
    let form = document.querySelector(".form");
        form.style.display = "none";
}
function closebackground(){
    let background = document.querySelector(".backgrounds");
       background.style.display = "none";
}


      document.getElementById("download").addEventListener("click", function () {
      const resultDiv = document.querySelector(".card");

      html2canvas(resultDiv).then(canvas => {
        const link = document.createElement("a");
        link.download = "birthday_card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    });


    function back(){
        window.history.back();
    }