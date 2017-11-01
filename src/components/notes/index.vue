<template>
  <div class="notes">
    <header-component :logout-visible="true">
      <headline>
        Notes overview
      </headline>
    </header-component>
    <table-component :data="notes">
      <cta class="notes__cta" :arrow="true" @click.native="add">
        Create new note
      </cta>
    </table-component>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import headline from '@/components/headline';
  import headerComponent from '@/components/header';
  import cta from '@/components/cta';
  import tableComponent from '@/components/table';

  export default{
    methods: {
      add() {
        this.$router.push({
          name: 'notesAdd',
        });
      },
      pull() {
        this.$store.dispatch('pull');
      },
    },
    computed: {
      ...mapGetters(['notes']),
    },
    created() {
      this.pull();
    },
    components: {
      headline,
      headerComponent,
      cta,
      tableComponent,
    },
  };

</script>
<style lang="scss" rel="stylesheet">
  .notes {
    &__cta {
      order: -1;
      margin-bottom: 15px;

      @media (min-width: 768px) {
        margin-top: 15px;
        order: initial;
      }
    }
  }
</style>
