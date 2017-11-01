<template>
  <form class="login" @submit.prevent="login">
    <headline>
      Login
    </headline>
    <input-component v-model="formData" name="email" type="text" label="Username" required="true" @update="update"></input-component>
    <input-component v-model="formData" name="password" type="password" required="true" label="Password" @update="update"></input-component>
    <div class="login__cta-area">
      <cta class="login__cta" :arrow="true">
        Login
      </cta>
      <div class="login__message" v-if="failed">
        You've entered incorrect username and or password.
      </div>
    </div>
  </form>
</template>
<script>
  import headline from '@/components/headline';
  import cta from '@/components/cta';
  import inputComponent from '@/components/input';

  export default {
    data() {
      return {
        formData: {},
        failed: false,
      };
    },
    components: {
      headline,
      cta,
      inputComponent,
    },
    methods: {
      login() {
        this.$auth.login({
          data: this.formData,
          success({ data }) {
            if (data.status === 'error') this.failed = true;
          },
          error() {
          },
          rememberMe: true,
          redirect: '/notes',
          fetchUser: true,
        });
      },
      update({ key, value }) {
        this.failed = false;
        this.$set(this.formData, key, value);
      },
    },
  };
</script>
<style lang="scss" rel="stylesheet">
  @import '../../assets/styles/settings';

  .login {

    &__cta-area {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
    }

    &__message {
      color: $red;
      font-size: 12px;
    }
  }
</style>