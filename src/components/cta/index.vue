<template>
  <button class="cta">
    <slot></slot>
    <svg class="cta__arrow cta__arrow--is-right" v-if="arrow"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         height="14px" viewBox="0 0 192 320">
      <polygon points="0,32.4 32.3,0 192,160 192,160 192,160 32.3,320 0,287.6 127.3,160 "/>
    </svg>
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

  .cta {
    font-size: 15px;
    font-family: inherit;
    font-weight: bold;
    background-color: $green;
    color: $white;
    border: 0;
    padding: 0 15px;
    border-bottom: 2px solid $green;
    height: 42px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-top: 3px solid transparent;
    border-bottom: 3px solid $green-dark;
    transition: .2s;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;

    @media (min-width: 768px) {
      align-self: baseline;
    }

    &:active {
      background-color: $green-dark;
    }

    &__arrow {
      fill: $white;
      transition: .3s;

      &--is-right {
        margin-left: 10px;
        transform: translate(0, 0);
      }
    }

    &:hover &__arrow--is-right {
      transform: translate(3px, 0);
    }
  }
</style>
