import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
   
      <p> This is paragraph 1
        <p3> Stay tuned for more updates..!</p3>
      </p>
    </main>
  );
}
