let dog = "Dog";
let cow = "Cow";
let chinchilla = "Chinchilla";
age1 = "age1";
age2 = "age2";
age3 = "age3";

function calculateAge(animalName, animAge) {
    animAge = document.getElementById(animAge).value;
    if (animalName == dog) {
        animalHumanAge = animAge * 7
        document.getElementById('p1').innerHTML = "your dog is " + animalHumanAge + " years old in human years " + "(" + animAge + " dog years)!";
    } else if (animalName == cow) {
        animalHumanAge = animAge * 14
        document.getElementById('p2').innerHTML = "your cow is " + animalHumanAge + " years old in human years " + "(" + animAge + " cow years)!"
    } else {
        animalHumanAge = animAge * 25
        document.getElementById('p3').innerHTML = "your chinchilla is " + animalHumanAge + " years old in human years " + "(" + animAge + " chinchilla years)!"
    }
    return;
}

hide1="hide1";
hide2="hide2";
hide3="hide3";
hidden1="hidden1";
hidden2="hidden2";
hidden3="hidden3";

function hide(first,second,third) {
    document.getElementById(first).style.visibility="hidden";
    document.getElementById(second).style.visibility="hidden";
    document.getElementById(third).style.visibility="visible";
    document.getElementById("back").style.visibility="visible";
    document.getElementById("heading").style.visibility="hidden";
    return;
}

function show() {
    document.getElementById("hide1").style.visibility="visible";
    document.getElementById("hide2").style.visibility="visible";
    document.getElementById("hide3").style.visibility="visible";
    document.getElementById("back").style.visibility="hidden";
    document.getElementById(hidden1).style.visibility="hidden";
    document.getElementById(hidden2).style.visibility="hidden";
    document.getElementById(hidden3).style.visibility="hidden";
    document.getElementById("heading").style.visibility="visible";
    return;
}

