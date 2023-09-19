import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world! Jilesh here</h1>
      <Counter />
      <p>
        Visit{" "}
        <p1>
          This is paragraph 1.
        </p1>
        to learn how to build SolidStart apps.
      </p>
      <p2> This is paragraph 2..</p2>
    </main>
  );
}
