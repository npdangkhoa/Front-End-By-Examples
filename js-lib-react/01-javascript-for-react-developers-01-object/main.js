const person = {
    name : 'koha',
    walk(){
    },
    talk(){
        console.log(this.name);
    }
}


const targetName = 'name';
person[targetName] = 'Jone';
person.name = 'Smill';
person.talk();
