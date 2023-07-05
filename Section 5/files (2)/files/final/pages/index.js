import Head from "next/head";
import { useRef, useState } from "react";
import styles from "./index.module.css";

const Loading = ({ isVisible }) =>
  isVisible && <h2 className="mt-4 text-center">Loading ...</h2>;

const Result = ({ image, isVisible }) => {
  return (
    Boolean(isVisible && image) && (
      <div className="d-flex justify-content-center my-10" >
        <img
          className="h-350 w-350 rounded"
          src={image}
          width="350"
          height="350"
        />
      </div>
    )
  );
};
export default function Home() {
  const ref = useRef();
  const [isPending, loading] = useState(false);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  async function generate() {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();
    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }
    return { result: data.image_url };
  }

  async function onSubmit(event) {
    event.preventDefault();
    loading(true);
    try {
     
      generate(input)
        .then(setImage)
        .then(() => {
          ref.current.value = null;
          loading(false);
          setInput("");
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI-Image generator</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <main className={styles.main}>
        <h3>🖼️ - Image generator</h3>
        <form onSubmit={onSubmit}>
          <input
            ref={ref}
            type="text"
            placeholder="Enter text"
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="Generate image" />
        </form>
      </main>
      <Loading isVisible={isPending} input={input} />
      <Result isVisible={!isPending} image={image?.result} />
    </div>
  );
}
