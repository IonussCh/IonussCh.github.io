function hidePage(id) {
    console.info('hide page', id);
    document.getElementById(id).style.display = 'none';
}

function highlightPage(el){
    el.style.borderColor = '#00df00';
  
}

function showPage(id) {
    console.info('show page', id);
    var page = document.getElementById(id);
    if (page) {
        page.style.display = 'block';
    } else {
        console.warn('pagina nu exista', id);
    }
}

function hideAllPages() {
    var pageIds = ['Projects', 'Skills', 'Languages', 'Home'
];
 pageIds.forEach(function(pageId){
     hidePage(pageId);
 })
}

function showHome(){
    hideAllPages()
    showPage ('Home');
}

function showProjects() {
    hideAllPages();
    showPage('Projects');
}

function showSkills() {
    hideAllPages();
    showPage('Skills');
}

function showLanguages() {
    hideAllPages();
    showPage('Languages');
}

function show(id) {
    hideAllPages();
    showPage(id);
}
showSkills();