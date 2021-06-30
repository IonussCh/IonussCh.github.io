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
var i = 0;
    
    while(i < pageIds.length) {
        console.info('i = ', i);
        hidePage(pageIds[i++]);
    }
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