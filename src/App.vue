<template>
  <div id="app">
    <b-navbar class="is-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="./assets/logo.png" alt="logo" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/feed' }">
          Feed
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/cure' }">
          Cures
        </b-navbar-item>
        <b-navbar-item href="#">
          People
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item href="#">
          <b-icon icon="account"></b-icon>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <div class="buttons" v-if="!this.$firebase.auth().currentUser">
            <a class="button is-primary" @click.prevent="toSignUp">
              <strong>Sign up</strong>
            </a>
            <section>
              <a class="button is-light" @click="isComponentModalActive = true">
                Log in
              </a>
              <b-modal
                :active.sync="isComponentModalActive"
                has-modal-card
                trap-focus
                :destroy-on-hide="false"
                aria-role="dialog"
                aria-modal
              >
                <Login></Login>
              </b-modal>
            </section>
          </div>
          <div class="buttons" v-if="this.$firebase.auth().currentUser">
          <a class="button is-light" @click="logOut">
                Log Out
              </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  components: {
    Login
  },
  data() {
    return {
      isComponentModalActive: false
    };
  },
  computed: {
    isLogin:function(){
      var currentUser = this.$firebase.auth().currentUser;
      if(currentUser)return true;
      return false;
    }
  },
  methods: {
    toSignUp: function() {
      this.$router.replace({ path: "/signup" });
    },
    logOut: function() {
      this.$firebase.auth().signOut().then(() => {
        this.$router.go('/')
      })
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
