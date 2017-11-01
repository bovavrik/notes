<template>
  <div class="header">
    <slot></slot>
    <a class="header__logout" href="/" v-if="logoutVisible" @click.prevent="logout">
      Logout
    </a>
  </div>
</template>
<script>
  export default {
    props: [
      'logoutVisible',
    ],
    methods: {
      logout() {
        this.$auth.logout({
          redirect: '/login',
        });
      },
    },
  };
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../assets/styles/settings';

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &__logout {
      text-decoration: none;
      color: $blue;
      font-weight: bold;
      font-size: 14px;
    }
  }
</style>
