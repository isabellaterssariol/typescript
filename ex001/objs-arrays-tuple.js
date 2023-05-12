"use strict";
const person = {
    name: 'Isabella',
    age: 19,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase);
}
