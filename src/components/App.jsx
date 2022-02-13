import React from "react";
import EmojiPedia from "../emojipedia";
import Footer from "./footer";
import Card from "./emoji";


function create(Object) {
  return (<Card key={Object.id} emoji={Object.emoji} name={Object.name} meaning={Object.meaning}/>);
}

function App() {
  return (
    <>
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

       {EmojiPedia.map(create)}
       
      </dl>
    </div>
    <Footer />
    </>
  );
}

export default App;
