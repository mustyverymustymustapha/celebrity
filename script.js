// meow :3
const gossipHeadlines = [
    "Rihanna Starts a Dance Academy: DNSCE Opens Its Doors!",
    "Kim Kardashian and Kanye West Adopt a Unicorn",
  //idk if theyre still even in a relationship if not my bad
    "Brad Pitt and Angelina Jolie Reunite for a Secret Movie Project",
    
];

function generateHeadline() {
    const randomIndex = Math.floor(Math.random() * gossipHeadlines.length);
    const selectedHeadline = gossipHeadlines[randomIndex];
    document.getElementById("headline-container").innerText = selectedHeadline;
}

