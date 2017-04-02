<template>
  <div id="expenses-list">
    <link rel="import" href="./static/vaadin-grid/vaadin-grid.html">
    <link rel="import" href="./static/vaadin-grid/vaadin-grid-sorter.html">
    <link rel="import" href="./static/paper-fab/paper-fab.html">
    <link rel="import" href="./static/iron-icons/iron-icons.html">
    <link rel="import" href="./static/expenses-grid.html">

    <iron-media-query query="min-width: 1125px" v-on:query-matches-changed="_largeScreen = $event.detail.value"></iron-media-query>

    <x-grid ref="grid"></x-grid>
    <paper-fab icon="add" on-tap="_showExpenseEditor" id="add-button"></paper-fab>
  </div>
</template>

<script>
  export default {
    name: 'expenses-list',
    props: {
      expenses: {
        default: function () {
          return []
        }
      }
    },

    watch: {
      expenses: function (ex) {
        this.$refs.grid.items = ex
      }
    }
  }
</script>

<style>
  #expenses-list {
    position: relative;
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  #add-button {
    position: absolute;
    right: 32px;
    bottom: 32px;
    z-index: 2;
  }
  @media (max-width: 1124px) {
    #add-button {
      bottom: -28px;
    }
  }
  @media (min-width: 1125px) {
    #add-button {
      bottom: auto;
      top: -29px;
    }
  }
  @media (max-width: 900px) {
    #add-button {
      bottom: 32px;
    }
  }
</style>
