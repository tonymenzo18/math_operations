// TASK 1
let book = {
    title: "The Maze Runner",
    author: "James Dashner",
    pages: 375,
    isRead: false,
};

book.isRead = true;
book.genre = "Science Fiction";

console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);

console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);

console.log(book);

// TASK 2
let movies = [
    {
        title: "Titanic",
        director: "James Cameron",
        year: 1997
    },
    {
        title: "Star Wars",
        director: "George Lucas",
        year: 1977
    },
    {
        title: "Avengers",
        director: "Russo brothers",
        year: 2021
    }
];

movies.push({title: "Avatar", director: "James Cameron", year: 2009});
movies[0].year = 2023;

console.log(movies[1].title);

console.log(movies);

// TASK 3
let student = {
    name: "Anthony",
    age: 23,
    subjects: ["Math", "Science", "History"]
};

student.subjects.push("PE");

console.log(student.subjects[0]);

console.log(student);

// TASK 4
let recipe = {
    name: "Pasta Salad",
    ingredients: [
        {
            name: "Spiral Pasta",
            quantity: "1 pound"
        },
        {
            name: "salad dressing",
            quantity: "16 ounce"
        },
        {
            name: "cherry tomatoes",
            quantity: "2 cups"
        }
    ],
    isVegetarian: true
};

recipe.ingredients.push({name: "seasoning mix", quantity: "6 tablespoons"});

console.log(recipe.ingredients[1].name);

console.log(recipe);