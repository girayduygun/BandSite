const conversationComments = [
    {
      "name": "Connor Walton",
      "date": "02/17/2021",
      "comment": "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
      "name": "Emilie Beach",
      "date": "01/09/2021",
      "comment": "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
      "name": "Miles Acosta",
      "date": "12/20/2020",
      "comment": "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];

const commentsDiv = document.querySelector(".conversation__comments");

function displayComment(commentObj) {

    const comments__card = document.createElement("div")
    comments__card.className = "conversation__card";

    const comments__row = document.createElement("div");
    comments__row.className = "conversation__row";

    const column__picture = document.createElement("div");
    column__picture.className = "conversation__picture";
    comments__row.appendChild(column__picture);

    const profile__picture = document.createElement("div");
    profile__picture.className = "conversation__profile--pic";
    column__picture.appendChild(profile__picture);

    const column__details = document.createElement("div");
    column__details.className = "conversation__details";
    comments__row.appendChild(column__details);

    const column__namedate = document.createElement("div");
    column__namedate.className = "conversation__namedate";

    const comment__name = document.createElement("p");
    comment__name.innerText = commentObj["name"];
    comment__name.className = "conversation__namedate--name";
    column__namedate.appendChild(comment__name);

    const comment__date = document.createElement("p");
    comment__date.innerText = commentObj["date"];
    comment__date.className = "conversation__namedate--date";
    column__namedate.appendChild(comment__date);

    column__details.append(column__namedate);

    const comment__text = document.createElement("p");
    comment__text.innerText = commentObj["comment"];
    column__details.appendChild(comment__text);

    comments__card.appendChild(comments__row);
    commentsDiv.appendChild(comments__card);   
}

for (let i = 0; i < conversationComments.length; i++) {
  displayComment(conversationComments[i]);
  
}


let form = document.querySelector(".conversation__form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let newDate = new Date();
    let currentDate = (newDate.getMonth()+1)+'/'+newDate.getDate()+'/'+newDate.getFullYear();
    let newCommentObj = {
        "name": e.target.name.value,
        "date": currentDate,
        "comment": e.target.comment.value
    }

    conversationComments.unshift(newCommentObj);

    commentsDiv.innerText = "";

    for (let i = 0; i < conversationComments.length; i++) {
      displayComment(conversationComments[i]);
    }

    form.reset();
});