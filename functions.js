function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function highlight(el){
    el.style.borderColor = '#00df00';
  
}

 var show = function show(id) {
    const page = document.getElementById(id);
    if (page) {
        page.style.display = 'block';
        highlight(page);
    } else {
        console.warn('pagina nu exista', id);
    }
    const oldLink = document.querySelector("a[data-page].active");
    if (oldLink) {
        oldLink.classList.remove("active");
    }
  
    const link = document.querySelector(`a[data-page=${id}]`);
    link.classList.add("active");
}

function hideAllPages() {
    const pages = Array.from(document.getElementsByClassName('page'));
    pages.forEach((page) => {
        hide(page.id);
    });
}

function showPage(id) {
    hideAllPages();
    show(id);
}
show('skills');

document.querySelector('#top-menu-bar').addEventListener("click", (e) => {
    if (e.target.matches("a")) {
        const id = e.target.getAttribute("data-page");
        showPage(id);
        highlight(e.target);
    }
})

window.skills = [];


function showSkills(skills){
    const skillsHTML = skills.map((skill) => {
        const favorit = skill.favorit ? 'class="favorit"' : ''; 
        const endorsements = skill.endorsements > 5 ? `<span>(${skill.endorsements})</span></li>` : '' ;
        return `<li ${favorit}>${skill.name} ${endorsements}</li>`;
    }).join('');

    document.querySelector("#skills ul").innerHTML = skillsHTML;
}

function sortSkillsByName(a, b)  {
    const aName = a.name.toUppercase();
        const aName = b.name.toUppercase();
        if (aName < bName) {
            return -1;
        }
        if (aName > bName) {
            return 1;
        }
        return 0;
} 

function sortSkillsByEndorsements(a, b) {
    return b.endorsements - a.endorsements;
}

fetch("data/skills.json").then((response) => {
    return response.json();
}).then((skills) => {
    skills.sort(sortSkillsByName);
    window.skills = skills;
    showSkills(skills); 
})

 