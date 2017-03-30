<template>
  <div class="login-page">
    <link rel="import" href="./static/paper-input/paper-input.html">
    <link rel="import" href="./static/paper-button/paper-button.html">
    <link rel="import" href="./static/iron-a11y-keys/iron-a11y-keys.html">

    <iron-a11y-keys keys="enter" v-on:keys-pressed="_logIn"></iron-a11y-keys>
    <div id="header" class="header">
      <h1>Expense Manager</h1>
    </div>
    <div class="login">
      <paper-input v-bind:value="username" v-on:value-changed="username = $event.target.value" label="Username" name="username"></paper-input>
      <paper-input v-bind:value="password" v-on:value-changed="password = $event.target.value" label="Password" name="password" type="password"></paper-input>
      <span class="error-message">{{errorMessage}}</span>
      <paper-button id="login-button" v-on:click="_logIn" raised>Login</paper-button>
    </div>
    <div id="footer">
      <span class="fork-me">
          Fork me on <a href="https://github.com/vaadin/expense-manager-demo">GitHub</a>
        </span>
      <span class="built-with">
          Built with <a href="https://vaadin.com/elements">Vaadin Elements</a>
        </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login-page',
    props: ['errorMessage'],
    data () {
      return {
        username: 'foo',
        password: 'bar'
      }
    },

    methods: {
      _logIn: function (e) {
        this.$router.replace('/foobar')
      }
    }
    // props: {
    //   username: {
    //     type: String,
    //     default: 'foo'
    //   },
    //   password: {
    //     type: String
    //   }
    // }
  }
</script>

<style scoped>
  .login-page {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

   .login-page {
    background: var(--dark-primary-color);
    min-height: 400px;
  }
  
  .login paper-input {
    width: 100%;
    /*--paper-input-container-input-color: var(--text-primary-color);*/
    /*--paper-input-container-underline: {
      background: rgba(255, 255, 255, 0.2);
    }*/
  }

  .login paper-input > paper-input-container {
    color: red;
  }
  
  #login-button {
    margin: 20px 0 0 0;
    padding-left: 30px;
    padding-right: 30px;
    background: var(--primary-color);
    color: var(--text-primary-color);
  }
  
  .error-message {
    color: red;
  }
  
  .header {
    height: 36%;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .header::after {
    content: "";
    position: absolute;
    width: 100%;
    top: 36%;
    border-bottom: 2px solid var(--accent-color);
  }
  
  .header h1 {
    color: var(--text-primary-color);
    font-size: 24px;
    font-weight: 300;
    margin: 0 auto 16px;
    width: 300px;
  }
  
  .login {
    width: 300px;
    margin: 16px auto;
  }
  
  #footer {
    font-size: 14px;
    background: #3d4446;
    padding: 14px 26px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    position: absolute;
    bottom: 0;
    color: var(--text-primary-color);
  }

  #footer a {
    text-decoration: none;
    color: var(--primary-color);
  }

</style>
