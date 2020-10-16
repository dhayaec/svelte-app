<script lang="ts">
  import Tailwind from "./Tailwind.svelte";
  import { reverseStr } from "./utils/utils";

  export let name: string;
</script>

<Tailwind />

<main class="container mx-auto">
  <h1 class="text-2xl text-red-600 text-center">Hello {name}!</h1>
  <p>
    Visit the
    <a class="text-blue-600" href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <p>{reverseStr('test')}</p>
</main>
