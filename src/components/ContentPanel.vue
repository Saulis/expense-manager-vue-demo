<template>
  <div host="content-panel">
    <expenses-list id="list" :expenses="expenses" filters="[[filters]]"></expenses-list>
    <history-panel id="history-panel" total-owed="[[totalOwed]]" :expenses="expenses"></history-panel>
  </div>
</template>

<script>
  import ExpensesList from './ExpensesList'
  import HistoryPanel from './HistoryPanel'

  export default {
    name: 'content-panel',
    components: { ExpensesList, HistoryPanel },
    props: {
      expenses: {
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style>
  [host="content-panel"] {
    display: flex;
    height: 100%;
  }
  #list {
    flex: 1;
    height: 100%;
  }
  #history-panel {
    border-left: 1px solid #ddd;
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.2) 6px 0px 16px -10px inset;
    z-index: 1;
  }
  @media (max-width: 1124px) {
    #history-panel {
      width: auto;
      position: absolute;
      bottom: 0;
      left: 308px;
      right: 0;
      border: none;
      height: 250px;
      padding: 20px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 16px -10px inset;
    }
    #list {
      margin-bottom: 290px;
      height: calc(100% - 290px);
    }
  }
  @media (min-width: 1125px) {
    #history-panel {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
  @media (max-width: 900px) {
    #history-panel {
      display: none;
    }
    #list {
      margin-bottom: 0;
      height: 100%;
    }
  }
</style>
