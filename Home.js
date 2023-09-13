var postButton = document.querySelector("#post-botton");
var posticon = document.querySelector("#post-botton>i");
postButton.addEventListener("click", function(){
    // postButton.style.backgroundColor = `red`;
    postButton.style.width = `80vh`;
    postButton.style.borderRadius = `10%`;
    postButton.style.height = `80vh`;
    postButton.style.clipPath = `polygon(0 0, 100% 0, 100% 100%, 0 100%)`;
    posticon.style.display = "none";
});
document.addEventListener("dblclick", function(){
    postButton.style.width = `8vh`;
    postButton.style.borderRadius = `50%`;
    postButton.style.height = `8vh`;
    posticon.style.display = "initial";
});
