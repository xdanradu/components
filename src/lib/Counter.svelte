<svelte:options tag="my-counter" />

<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<div class="box">

  <slot name="title" />
  <slot name="date"/>
  <slot name="content" />

  <button on:click={increment}>
    count is {count}
  </button>
</div>

<style>
  button {
    border: 3px solid #555;
    padding: 15px;
    background-color: crimson;
    color: white;
  }
  button:hover {
    cursor: pointer;
    background-color: orange;
  }
</style>