import { useState } from "react";
import { useEffect } from "react";

const CAT_ENDPOINT_RANDOM_FACT_URL = "https://catfact.ninja/fact";

function App() {
  const [fact, setFact] = useState();
  const [firstWord, setFirstWord] = useState();
  let asd = 1;

  useEffect(() => {
    console.log(asd++);
    fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        setFirstWord(fact.split(" ")[0]);
      });
  }, []);

  return (
    <main className="grid grid-cols-1 place-content-center w-screen h-screen bg-black">
      <section className="flex flex-col justify-center items-center w-1/2 mx-auto h-[600px] bg-[#222] gap-8 rounded-[80px] text-white">
        <h1 className="font-bold text-4xl pt-8">Hechos y gatos</h1>
        {fact && <p className="px-16 text-lg">Fact: {fact}</p>}
        {fact && (
          <figure className="pb-8">
            <img
              src={`https://cataas.com/cat/says/${firstWord}?width=350&height=350`}
              alt={`Image of a cat, extracted using the first word of "${fact}"`}
            ></img>
          </figure>
        )}
      </section>
    </main>
  );
}

export default App;
