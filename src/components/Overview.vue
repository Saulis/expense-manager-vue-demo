<template>
  <div host="overview-page">
    <link rel="import" href="./static/iron-localstorage/iron-localstorage.html">
    <link rel="import" href="./static/iron-ajax/iron-ajax.html">
    <link rel="import" href="./static/paper-header-panel/paper-header-panel.html">
    <link rel="import" href="./static/paper-toolbar/paper-toolbar.html">
    <link rel="import" href="./static/vaadin-pouchdb/vaadin-pouchdb.html">
    <link rel="import" href="./static/paper-button/paper-button.html">

    <vaadin-pouchdb ref="db" :dbname="dbLocal" :remote="dbRemote" @remote-changed="$event.target.query()" @data-changed="expenses = $event.detail.value" @status-changed="status = $event.detail.value"></vaadin-pouchdb>
    <iron-ajax handle-as="json" :url="dbUrl" @response="_handleBackendResponse" auto></iron-ajax>

    <paper-header-panel>
      <paper-toolbar>
        <h1>Expense Manager</h1>
        <iron-icon id="sync" icon="notification:sync" hidden="[[_hideSyncIcon(status)]]" title="Syncing…"></iron-icon>

        <span class="flex"></span>

        <paper-button on-tap="_openInfoWindow" class="about-button">Info</paper-button>
        <paper-button @tap="_logout" class="logout-button">Logout</paper-button>
      </paper-toolbar>

      <div class="content">
        <filters-toolbar id="filters-toolbar" :total-owed="totalOwed" merchants="[[merchants]]" v-bind:filters="filters" expenses="[[expenses]]"></filters-toolbar>
        <content-panel id="content-panel" v-bind:filters="filters" :total-owed="totalOwed" :expenses="expenses"></content-panel>
      </div>

    </paper-header-panel>

    <!--<expense-editor id="expenseEditor" merchants="[[merchants]]" db="[[_db]]" route="{{subroute}}"></expense-editor>-->
    <paper-toast id="saveNotification"></paper-toast>
    <info-dialog id="info"></info-dialog>
    <iron-localstorage ref="localStorage" name="expense-manager-db-id"></iron-localstorage>
  </div>
</template>

<script>
  import InfoDialog from './InfoDialog'
  import FiltersToolbar from './FiltersToolbar'
  import ContentPanel from './ContentPanel'

  export default {
    name: 'overview-page',
    components: {InfoDialog, FiltersToolbar, ContentPanel},
    props: ['dbId', 'filters'],

    data: function () {
      return {
        dbLocal: {
          type: String
        },
        dbRemote: String,
        expenses: {
          type: Array,
          default: function () {
            return []
          }
        },
        status: String
      }
    },

    computed: {
      dbUrl: function () {
        return 'https://expense-manager.demo.vaadin.com/api/db/' + this.dbId
      },

      totalOwed: function () {
        if (!this.expenses.length) {
          return '$0.00'
        }

        var total = this.expenses.filter(function (exp) {
          return exp.status === 'new'
        }).map(function (exp) {
          return exp.total
        })
        .reduce(function (a, b) {
          return a + b
        }, 0)
        return '$' + total.toFixed(2)
      }
    },

    methods: {
      _logout: function () {
        this.$refs.localStorage.value = null
        this.$router.push('/')
      },

      _handleBackendResponse: function (evt) {
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        var rsp = evt.detail.response
        if (rsp && rsp.backend_db_id) {
          // Setting these, makes couchdb connect to local & remote DB and start syncing
          this.dbLocal = 'db_' + this.dbId
          this.dbRemote = rsp.couchdb_db_url

          if (rsp.new_db) {
            this._showInfo = true
          }
        }
      },

      _handleBackendError: () => {
        // TODO
      }
    }
  }
</script>

<style scoped>
 [host="overview-page"] {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

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
