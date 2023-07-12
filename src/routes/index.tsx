import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Count from "~/components/count";
import Infofooter from "~/components/infofooter";

import Hero from "~/components/starter/hero/hero";
import Starter from "~/components/starter/next-steps/next-steps";

export default component$(() => {
  return (
    <>
      <Hero />
      <Starter id="showcase"/>

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <Count/>
      <Infofooter/>
    </>
  );
});

export const head: DocumentHead = {
  title: "WSI Jogja",
  meta: [
    {
      name: "Wahana Sarana Informatika",
      content: "Retail, Jual-Beli Komputer",
    },
  ],
};
