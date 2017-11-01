<template>
  <div class="notes-detail" v-if="noteDetail">
    <header-component :logout-visible="true">
      <headline v-text="noteDetail.title"></headline>
    </header-component>
    <div class="notes-detail__text">
      <p v-text="noteDetail.text"></p>
    </div>

    <div class="notes-detail__quick-access" v-if="collapsed">
      <div class="notes-detail__buttons">
        <button-component :arrow="true" @click.native="back">
          Back to overview
        </button-component>
        <cta :arrow="true" @click.native="toggle">
          Add additional note
        </cta>
      </div>
    </div>

    <form class="notes-detail__quick-access" v-else @submit.prevent="add">
      <div class="notes-detail__input-group">
        <input-component v-model="note" name="title" type="text" label="Title" @update="update" :required="true" :errors="errors"></input-component>
        <input-component v-model="note" name="text" type="textarea" label="Text" @update="update" :required="true" :errors="errors"></input-component>
      </div>

      <div class="notes-detail__buttons">
        <button-component @click.native.prevent="toggle">
          Cancel
        </button-component>
        <cta :arrow="true">
          Add note
        </cta>
      </div>
    </form>

    <div class="notes-detail__comments">
      <comment></comment>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import headerComponent from '@/components/header';
  import headline from '@/components/headline';
  import cta from '@/components/cta';
  import inputComponent from '@/components/input';
  import buttonComponent from '@/components/button';
  import comment from '@/components/comment';

  export default {
    data() {
      return {
        collapsed: true,
        errors: [],
      };
    },
    computed: {
      noteDetail() {
        const id = parseFloat(this.$route.params.note);
        return this.$store.getters.notes.find(item => item.id === id); // eslint-disable-line
      },
      ...mapGetters(['note']),
    },
    created() {
      this.pull();
    },
    methods: {
      toggle() {
        this.collapsed = !this.collapsed;
      },
      back() {
        this.$router.push({
          name: 'notes',
        });
      },
      pull() {
        this.$store.dispatch('pull');
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
      comment,
      inputComponent,
    },
  };
</script>
<style lang="scss" rel="stylesheet/scss">
  @import '../../assets/styles/settings';

  .notes-detail {
    &__quick-access {
      display: flex;
      flex-direction: column;
    }

    &__buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
      }

      > *:last-of-type {
        margin-bottom: 20px;

        @media (min-width: 768px) {
          margin-bottom: 0;
        }
      }
    }

    &__comments {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid $gray-dark;
    }

    &__input-group {
      margin-bottom: 20px;
    }
  }
</style>
