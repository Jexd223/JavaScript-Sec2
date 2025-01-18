const People = {
    getBudget: function (peopleArray) {
        let totalBudget = 0; // Use camelCase for variable naming
        for (let person of peopleArray) {
            totalBudget += person.budget;
        }
        return totalBudget;
    }
};

console.log(People.getBudget([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]));
