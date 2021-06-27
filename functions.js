function hidePage(id) {
    console.info('hide page', id);
    document.getElementById(id).style.display = 'none';
}

function showHome(){
    hidePage('Projects');
    hidePage('Skills');
    hidePage('Languages');
    document.getElementById('Home').style.display = 'block';
}

function showProjects() {
    hidePage('Skills');
    hidePage('Languages');
    hidePage('Home');
    document.getElementById('Projects').style.display = 'block';
}

function showSkills() {
    hidePage('Languages');
    hidePage('Home');
    hidePage('Projects');
    document.getElementById('Skills').style.display = 'block';
}

function showLanguages() {
    hidePage('Skills');
    hidePage('Home');
    hidePage('Projects');
    document.getElementById('Languages').style.display = 'block';
}