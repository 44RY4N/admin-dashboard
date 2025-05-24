const profileImage = document.querySelector(".greeting>img");
const overlay = document.querySelector(".overlay");

profileImage.addEventListener("click",toggleZoom)
overlay.addEventListener("click",toggleZoom)
function toggleZoom(){

if(profileImage.classList.contains("zoomed")){
        profileImage.classList.remove("zoomed");
        overlay.style.display = "none";
        return;
    }
    else{
    profileImage.classList.add("zoomed")
    overlay.style.display = "block";
    }

}