// Created an array of tweets. Each Tweet has a key:value pair of the tweet content, username (author), date of creation, and age. 
var tweets = [
    {
        tweet: "Old Navy commercials give us a glimpse of Hell",
        username: "Joseph",
        created_at: "08-02-2019",
        age: 18
    },
    {
        tweet: "If you've never tried to use 'the force' to get a an out-of-reach remote control, you're probably not as lazy as me.",
        username: "Jose",
        created_at: "08-02-2020",
        age: 19
    },
    {
        tweet: "When I die I hope as many people as possible use my death as an excuse to get out of work",
        username: "John",
        created_at: "08-02-2021",
        age: 21
    },
    {
        tweet: "Fries are basically edible cigarettes. Delicious edible cigarettes.",
        username: "Jeff",
        created_at: "08-02-2022",
        age: 22
    },
    {
        tweet: "You can always count on me. Unless standing up for you will make people hate me. Then you're on your own.",
        username: "Jimmy",
        created_at: "08-02-2023",
        age: 23
    },
    {
        tweet: "The Whole Foods next to this movie theater is perfect if you want to sneak in your own snacks, but don't want to save a lot of money.",
        username: "Josh",
        created_at: "08-02-2024",
        age: 24
    },
    {
        tweet: "What do you call it again where you think of a tweet while you're offline so you have to say it out loud? Conversation?",
        username: "Jack",
        created_at: "08-02-2025",
        age: 25
    },
    {
        tweet: "When they say 'all expenses paid' does that include bail?",
        username: "Jacob",
        created_at: "08-02-2026",
        age: 26
    },
    {
        tweet: "i haven't remembered a new person's name since 2011",
        username: "Julian",
        created_at: "08-02-2027",
        age: 27
    },
    {
        tweet: "It's always a little disconcerting how before you trust them with your life every airline checks you in using computers running Windows 95.",
        username: "James",
        created_at: "08-02-2028",
        age: 28
    }
];

// Created a function that will go through each of the tweets in the array. It will return each array that has an age value of equal to or more than 18. 
function over_18_or_no(tweet) {
    return tweet.age >= 18;
}

//Created a variable called adults_only that is all the arrays that had an age value of 18 or above. The filter array method checks each of the data arrays and sees which ones have an age value of 18 or above and filters them, leaving the ones that have an age value below 18 alone.
var adults_only = tweets.filter(over_18_or_no);
console.log(adults_only);

// Created a loop that will go through each of the tweets. In each loop, it will print out the tweet content, username (author), date of creation, and age. 
for (var index = 0; index < tweets.length; index++) {
    console.log(tweets[index].tweet);
    console.log(tweets[index].username);
    console.log(tweets[index].created_at);
    console.log(tweets[index].age)
    console.log("................");
}