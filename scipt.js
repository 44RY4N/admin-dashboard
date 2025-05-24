const profileImage = document.querySelector(".greeting>img");
const overProfileImage = document.querySelector(".overlay>img");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const originalParent = profileImage.parentElement;





let zoomAllowed =true;


profileImage.addEventListener("click",()=>{
    if (!zoomAllowed)
        return;
    toggleZoom();
})


overlay.addEventListener("click",toggleZoom)
function toggleZoom(){

if(profileImage.classList.contains("zoomed")){
        profileImage.classList.remove("zoomed");
        originalParent.appendChild(profileImage);
        overlay.style.display = "none";
        return;
    }
    else{
    profileImage.classList.add("zoomed")
    overlay.appendChild(profileImage); 
    overlay.style.display = "block";
    }

}



const profile = document.querySelector("#profile");
const home =document.querySelector("#home");

const header = document.querySelector(".header");


profile.addEventListener("click",toggleProfile)
home.addEventListener("click",untoggleProfile)

function toggleProfile(){
    header.classList.add("active");
    zoomAllowed =false;
}

function untoggleProfile(){
        if (zoomAllowed)
        return;
        zoomAllowed =true;
        setTimeout(() => {
        header.classList.remove("active");
    }, 800); // match animation duration

    header.classList.add("unactive");

    // Optional: remove it after animation
    setTimeout(() => {
        header.classList.remove("unactive");
    }, 600); // match animation duration
}


let dlt = document.querySelectorAll(".delete");
const par = document.querySelector(".item-container");








//  Delete button Event
dlt.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const item = e.target.closest(".item"); // Safely get the container
    if (item) {

        createPopUp(()=>{
             par.removeChild(item);
        })
     
    }
  });
});




function createPopUp(onConfirm){
    overlay2.style.display = "block";

   let Pop =  document.createElement("div");

   Pop.style.position = "fixed";
   Pop.style.top = "30vh";
   Pop.style.left = "40vw";
   Pop.style.height = "20vh"
   Pop.style.width = "25vw"
   Pop.style.backgroundColor = "white";
   Pop.textContent = "Are You Sure You Want TO Delete This Item?"
   Pop.style.borderRadius = "2rem"; 
   Pop.style.zIndex = "12";
   Pop.style.textAlign = "center";
   Pop.style.fontSize = "min(2vw,1.6rem)";
   Pop.style.padding = "2rem"
   Pop.style.display = "flex";
   Pop.style.flexDirection = "column";
   Pop.style.justifyContent = "space-around";
   Pop.style.borderLeft = "6px solid rgb(0, 191, 255)";
   Pop.style.borderRight = "6px solid rgb(0, 191, 255)";

let child = document.createElement("div")


    child.style.display = "flex";
    child.style.justifyContent = "center";
    child.style.gap = "2rem";
    

    let yes = document.createElement("button");
    yes.textContent = "YES"
    yes.style.fontSize = "min(2vw,1.2rem)";
    yes.addEventListener("click",()=>{
        overlay2.style.display = "none";
        overlay2.removeChild(Pop);
        onConfirm();
        return true;
    })

    let no = document.createElement("button");
    no.textContent = "Cancel"
    no.style.fontSize = "min(2vw,1.2rem)";
    no.addEventListener("click",()=>{
        overlay2.removeChild(Pop);
        overlay2.style.display = "none";
        return false;
    })


    child.appendChild(yes);
    child.appendChild(no);

    Pop.appendChild(child);

   overlay2.appendChild(Pop);

}












//New Button


const newBtn = document.querySelector(".newButton");

newBtn.addEventListener("click",createElem)

function createElem(){
    overlay2.style.display = "block";

   let ePop =  document.createElement("div");

   ePop.style.position = "fixed";
   ePop.style.top = "30vh";
   ePop.style.left = "30vw";
   ePop.style.height = "30vh"
   ePop.style.width = "35vw"
   ePop.style.backgroundColor = "white";
   ePop.textContent = "Enter New Project Details"
   ePop.style.borderRadius = "2rem"; 
   ePop.style.zIndex = "12";
   ePop.style.textAlign = "left";
   ePop.style.fontSize = "min(2vw,1.6rem)";
   ePop.style.padding = "2rem"
   ePop.style.display = "flex";
   ePop.style.flexDirection = "column";
   ePop.style.justifyContent = "space-around";
   
   ePop.style.borderLeft = "6px solid rgb(0, 191, 255)";
   ePop.style.borderRight = "6px solid rgb(0, 191, 255)";


   let title = document.createElement("input");
   title.type = "text"
   title.placeholder = "Enter Project Title"

    title.style.backgroundColor = "rgb(205, 205, 205)";
    title.style.width = "24vw";
    title.style.height = "4vh";
    title.style.borderRadius =  "2rem";
    title.style.border = "none";
    title.justifySelf = "center";
    title.style.paddingLeft = "1rem";

   ePop.appendChild(title);

    let mechild = document.createElement("div");


    mechild.style.display = "flex";
    mechild.style.flexDirection = "row-reverse";
    mechild.style.alignItems = "flex-end";
    mechild.style.justifyContent = "space-between";



 
   let desc = document.createElement("textarea");
   desc.type = "text"
   desc.placeholder = "Enter Project Title"

    desc.style.backgroundColor = "rgb(205, 205, 205)";
    desc.style.width = "24vw";
    desc.style.height = "14vh";
    desc.style.borderRadius =  "2rem";
    desc.style.border = "none";
    desc.style.padding = "1rem";

    let cnf = document.createElement("button");
    cnf.textContent = "Confirm "
    cnf.style.fontSize = "min(2vw,1.2rem)";
    cnf.style.height = "2.1rem";



    cnf.addEventListener("click",()=>{

        let newItem = document.createElement("div");

        newItem.classList.add("item");


        let newtxt = document.createElement("div");

        newtxt.classList.add("text");


        let newHead = document.createElement("div");
        newHead.classList.add("heading");
        newHead.textContent = title.value;


        let newCont = document.createElement("div");
        newCont.classList.add("content");
        newCont.textContent = desc.value;

        newtxt.appendChild(newHead);
        newtxt.appendChild(newCont);



        newItem.appendChild(newtxt);        // text appends


        let logos = document.createElement("div");
        logos.classList.add("logos");

        logos.innerHTML += `<svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>`;
        logos.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>`;
        logos.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 38.7c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-38.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 38.7c0 53-43 96-96 96l-48 0 0 70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-70.7-48 0c-53 0-96-43-96-96l0-38.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>`;
        logos.innerHTML += `<svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;


        newItem.appendChild(logos);








        par.appendChild(newItem);   //item appends



        dlt = document.querySelectorAll(".delete");
        dlt.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const item = e.target.closest(".item"); // Safely get the container
    if (item) {

        createPopUp(()=>{
             par.removeChild(item);
        })
     
    }
  });
});








        overlay2.removeChild(ePop);
        overlay2.style.display = "none";
    })




    mechild.appendChild(cnf);
   mechild.appendChild(desc);

    ePop.appendChild(mechild);

   overlay2.appendChild(ePop);




}