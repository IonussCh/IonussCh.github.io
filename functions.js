console.debug('inside functions.js');

function getinfo(name) {
    var mess = "salut Ionut";
    console.warn('inside get info', mess);
    return mess;
}


console.info(getinfo("ionut"));

var myName = "viorel";
var welcome = getinfo(myName);
console.info(welcome);


function showSkills() {
    document.getElementById('Home').style.display = 'none';
    document.getElementById('Skills').style.display = 'block';
};