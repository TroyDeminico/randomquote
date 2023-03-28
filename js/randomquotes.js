function generateQuote() {
    const quotes = [
        {
            quote: "I am your father",
            author: "Darth Vader"
        },
        {
            quote: "Bond, James Bond",
            author: "James Bond"
        },
        {
            quote: "I'll be back",
            author: "The Terminator"
        },
        {

            quote: "To infinity and beyond",
            author: "Buzz Lightyear"
        },
        {
            quote: "You're going to need a bigger boat",
            author: "Martin Brody"
        }
    ];

    let currentQuote = Math.floor(Math.random() * quotes.length);
    // console.log(currentQuote);

    document.getElementById('quotation').innerHTML = "&quot;" + quotes[currentQuote].quote + "&quot;";
    document.getElementById('author').innerHTML = "-" + quotes[currentQuote].author;

}

window.onload = function() {
    generateQuote('generate').addEventListener('click', generateQuote);
    generateQuote();
}
