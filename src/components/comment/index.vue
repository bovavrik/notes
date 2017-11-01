<template>
  <div class="comment">
    <div class="comment__avatar">
      <img class="comment__image" src="./img/avatar.jpg">
    </div>
    <div class="comment__bubble">
      <div class="comment__bubble-header">
        <h3 class="comment__bubble-headline">
          Sarah
        </h3>
        <h4 class="comment__bubble-headline">
          Today at 8.00
        </h4>
      </div>
      <div class="comment__bubble-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis, lorem vel fringilla tempus, velit ante gravida justo, at condimentum tortor enim eu ligula. Donec accumsan massa lorem, ac laoreet metus malesuada quis. Nam sit amet risus sit amet elit hendrerit euismod iaculis vel ante. In cursus urna egestas, interdum ligula tristique, gravida eros. Integer sed sapien ac diam fringilla luctus quis id justo. In lobortis, ipsum non pulvinar auctor, nulla nunc aliquam sem, a ullamcorper tortor sem pretium felis. Phasellus molestie pharetra pretium.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{};
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../assets/styles/settings';

  .comment {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    &__avatar {
      display: flex;
      justify-content: center;
      margin-bottom: -15px;
      position: relative;
      z-index: 1;

      @media (min-width: 768px) {
        justify-content: flex-start;
        margin: 0;
      }
    }

    &__image {
      width: 60px;
      height: 60px;
      border-radius: 30px;
    }

    &__bubble {
      display: flex;
      flex-direction: column;
      background-color: $white;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 2px 2px 1px rgba(0, 0, 0, .05);
      font-size: 15px;
      flex-grow: 1;
      position: relative;

      @media (min-width: 768px) {
        margin-left: 40px;
      }

      &::after {
        @media (min-width: 768px) {
          content: "";
          position: absolute;
          border-style: solid;
          display: block;
          width: 0;
          top: 20px;
          left: -12px;
          bottom: auto;
          border-width: 10px 12px 10px 0;
          border-color: transparent $white;
        }
      }
    }

    &__bubble-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__bubble-headline {
      font-size: 15px;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }

    &__bubble-content {
      color: $black-light;
    }
  }
</style>
