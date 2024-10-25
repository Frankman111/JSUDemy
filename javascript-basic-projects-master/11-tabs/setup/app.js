const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click",function(e){
    //console.log(e.target.dataset.id); gives the data id back
    const id = e.target.dataset.id;

    if(id){
        //remove active from all btns
        btns.forEach(function(btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        // hide the articles
        articles.forEach(function (article){
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});