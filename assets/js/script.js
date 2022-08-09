window.addEventListener("DOMContentLoaded", function(){
 
    const el1 = document.querySelectorAll(".menu--icons div");
    for (let k = 0; k < el1.length; k++) {
        el1[k].onclick = function() {
            var d = 0;
            while (d < el1.length) {
                el1[d++].className = 'icon';
            }
            el1[k].className = 'icon active';
        };
    }

    const el2 = document.querySelectorAll(".header-icons div");
    for (let i = 0; i < el2.length; i++) {
        el2[i].onclick = function() {
            var c = 0;
            while (c < el2.length) {
                el2[c++].className = 'icon';
            }
            el2[i].className = 'icon active';
        };
    }
})