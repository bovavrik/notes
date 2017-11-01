<template>
  <form class="notes-add" @submit.prevent="add">
    <header-component :logout-visible="true">
      <headline>
        New note
      </headline>
    </header-component>

    <input-component v-model="note" name="title" type="text" label="Title" @update="update" :required="true" :errors="errors"></input-component>
    <input-component v-model="note" name="text" type="textarea" label="Text" @update="update" :required="true" :errors="errors"></input-component>

    <div class="notes-add__buttons">
      <button-component @click.native.prevent="back">
        Cancel
      </button-component>
      <cta :arrow="true">
        Add note
      </cta>
    </div>
  </form>
</template>
<script>
  import { mapGetters } from 'vuex';
  import headerComponent from '@/components/header';
  import headline from '@/components/headline';
  import cta from '@/components/cta';
  import inputComponent from '@/components/input';
  import buttonComponent from '@/components/button';

  export default {
    data() {
      return {
        errors: [],
      };
    },
    computed: {
      ...mapGetters(['note']),
    },
    methods: {
      back() {
        this.$router.push({
          name: 'notes',
        });
      },
      add() {
        this.$store.dispatch('push').then((data) => {
          if (data.status === 'error') {
            this.errors = data.errors;
          } else {
            this.$store.dispatch('set', {
              key: 'note',
              value: {},
            });
            this.errors = [];
            this.$router.push({
              name: 'notes',
            });
          }
        });
      },
      update({ key, value }) {
        const note = this.note;
        note[key] = value;

        this.$store.dispatch('set', {
          key: 'note',
          value: note,
        });
      },
    },
    components: {
      headerComponent,
      headline,
      cta,
      buttonComponent,
      inputComponent,
    },
  };
</script>
<style lang="scss" rel="stylesheet/scss">
  .notes-add {

    &__buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
</style>
