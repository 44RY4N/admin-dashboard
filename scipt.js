const profileImage = document.querySelector(".greeting>img");
const overProfileImage = document.querySelector(".overlay>img");
const overlay = document.querySelector(".overlay");
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