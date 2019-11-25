const address = {
    street: 'street',
    city: 'city',
    country: 'country'
};


const street = address.street;
const city = address.city;
const country = address.country;


const {street: str, city: ct, country: coun} = address;

console.log(street);
console.log(str);

console.log(city);
console.log(ct);

console.log(country);
console.log(coun);