let dog = "Dog";
let cow = "Cow";
let chinchilla = "Chinchilla";
let age1 = document.getElementById('age1');

function calculateAge(animalName, animAge) {
    age1 = document.getElementById('age1').value;
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




// const test = calculateAge(cow,10);
// const test1 = calculateAge(dog,5);
// const test2 = calculateAge(chinchilla,15);