<template>
  <div id="expenses-list">
    <link rel="import" href="./static/vaadin-grid/vaadin-grid.html">
    <link rel="import" href="./static/vaadin-grid/vaadin-grid-sorter.html">
    <link rel="import" href="./static/paper-fab/paper-fab.html">
    <link rel="import" href="./static/iron-icons/iron-icons.html">
    <link rel="import" href="./static/expenses-grid.html">

    <iron-media-query query="min-width: 1125px" v-on:query-matches-changed="_largeScreen = $event.detail.value"></iron-media-query>

    <x-grid v-bind2:items="filteredExpenses"></x-grid>
    <paper-fab icon="add" on-tap="_showExpenseEditor" id="add-button"></paper-fab>
  </div>
</template>

<script>
  export default {
    name: 'expenses-list',
    props: {
      activeItem: {
        type: Object
      },
      _largeScreen: {
        type: Boolean
      },
      filteredExpenses: {
        type: Array,
        default: function () {
          return ['foo', 'bar']
        }
      }
    },

    directives: {
      bind2: {
        bind: function (el, binding) {
          console.log(binding.value)
          el[binding.arg] = binding.value
        }
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
