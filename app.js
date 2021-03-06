import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "π΄οΈ": "Person in Suit Levitating",
  "π§": "Person Climbing",
  "π§ββοΈ": "Man Climbing",
  "π§ββοΈ": "Woman Climbing",
  "π€Ί": "Person Fencing",
  "π": "Horse Racing",
  "β·οΈ": "Skier",
  "π": "Snowboarder",
  "ποΈ": "Person Golfing",
  "ποΈββοΈ": "Man Golfing",
  "ποΈββοΈ": "Woman Golfing",
  "π": "Person Surfing",
  "πββοΈ": "Man Surfing",
  "πββοΈ": "Woman Surfing",
  "π£": "Person Rowing Boat",
  "π£ββοΈ": "Man Rowing Boat",
  "π£ββοΈ": "Woman Rowing Boat",
  "π": "Person Swimming",
  "πββοΈ": "Man Swimming",
  "πββοΈ": "Woman Swimming",
  "βΉοΈ": "Person Bouncing Ball",
  "βΉοΈββοΈ": "Man Bouncing Ball",
  "βΉοΈββοΈ": "Woman Bouncing Ball",
  "ποΈ": "Person Lifting Weights",
  "ποΈββοΈ": "Man Lifting Weights",
  "ποΈββοΈ": "Woman Lifting Weights",
  "π΄": "Person Biking",
  "π΄ββοΈ": "Man Biking",
  "π΄ββοΈ": "Woman Biking",
  "π΅ ": "Person Mountain Biking",
  "π΅ββοΈ": "Woman Mountain Biking",
  "π€Έ ": "Person Cartwheeling",
  "π€ΈββοΈ ": "Man Cartwheeling",
  "π€ΈββοΈ ": "Woman Cartwheeling",
  "π€Ό ": "People Wrestling",
  "π€ΌββοΈ": "Men Wrestling",
  "π€ΌββοΈ ": "Women Wrestling",
  "π€½ ": "Person Playing Water Polo",
  "π€½ββοΈ ": "Man Playing Water Polo",
  "π€½ββοΈ ": "Woman Playing Water Polo",
  "π€Ύ ": "Person Playing Handball",
  "π€ΎββοΈ ": "Man Playing Handball",
  "π€ΎββοΈ ": "Woman Playing Handball",
  "π€Ή ": "Person Juggling",
  "π€ΉββοΈ": "Man Juggling",
  "π€ΉββοΈ": "Woman Juggling",
  "π§ ": "Person in Lotus Position",
  "π§ββοΈ ": "Man in Lotus Position",
  "π§ββοΈ ": "Woman in Lotus Position",
  "πͺ ": "Circus Tent",
  "πΉ ": "Skateboard",
  "πΌ ": "Roller Skate",
  "πΆ ": "Canoe",
  "ποΈ": "Reminder Ribbon",
  "ποΈ": "Admission Tickets",
  "π« ": "Ticket",
  "ποΈ": "Military Medal",
  "π ": "Trophy",
  "π ": "Sports Medal",
  "π₯ ": "1st Place Medal",
  "π₯ ": "2nd Place Medal",
  "π₯ ": "3rd Place Medal",
  "β½ ": "Soccer Ball",
  "βΎ ": "Baseball",
  "π₯ ": "Softball",
  "π ": "Basketball",
  "π ": "Volleyball",
  "π ": "American Football",
  "π ": "Rugby Football",
  "πΎ ": "Tennis",
  "π³ ": "Bowling",
  "π ": "Cricket Game",
  "π ": "Ice Hockey",
  "π₯ ": "Lacrosse",
  "π ": "Ping Pong",
  "πΈ ": "Badminton",
  "π₯ ": "Boxing Glove",
  "π₯ ": "Martial Arts Uniform",
  "π₯ ": "Goal Net",
  "β³ ": "Flag in Hole",
  "βΈοΈ": "Ice Skate",
  "π£ ": "Fishing Pole",
  "π½ ": "Running Shirt",
  "πΏ ": "Skis",
  "π· ": "Sled",
  "π₯ ": "Curling Stone",
  "π― ": "Direct Hit",
  "π± ": "Pool 8 Ball",
  "π? ": "Video Game",
  "π° ": "Slot Machine",
  "π² ": "Game Die",
  "π§© ": "Puzzle Piece",
  "βοΈ": "Chess Pawn",
  "π­ ": "Performing Arts",
  "π¨ ": "Artist Palette",
  "π§΅ ": "Thread",
  "π§Ά ": "Yarn",
  "πΌ ": "Musical Score",
  "π€ ": "Microphone",
  "π§ ": "Headphone",
  "π· ": "Saxophone",
  "πͺ ": "Accordion",
  "πΈ ": "Guitar",
  "πΉ ": "Musical Keyboard",
  "πΊ ": "Trumpet",
  "π» ": "Violin",
  "π₯ ": "Drum",
  "πͺ ": "Long Drum",
  "π¬ ": "Clapper Board",
  "πΉ ": "Bow and Arrow"
};
var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandeler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have in our data base";
    }
    setMeaning(meaning);
  }
  function emojiCLickHandeler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>SPORTSMOJJI</h1>
      <input class="box" onClick={emojiInputHandeler} />
      <h2>{meaning}</h2>
      <h1>emoji we know</h1>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiCLickHandeler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
