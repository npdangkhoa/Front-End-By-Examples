const person = {
    name : 'koha',
    walk(){
        console.log(this);
    }
}

// this keyword is a WINDOW object
const walkWindow = person.walk;
console.log(walkWindow);
walkWindow();


// this keyword is a PERSON object
const walkPerson = person.walk.bind(person);
console.log(walkPerson);
walkPerson();
