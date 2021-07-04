function hidePage(id) {
  document.getElementById(id).style.display = 'none';
}

function highlight(el){
    el.style.borderColor = '#00df00';
  
}

function showPage(id) {
    var page = document.getElementById(id);
    if (page) {
        page.style.display = 'block';
        highlight(page);
    } else {
        console.warn('pagina nu exista', id);
    }
}

function hideAllPages() {
 var pages = Array.from(document.getElementsByClassName('page'));
    pages.forEach(function(page){
        hidePage(page.id);
    });
}

function showPage(id) {
    hideAllPages();
    show(id);
}

 show('home');