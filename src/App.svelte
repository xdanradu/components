<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  // import Counter from './lib/Counter.svelte'
  import './lib/Counter.svelte'
</script>

<main>
  <div class="card">
    <my-counter>
      <h1 class="h1" slot="title">123</h1>
      <p class="p" slot="date">456</p>
      <p class="comment" slot="content">789</p>
    </my-counter>
  </div>
</main>

<style lang="scss">
  @import "./style.scss";
  .h1 {
    color: blue;
  }

  .p {
    color: crimson;
    background-color: #dedede;
  }

  .comment {
    border: 1px solid green;
  }
</style>