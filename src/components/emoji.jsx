import React from "react";

function Card(prams) {
    return (
        <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {prams.emoji}
          </span>
          <span>{prams.name}</span>
        </dt>
        <dd>
          {prams.meaning}
        </dd>
      </div>
    );
}

export default Card;