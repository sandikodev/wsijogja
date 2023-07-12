import { component$ } from "@builder.io/qwik";
import Counter from "../starter/counter/counter";

export default component$(() => (
  <div class="container container-center container-spacing-xl">
    <h3>
      You can <span class="highlight">count</span>
      <br /> on me
    </h3>
    <Counter />
  </div>
));
