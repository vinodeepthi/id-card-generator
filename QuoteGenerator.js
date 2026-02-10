 const quotes = [
            { quote: "\"The way to get started is to quit talking and begin doing.\"", author: "- Walt Disney" },
        { quote: "\"Your time is limited, don't waste it living someone else's life.\"", author: "- Steve Jobs" },
        { quote: "\"If life were predictable it would cease to be life, and be without flavor.\"", author: "- Eleanor Roosevelt" },
        { quote: "\"If you look at what you have in life, you'll always have more.\"", author: "- Oprah Winfrey" },
        { quote: "\"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.\"", author: "- James Cameron" },
        { quote: "\"Life is what happens when you're busy making other plans.\"", author: "- John Lennon" },
        { quote: "\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\"", author: "- Mother Teresa" },
        { quote: "\"When you reach the end of your rope, tie a knot in it and hang on.\"", author: "- Franklin D. Roosevelt" },
        { quote: "\"Always remember that you are absolutely unique. Just like everyone else.\"", author: "- Margaret Mead" }
            ];

            const colors = [
                "skyblue", "grey", "purple", "palevioletred", "darkred", "teal", "oliveDrab", "darkgreen", "black", "midnightblue"
            ];

            function getRandomElement(arr) {
                return arr[Math.floor(Math.random() * arr.length)];
            }

            function firstLine() {
                const now = new Date();
                const hours = now.getHours();
                let timeOfDay;
                if (hours >= 5 && hours < 12) {
                    timeOfDay = "morning";
                } else if (hours >= 12 && hours < 17) {
                    timeOfDay = "afternoon";
                } else {
                    timeOfDay = "night";
                }
                document.getElementById("Line").innerText = `Let's start our ${timeOfDay} with a new quote`;
            }

            function newQuote() {
                const randomQuote = getRandomElement(quotes);
                const randomColor = getRandomElement(colors);
                
                document.getElementById("quotation").innerText = randomQuote.quote;
                document.getElementById('author').innerText= randomQuote.author;
                document.body.style.backgroundColor = randomColor;
                document.getElementById("quote-box").style.color = randomColor;
                document.getElementById("QuoteButton").style.backgroundColor = randomColor;
                document.getElementById("QuoteButton").style.color = "#FFFFFF";
            }

            document.getElementById("QuoteButton").addEventListener("click", newQuote);

            firstLine();
            newQuote();  // Display the first quote when the page loads
        