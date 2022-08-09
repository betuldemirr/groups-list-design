function handle2Click(e) {
    const h1_active = document.querySelector(".menu--icons .active");
    if(h1_active !==null){
        h1_active.classList.remove("active");
    }
   e.target.className = "active";
}
function handleClick(e) {
    const h2_active = document.querySelector(".header-icons .active");
    if(h2_active !==null){
        h2_active.classList.remove("active");
    }
   e.target.className = "active";
}