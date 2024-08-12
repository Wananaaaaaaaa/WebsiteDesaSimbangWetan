window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
