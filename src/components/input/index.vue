<template>
  <div class="input__wrapper">
    <div class="input__label-wrapper">
      <div class="input__label" v-text="`${label}:`" :class="{ 'input__label--required' : required }"></div>
      <div class="input__error" v-text="error"></div>
    </div>

    <input v-if="type === 'text'" class="input" type="text"
           :class="`input--is-${type}`" :value="model" @input="update">
    <input v-else-if="type === 'password'" class="input" type="password"
           :class="`input--is-${type}`" :value="model" @input="update">
    <textarea v-else-if="type === 'textarea'" class="input"
              :class="`input--is-${type}`" :value="model" @input="update">
    </textarea>
  </div>
</template>
<script>
  export default {
    props: [
      'label',
      'required',
      'errors',
      'type',
      'value',
      'name',
    ],
    computed: {
      model: {
        get() {
          return this.value[this.name];
        },
        cache: false,
      },
      error() {
        if (this.errors && this.errors.hasOwnProperty(this.name)) { // eslint-disable-line
          return this.errors[this.name][0];
        }
        return '';
      },
    },
    methods: {
      update(e) {
        this.$emit('update', {
          key: this.name,
          value: e.currentTarget.value,
        });
      },
    },
  };
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../assets/styles/settings';

  .input {
    width: 100%;
    height: 40px;
    background-color: $white;
    border: 1px solid $gray-dark;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    padding: 0 10px;
    font-family: inherit;
    flex-grow: 1;

    &--is-textarea {
      padding: 10px;
      min-height: 100px;
    }

    &__label-wrapper {
      height: 30px;
      color: $black;
      font-size: 12px;
      font-weight: bold;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }

    &__label {

      &--required::after {
        content: '*';
        font-weight: bold;
        color: $red;
        margin-left: .3em;
      }
    }

    &__error {
      color: $red;
    }
  }
</style>
