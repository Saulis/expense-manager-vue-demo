<template>
  <div id="history-panel">
    <link rel="import" href="./static/history-chart.html">
    <history-chart></history-chart>
  </div>
</template>

<script>
  export default {
    name: 'history-panel'
  }
</script>

<style scoped>
  #history-panel {
    display: block;
    background: #f8f9f9;
    padding: 20px 24px;
  }
</style>
