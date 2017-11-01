<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" rel="stylesheet/scss">
  @import './assets/styles/settings.scss';

  body {
    margin: 0;
    padding: 14px;
    box-sizing: border-box;
    background-color: $gray-light;
    font-family: 'Montserrat', sans-serif;

    @media(min-width: 768px) {
      padding: 32px;
    }
  }

  .app {

    @media (min-width: 768px) {
      max-width: 850px;
    }
  }
</style>
