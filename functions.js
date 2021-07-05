function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function highlight(el){
    el.style.borderColor = '#00df00';
  
}

function show(id) {
    var page = document.getElementById(id);
    if (page) {
        page.style.display = 'block';
        highlight(page);
    } else {
        console.warn('pagina nu exista', id);
    }
    var oldLink = document.querySelector("a[data-page].active");
    if (oldLink) {
        oldLink.classList.remove("active");
    }
  
    var link = document.querySelector(`a[data-page=${id}]`);
    link.classList.add("active");
}

function hideAllPages() {
    var pages = Array.from(document.getElementsByClassName('page'));
    pages.forEach(function(page){
        hide(page.id);
    });
}

function showPage(id) {
    hideAllPages();
    show(id);
}

 show('home');

 document.querySelector('#top-menu-bar').addEventListener("click", function(e){
    
    if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        showPage(id);
        highlight(e.target);
    }
 })
    
