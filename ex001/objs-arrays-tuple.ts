const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Isabella',
    age: 19,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};


let favoriteActivities: string [];
favoriteActivities = ['Sports'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase)
}

