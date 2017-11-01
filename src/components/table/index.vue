<template>
  <div class="table">
    <div class="table__row table__row--is-header">
      <div class="table__cell">
        Created by
      </div>
      <div class="table__cell">
        Title
      </div>
      <div class="table__cell">
        Date
      </div>
    </div>
    <div class="table__row" v-for="(item, key) in data" @click="open(item.id)" :key="item.id">
      <div class="table__cell" v-text="item.user.name"></div>
      <div class="table__cell" v-text="item.title"></div>
      <div class="table__cell" v-text="moment(item.created_at).calendar()"></div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  import moment from 'moment';

  export default{
    props: [
      'data',
    ],
    methods: {
      moment,
      open(note) {
        this.$router.push({
          name: 'note',
          params: {
            note,
          },
        });
      },
    },
  };
</script>
<style lang="scss" rel="stylesheet">
  @import '../../assets/styles/settings';

  .table {
    display: flex;
    flex-direction: column;
    background-color: $white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, .05);
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 15px;
    }

    &__row {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 10px;
      transition: .3s;

      @media (min-width: 768px) {
        padding: 0 18px;
      }

      &--is-header {
        background-color: $gray;
        font-weight: bold;
      }

      &:not(:first-of-type) {
        border-bottom: 1px solid $gray;
        cursor: pointer;
      }

      &:hover:not(:first-of-type) {
        background-color: $gray-light;
        text-decoration: underline;
      }
    }

    &__cell {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 40px;
      flex: 1 1 0;
    }
  }
</style>
