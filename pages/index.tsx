import React, { useState } from "react";

function Home() {
  const [question, setquestion] = useState(null);
  const [answer, setanswer] = useState("");
  const [score, setscore] = useState(0);

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(answer);

    setscore((prevScore: number) => prevScore + 10)
   
  };

  
  return (
    <div>
      <div>
        <p>Question</p>
        <form action="" onSubmit={onSubmit}>
          {question}
          <label htmlFor="me">
            <input
              type="radio"
              name="answers"
              id="me"
              value={"me"}
              onChange={(e) => setanswer(e.target.value)}
            />
            option 1
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
