import Head from "next/head";
import { useState, useRef, useMemo } from "react";
import styles from "./index.module.css";
import "./api/completion"

const Loading = ({ isVisible }) => isVisible && <h2 className="mt-4 text-cente">Loading ...</h2>;

const Result = ({ result }) => {
  const answer = useMemo(() => {
    return result?.split(":").pop();
  }, [result]);
  return (
    <p className="mt-5 text-center" style={{ width: "60%" }}>
    {answer}
  </p>)
};

export default function Home() {
  const ref = useRef();
  const [isPending, loading] = useState(false);
  const [result, setResult] = useState(null);
  const [input, setInput] = useState("");

  async function generateTextCompletion() {
    const response = await fetch("/api/completion", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({ input })
    })
    const data = await response.json()
    return { result : data.result}
  }
  function handleOnSubmit(event) {
    event.preventDefault();
    loading(true);
    generateTextCompletion()
    .then(data => {
      loading(false);
      setResult(data.result)
      setInput("")
      ref.current.value = null
    })
    .catch(console.error)
  }

  return (
    <div>
      <Head>
        <title>Facts Search</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <h3>
          <span style={{ color: "#1abc9c" }}>Facts</span>{" "}
          <span style={{ color: "#e74c3c" }}>Search</span>
        </h3>
        <form onSubmit={handleOnSubmit}>
          <input
            ref={ref}
            type="text"
            name="title"
            placeholder="search ..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <Loading isVisible={isPending} input={input} />
        <Result result={result}/>
      </main>
    </div>
  );
}
