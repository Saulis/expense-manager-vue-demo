<template>
  <div host="expenses-list">
    <link rel="import" href="./static/vaadin-grid/vaadin-grid.html">
    <link rel="import" href="./static/vaadin-grid/vaadin-grid-sorter.html">
    <link rel="import" href="./static/paper-fab/paper-fab.html">
    <link rel="import" href="./static/iron-icons/iron-icons.html">
    <link rel="import" href="./static/expenses-grid.html">

    <iron-media-query query="min-width: 1125px" v-on:query-matches-changed="_largeScreen = $event.detail.value"></iron-media-query>

    <x-grid ref="grid" id="expenses"></x-grid>
    <!--<paper-fab icon="add" on-tap="_showExpenseEditor" id="add-button"></paper-fab>-->
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
  [host="expenses-list"] {
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

  #expenses {
    flex: 1;
    color: var(--primary-text-color);
    max-height: calc(100vh - 64px);
    border: 0;
    height: 100%;
  }
  @media (max-width: 1124px) {
    #expenses {
      max-height: calc(100vh - 64px - 290px);
    }
  }
  @media (max-width: 900px) {
    #expenses {
      max-height: calc(100vh - 64px - 52px);
    }
  }
  @media (max-width: 600px) {
    #expenses {
      max-height: calc(100vh - 56px - 48px);
    }
  }
</style>
