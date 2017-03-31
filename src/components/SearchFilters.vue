<template>
  <div host="search-filters">
    <link rel="import" href="./static/paper-checkbox/paper-checkbox.html">

    <div id="content">
      <div class="filters">
        <div class="title">Filter Expenses</div>

        <div class="row">
          <div class="date col">
            <!--<vaadin-date-picker id="from" auto-validate label="From" value="{{filters.start}}" max="{{filters.end}}"></vaadin-date-picker>-->
            <span>–</span>
            <!--<vaadin-date-picker id="to" auto-validate label="To" value="{{filters.end}}" min="{{filters.start}}"></vaadin-date-picker>-->
          </div>
        </div>

        <div class="row">
          <div class="total col">
            <!--<paper-input label="Min" value="{{filters.min}}" type="number" required step="any">-->
              <div prefix>$</div>
            </paper-input>
            <span>–</span>
            <!--<paper-input label="Max" value="{{filters.max}}" type="number" required step="any"></paper-input>-->
          </div>
        </div>

        <div class="row">
          <div class="merchants col">
            <!--<vaadin-combo-box label="Merchant" items="{{merchants}}" value="{{filters.merchant}}" id="merchantsSelect"></vaadin-combo-box>-->
          </div>
        </div>

        <div class="row">
          <div class="status col">
            <span class="caption">Status</span>
            <div class="checkboxes">
               
              <!--<template is="dom-repeat" items="[[statusOptions]]">
                <paper-checkbox on-change="_updateStatus" checked="[[_filtersContain(item.name, filters.*)]]" name$="[[item.name]]">[[item.label]]</paper-checkbox>
              </template>-->
            </div>
          </div>
        </div>

      </div>
    </div>
    <div id="footer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-filters'
  }
</script>

<style scoped>
  [host="search-filters"] {
    display: block;
    padding: 0 16px;
  }
  .col {
    width: 100%;
    box-sizing: border-box;
  }
  .col.total,
  .col.date {
    display: flex;
    align-items: flex-end;
  }
  .col span:not(.caption) {
    padding: 0 4px 12px;
    color: rgba(0, 0, 0, 0.3);
  }
  .date span:not(.caption) {
    padding: 0 4px 4px;
  }
  .date vaadin-date-picker {
    display: block;
    flex: 1;
  }
  .col.total div[prefix] {
    margin-right: 6px;
  }
  .col.total paper-input {
    flex: 1;
  }
  .row {
    margin-bottom: 16px;
  }
  .filters {
    padding-bottom: 16px;
  }
  .status .caption {
    display: block;
    font-size: 12px;
    margin: 32px 0 14px;
    color: rgba(0, 0, 0, 0.54);
  }
  .checkboxes {
    display: inline-block;
    margin-left: 8px;
  }
  .checkboxes> paper-checkbox {
    margin-right: 8px;
  }
  .title {
    display: none;
  }
  @media (min-width: 900px) {
    .title {
      display: block;
      padding: 14px 0;
      @apply(--section-title);
    }
    .checkboxes,
    .checkboxes> paper-checkbox {
      display: block;
    }
    .checkboxes> paper-checkbox {
      margin-bottom: 16px;
    }
    .filters {
      padding: 0 24px;
      position: absolute;
      left: -308px;
      width: 260px;
      background: #f8f9f9;
      height: calc(100vh - 64px);
      box-shadow: inset -4px 0 16px -9px rgba(0, 0, 0, 0.5);
    }
  }
</style>
