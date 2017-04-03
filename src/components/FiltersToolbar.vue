<template>
  <div host="filters-toolbar">
    <link rel="import" href="./static/paper-button/paper-button.html">
    <link rel="import" href="./static/paper-icon-button/paper-icon-button.html">

    <search-filters v-bind:filters="filters" status-options="[[_statusOptions]]" merchants="[[merchants]]" id="filters">
      <div id="buttons">
        <paper-button id="clear-button" on-tap="_clearFilters">Clear Filters</paper-button>
        <paper-button id="done-button" on-tap="_hideFilters" raised>Done</paper-button>
      </div>
    </search-filters>

    <div id="toolbar">
      <div id="total">
        <span>To be reimbursed</span>
        <span class="sum">[[totalOwed]]</span>
      </div>

      <div id="filters-toggle" on-tap="_toggleFilters">
        <span>Filters</span>
        <div class="count" has-filters="[[_hasFilters(appliedFilters)]]">[[appliedFilters]]</div>
        <paper-icon-button icon="filter-list"></paper-icon-button>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchFilters from './SearchFilters'

  export default {
    name: 'filters-toolbar',
    components: { SearchFilters },
    props: ['filters']
  }
</script>

<style scoped>
  [host="filters-toolbar"] {
    display: flex;
    position: relative;
    z-index: 10;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  #filters {
    flex: 1;
  }
  #toolbar {
    display: flex;
    align-items: center;
    background: #f8f9f9;
  }
  #total {
    z-index: 2;
    pointer-events: none;
  }
  #total .sum {
    font-size: 32px;
    font-weight: 300;
  }
  #filters-toggle {
    position: absolute;
    top: 4px;
    right: 16px;
    display: none;
    color: var(--primary-color);
    z-index: 3;
  }
  #filters-toggle .count {
    position: absolute;
    top: 6px;
    right: 0;
    z-index: 1;
    width: 16px;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    text-align: center;
    border-radius: 50%;
    background: var(--accent-color);
    color: var(--text-primary-color);
    font-size: 12px;
    transform: scale(0);
    transition: all 400ms cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  #filters-toggle .count[has-filters] {
    transform: scale(1);
  }
  #filters-caption {
    display: none;
  }
  #buttons {
    justify-content: space-between;
  }
  #done-button {
    background: var(--primary-color);
    color: var(--text-primary-color);
    text-align: center;
  }
  #clear-button {
    color: var(--primary-color);
  }
  @media (max-width: 1124px) {
    #total {
      display: none;
    }
  }
  @media (min-width: 901px) {
    [host] {
      height: 0;
    }
    #filters {
      max-height: none !important;
    }
    #buttons {
      position: absolute;
      left: -248px;
      width: 234px;
      text-align: right;
      padding: 9px 0;
    }
    #done-button {
      display: none;
    }
    #clear-button {
      font-size: 13px;
      text-transform: none;
    }
  }
  @media (max-width: 900px) {
    [host] {
      flex-direction: column-reverse;
    }
    #filters-toggle {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    #filters-toggle span {
      margin-right: 4px;
    }
    #toolbar {
      height: 48px;
      padding: 0 16px;
      flex-shrink: 0;
    }
    #total {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    #total> span:first-child {
      font-size: 12px;
    }
    #total .sum {
      font-size: inherit;
    }
    #filters {
      background: #f8f9f9;
      max-height: 4px;
      overflow: auto;
      transition: max-height 400ms cubic-bezier(0.4, 0.0, 0.2, 1);
      box-shadow: rgba(0, 0, 0, 0.2) 0px -10px 6px -10px inset;
    }
    #buttons {
      display: flex;
      margin: 0 0 32px;
    }
    #done-button {
      display: block;
    }
    [host="filters-toolbar"][expanded] #filters-caption {
      display: block;
      padding: 0;
      margin: 16px;
      font-size: 16px;
      font-weight: 400;
    }
  }
  @media (min-width: 1125px) {
    #total> span:first-child {
      font-weight: 400;
      font-size: 13px;
      display: block;
      border-bottom: 1px solid rgba(0, 0, 0, 0.13);
      padding-bottom: 6px;
      margin-bottom: 18px;
      margin-top: 4px;
      color: rgba(0, 0, 0, 0.54);
    }
    #toolbar {
      display: block;
    }
    #total {
      position: absolute;
      width: 250px;
      font-weight: 500;
      font-size: 18px;
      line-height: 1.4;
      padding: 12px 24px;
    }
    #total .sum {
      display: block;
      text-align: center;
      padding: 40px 0;
    }
  }
</style>
