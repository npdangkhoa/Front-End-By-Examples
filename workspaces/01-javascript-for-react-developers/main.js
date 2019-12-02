const first = [1,2,3];
const second = [4,5,6];

const combined = [...first, 'and', ...second];

console.log(combined);

//Appy into Object
const firstName = {name: 'Mosh'};
const secondName = {job: 'Instructor'};

const combinedObject = {...firstName, ...secondName, location: 'Australia'};

console.log(combinedObject);