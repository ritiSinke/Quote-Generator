function changeTheme() {
    var element = document.body;
    element.classList.toggle("darkmode");
}


const quotes = {
    "Fun": [
        {
            quote: "Behind every great man is a woman rolling her eyes.",
            author: "Jim Carrey"
        },
        {
            quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
            author: "Oscar"
        },
        {
            quote: "I always arrive late at office, but I make up for it by leaving early.",
            autor: "Charles Lamb"
        },
        {
            quote: "A day without sunshine is like, you know, night.",
            author: "Steven Martin"
        },
        {
            quote: "If at first you don't succed, then skydiving definitely isn't for you.",
            author: "Steven Wright"
        }
    ],
    "Science": [
        {
            quote: "Somewhere, something incredible is waiting to be known.",
            author: "Carl Sagan"
        },
        {
            quote: "Research is what I'm doing when I don't know what I'm doing.",
            author: "Wernher von Barun"
        }, {
            quote: "The good thing about science is that it's true whether or not you beleive in it.",
            author: "Neil Tyson"

        },
        {
            quote: "Science is a way if thinking much more than it is a body of knowledge.",
            author: "Carl Sagan"
        }
    ],
    "Inspiration": [
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve-Jobs"

        },
        {
            quote: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            quote: "Don't watch the clock; do what it does. Keep going.",
            author: "Sam Levenson"
        },
        {
            quote: "You miss 100% of the shots you don't take.",
            author: "Wayne Gretzxy"
        }
    ]
};


function changeSize(){
    let slider=document.getElementById("slider");
    quote.style.fontSize=slider.value + "px";
    author.style.fontSize=slider.value + "px";

}