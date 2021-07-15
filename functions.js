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
show('skills');

document.querySelector('#top-menu-bar').addEventListener("click", function(e){
    if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        showPage(id);
        highlight(e.target);
    }
})

var skills = [
    {name: "html", favorit: true, endorsements: 7},
    {name: "js", favorit: true, endorsements: 10},
    {name: "css"}
];


function showSkills(skills){
    var skillsHTML = skills.map(function(skill){
        var favorit = skill.favorit ? 'class="favorit"' : ''; 
        var endorsements = skill.endorsements > 5 ? `<span>(${skill.endorsements})</span></li>` : '' ;
        return `<li ${favorit}>${skill.name} ${endorsements}</li>`;
    }).join('');

    document.querySelector("#skills ul").innerHTML = skillsHTML;
}

showSkills(skills);

