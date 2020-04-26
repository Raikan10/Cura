<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Email">
          <b-input
            type="email"
            v-model="email"
            placeholder="Your email"
            required
          >
          </b-input>
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            v-model="password"
            password-reveal
            placeholder="Your password"
            required
          >
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">
          Close
        </button>
        <button class="button is-primary" @click.prevent="login">Login</button>
        <p class="subtitle">You don't have an account ? You can <router-link to="/signup">create one</router-link></p>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods: {
    login : function() {
      this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            if (user){
              console.log(user);
            }
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
    }
  }
};
</script>
