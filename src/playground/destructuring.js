
//OBJECT DESTRUCTURING
// const person ={
//     name: 'Myko',
//     age: '26',
//     location: {
//         city: 'Philippines',
//         temp: 92
//     }
// };
// const { name: firtName = 'Anonymous', age} = person;
// console.log(`${name} is ${age}`);

// const { city, temp: temperature} = person.location;
// if (city && temperature){
//     console.log(`Its ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName='Self-Published' } = book.publisher;
// console.log(publisherName);

const address = ['1299 S Noville Street', 'Philippines', 'Lanao del Norte', '9200'];

const [street, city, state, zip] = address;

console.log(`Youre are in ${city} ${state}`);