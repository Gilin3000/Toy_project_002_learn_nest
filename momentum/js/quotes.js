const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller"
    },
]

const quote = document.querySelector("#quote h3");
const author = document.querySelector("#quote h4");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
