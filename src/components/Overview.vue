<template>
  <div class="overview-page">
    <link rel="import" href="./static/iron-localstorage/iron-localstorage.html">
    <link rel="import" href="./static/iron-ajax/iron-ajax.html">
    <link rel="import" href="./static/paper-header-panel/paper-header-panel.html">
    <link rel="import" href="./static/paper-toolbar/paper-toolbar.html">
    <!--<vaadin-pouchdb id="db" dbname="{{dbLocal}}" remote="{{dbRemote}}" data="{{expenses}}" status="{{status}}"></vaadin-pouchdb>-->

    <!--<app-location route="{{route}}" use-hash-as-path></app-location>
    <app-route route="{{route}}" pattern="/:dbId" data="{{routeData}}" tail="{{subroute}}">
    </app-route>-->

    <iron-ajax id="ajax" handle-as="json" v-on:response="_handleBackendResponse" v-on:error="_handleBackendError"></iron-ajax>

    <paper-header-panel>
      <paper-toolbar>
        <h1>Expense Manager</h1>
        <iron-icon id="sync" icon="notification:sync" hidden="[[_hideSyncIcon(status)]]" title="Syncing…"></iron-icon>

        <span class="flex"></span>

        <paper-button on-tap="_openInfoWindow" class="about-button">Info</paper-button>
        <paper-button on-tap="_logout" class="logout-button">Logout</paper-button>
      </paper-toolbar>

      <div class="content">
        <filters-toolbar id="filters-toolbar" total-owed="[[totalOwed]]" merchants="[[merchants]]" v-bind:filters="filters" expenses="[[expenses]]"></filters-toolbar>
        <!--<content-panel id="content-panel" filters="{{filters}}" total-owed="[[totalOwed]]" expenses="[[expenses]]"></content-panel>-->
      </div>

    </paper-header-panel>

    <!--<expense-editor id="expenseEditor" merchants="[[merchants]]" db="[[_db]]" route="{{subroute}}"></expense-editor>-->
    <paper-toast id="saveNotification"></paper-toast>
    <info-dialog id="info"></info-dialog>
    <iron-localstorage name="expense-manager-db-id" v-bind:value="dbId"></iron-localstorage>
  </div>
</template>

<script>
  import InfoDialog from './InfoDialog'
  import FiltersToolbar from './FiltersToolbar'

  export default {
    name: 'overview-page',
    components: {InfoDialog, FiltersToolbar},
    props: ['dbId', 'filters'],

    methods: {
      _handleBackendResponse: () => {
        // TODO
      },

      _handleBackendError: () => {
        // TODO
      }
    }
  }
</script>

<style scoped>
  paper-toolbar {
    background: var(--dark-primary-color);
    --paper-toolbar-content: {
      padding: 0 24px;
    }
  }

  paper-toolbar h1 {
    font-weight: 300;
    font-size: 24px;
  }

  paper-toolbar .logo {
    color: var(--default-primary-color);
    margin-left: 16px;
  }

  .flex {
    flex: 1;
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 900px) {
    .content {
      /* Make room for filters panel on the left. */
      padding-left: 308px;
      padding-right: 298px;
    }
  }

  @media (max-width: 1124px) {
    .content {
      padding-right: 0;
    }
  }

  #content-panel {
    flex: 1;
  }

  #sync {
    margin-left: 8px;
    animation: spin 0.8s linear infinite;
  }

  #sync[hidden] {
    display: none;
    animation: none;
  }

  @keyframes spin {
    100% {
      transform: rotate(-360deg);
    }
  }

  .logout-button,
  .about-button {
    font-size: 14px;
    color: var(--primary-color);
  }

  @media (max-width: 600px) {
    paper-toolbar {
      --paper-toolbar-content: {
        padding: 0 6px 0 16px;
      }
    }
    paper-toolbar h1 {
      font-size: 20px;
    }
  }
</style>
