// Created an array of tweets. Each Tweet has a key:value pair of the tweet number, username, date of creation, and age. 
var tweets = [
    {
        tweet: "tweet 1:",
        username: "Joseph",
        created_at: "08-02-2019",
        age: 18
    },
    {
        tweet: "tweet 2:",
        username: "Jose",
        created_at: "08-02-2020",
        age: 19
    },
    {
        tweet: "tweet 3:",
        username: "John",
        created_at: "08-02-2021",
        age: 21
    },
    {
        tweet: "tweet 4:",
        username: "Jeff",
        created_at: "08-02-2022",
        age: 22
    },
    {
        tweet: "tweet 5:",
        username: "Jimmy",
        created_at: "08-02-2023",
        age: 23
    },
    {
        tweet: "tweet 6:",
        username: "Josh",
        created_at: "08-02-2024",
        age: 24
    },
    {
        tweet: "tweet 7:",
        username: "Jack",
        created_at: "08-02-2025",
        age: 25
    },
    {
        tweet: "tweet 8:",
        username: "Jacob",
        created_at: "08-02-2026",
        age: 26
    },
    {
        tweet: "tweet 9:",
        username: "Julian",
        created_at: "08-02-2027",
        age: 27
    },
    {
        tweet: "tweet 10:",
        username: "James",
        created_at: "08-02-2028",
        age: 28
    },
];

// Created a loop that will go through each of the tweets. In each loop, it will print out the tweet number, username, date of creation, and age. 
for (var index = 0; index < tweets.length; index++) {
    console.log(tweets[index].tweet);
    console.log("                ");
    console.log(tweets[index].username);
    console.log(tweets[index].created_at);
    console.log(tweets[index].age)
    console.log("................");
}