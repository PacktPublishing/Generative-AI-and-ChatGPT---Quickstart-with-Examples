import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert("Set up a GPT-3 model");
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
      </Head>

      <main className={styles.main}>
   
        <h3>As a question ?</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter input"
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="Answer" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
