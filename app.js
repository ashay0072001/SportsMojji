import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🕴️": "Person in Suit Levitating",
  "🧗": "Person Climbing",
  "🧗‍♂️": "Man Climbing",
  "🧗‍♀️": "Woman Climbing",
  "🤺": "Person Fencing",
  "🏇": "Horse Racing",
  "⛷️": "Skier",
  "🏂": "Snowboarder",
  "🏌️": "Person Golfing",
  "🏌️‍♂️": "Man Golfing",
  "🏌️‍♀️": "Woman Golfing",
  "🏄": "Person Surfing",
  "🏄‍♂️": "Man Surfing",
  "🏄‍♀️": "Woman Surfing",
  "🚣": "Person Rowing Boat",
  "🚣‍♂️": "Man Rowing Boat",
  "🚣‍♀️": "Woman Rowing Boat",
  "🏊": "Person Swimming",
  "🏊‍♂️": "Man Swimming",
  "🏊‍♀️": "Woman Swimming",
  "⛹️": "Person Bouncing Ball",
  "⛹️‍♂️": "Man Bouncing Ball",
  "⛹️‍♀️": "Woman Bouncing Ball",
  "🏋️": "Person Lifting Weights",
  "🏋️‍♂️": "Man Lifting Weights",
  "🏋️‍♀️": "Woman Lifting Weights",
  "🚴": "Person Biking",
  "🚴‍♂️": "Man Biking",
  "🚴‍♀️": "Woman Biking",
  "🚵 ": "Person Mountain Biking",
  "🚵‍♀️": "Woman Mountain Biking",
  "🤸 ": "Person Cartwheeling",
  "🤸‍♂️ ": "Man Cartwheeling",
  "🤸‍♀️ ": "Woman Cartwheeling",
  "🤼 ": "People Wrestling",
  "🤼‍♂️": "Men Wrestling",
  "🤼‍♀️ ": "Women Wrestling",
  "🤽 ": "Person Playing Water Polo",
  "🤽‍♂️ ": "Man Playing Water Polo",
  "🤽‍♀️ ": "Woman Playing Water Polo",
  "🤾 ": "Person Playing Handball",
  "🤾‍♂️ ": "Man Playing Handball",
  "🤾‍♀️ ": "Woman Playing Handball",
  "🤹 ": "Person Juggling",
  "🤹‍♂️": "Man Juggling",
  "🤹‍♀️": "Woman Juggling",
  "🧘 ": "Person in Lotus Position",
  "🧘‍♂️ ": "Man in Lotus Position",
  "🧘‍♀️ ": "Woman in Lotus Position",
  "🎪 ": "Circus Tent",
  "🛹 ": "Skateboard",
  "🛼 ": "Roller Skate",
  "🛶 ": "Canoe",
  "🎗️": "Reminder Ribbon",
  "🎟️": "Admission Tickets",
  "🎫 ": "Ticket",
  "🎖️": "Military Medal",
  "🏆 ": "Trophy",
  "🏅 ": "Sports Medal",
  "🥇 ": "1st Place Medal",
  "🥈 ": "2nd Place Medal",
  "🥉 ": "3rd Place Medal",
  "⚽ ": "Soccer Ball",
  "⚾ ": "Baseball",
  "🥎 ": "Softball",
  "🏀 ": "Basketball",
  "🏐 ": "Volleyball",
  "🏈 ": "American Football",
  "🏉 ": "Rugby Football",
  "🎾 ": "Tennis",
  "🎳 ": "Bowling",
  "🏏 ": "Cricket Game",
  "🏒 ": "Ice Hockey",
  "🥍 ": "Lacrosse",
  "🏓 ": "Ping Pong",
  "🏸 ": "Badminton",
  "🥊 ": "Boxing Glove",
  "🥋 ": "Martial Arts Uniform",
  "🥅 ": "Goal Net",
  "⛳ ": "Flag in Hole",
  "⛸️": "Ice Skate",
  "🎣 ": "Fishing Pole",
  "🎽 ": "Running Shirt",
  "🎿 ": "Skis",
  "🛷 ": "Sled",
  "🥌 ": "Curling Stone",
  "🎯 ": "Direct Hit",
  "🎱 ": "Pool 8 Ball",
  "🎮 ": "Video Game",
  "🎰 ": "Slot Machine",
  "🎲 ": "Game Die",
  "🧩 ": "Puzzle Piece",
  "♟️": "Chess Pawn",
  "🎭 ": "Performing Arts",
  "🎨 ": "Artist Palette",
  "🧵 ": "Thread",
  "🧶 ": "Yarn",
  "🎼 ": "Musical Score",
  "🎤 ": "Microphone",
  "🎧 ": "Headphone",
  "🎷 ": "Saxophone",
  "🪗 ": "Accordion",
  "🎸 ": "Guitar",
  "🎹 ": "Musical Keyboard",
  "🎺 ": "Trumpet",
  "🎻 ": "Violin",
  "🥁 ": "Drum",
  "🪘 ": "Long Drum",
  "🎬 ": "Clapper Board",
  "🏹 ": "Bow and Arrow"
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
