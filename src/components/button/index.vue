<template>
  <button class="button">
    <svg class="button__arrow button__arrow--is-left" v-if="arrow"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         height="14px" viewBox="0 0 192 320">
      <polygon points="192,32.4 159.7,0 0,160 0,160 0,160 159.7,320 192,287.6 64.7,160 "/>
    </svg>
    <slot></slot>
  </button>
</template>
<script>
  export default {
    props: [
      'arrow',
    ],
  };
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../assets/styles/settings';

  .button {
    font-size: 15px;
    font-family: inherit;
    font-weight: bold;
    background-color: transparent;
    color: $black;
    padding: 0 15px;
    height: 42px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 3px solid $black;
    transition: .2s;
    cursor: pointer;
    outline: none;

    @media (min-width: 768px) {
      align-self: baseline;
    }

    &:hover {
      background-color: $black;
      color: $white;
    }

    &__arrow {
      fill: $black;
      transition: .3s;

      &--is-left {
        margin-right: 10px;
        transform: translate(0, 0);
      }
    }

    &:hover &__arrow {
      fill: $white;
    }

    &:hover &__arrow--is-left {
      transform: translate(-3px, 0);
    }
  }
</style>
