<template>
  <div class="container is-fluid">
    <div class="columns is-tablet">
      <div class="column">
        <b-field label="Name">
          <b-input v-model="user.name"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Email">
          <b-input type="email" maxlength="30" v-model="user.email"> </b-input>
        </b-field>
      </div>
    </div>
    <div class="columns is-tablet">
      <div class="column">
        <b-field label="Username">
          <b-input type="text" maxlength="30" v-model="user.username"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Password">
          <b-input type="password" v-model="password" password-reveal>
          </b-input>
        </b-field>
      </div>
    </div>
    <div class="columns is-tablet">
      <div class="column">
        <b-field label="Infection">
          <b-select
            placeholder="Select an infection"
            rounded
            required
            v-model="user.infection"
          >
            <option value="COVID-19">Coronavirus (COVID-19)</option>
            <option value="Dementia">Dementia</option>
            <option value="Azheimer's">Azheimer's</option>
          </b-select>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Infected On">
          <b-datepicker
            placeholder="Select a date..."
            icon="calendar-today"
            required
            v-model="user.infected_on"
          >
          </b-datepicker>
        </b-field>
      </div>
    </div>
    <div class="columns is-tablet">
      <div class="column">
        <b-field label="Status">
          <b-select
            placeholder="How far along are you?"
            rounded
            required
            v-model="user.status"
          >
            <option value="0">Asymptomatic</option>
            <option value="1">Infected</option>
            <option value="2">Recovering</option>
            <option value="3">Recovered</option>
          </b-select>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Feel">
          <b-select
            placeholder="How do you feel right now?"
            rounded
            required
            v-model="user.feel"
          >
            <option value="happy">😄</option>
            <option value="sad">🙁</option>
            <option value="excited">😲</option>
            <option value="surprised">😌</option>
            <option value="relieved">🤩</option>
          </b-select>
        </b-field>
      </div>
      <div class="column">
        <b-field class="file">
          <b-upload v-model="file">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>Upload Profile Photo</span>
            </a>
          </b-upload>
          <span class="file-name" v-if="file">
            {{ file.name }}
          </span>
        </b-field>
      </div>
    </div>
    <div class="columns is-tablet">
      <div class="column">
    <b-field label="Medications">
      <textarea
        class="textarea"
        placeholder="Share what medicines made you better...."
        rows="1"
        v-model="user.meds"
      ></textarea>
    </b-field>
    <b-field label="Treatments">
      <textarea
        class="textarea"
        placeholder="Let the world know what steps you took... "
        rows="1"
        v-model="user.treats"
      ></textarea>
    </b-field>
    <b-field label="Testimonial">
      <textarea
        class="textarea"
        placeholder="Share your experiences..."
        rows="2"
        v-model="user.exp"
      ></textarea>
    </b-field>
      </div>
    </div>
    <div class="columns is-tablet">
      <div class="column">
        <b-button type="is-primary" @click.prevent="signUp">Submit</b-button>
      </div>
    <div class="column">
      <p style="color:red">{{errors}}</p>
    </div>
    </div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        username: "",
        infection: "",
        infected_on: [],
        status: "",
        feel: "",
        meds: "",
        treats: "",
        exp: "",
        update:"Just joined"
      },
      file: [],
      password: "",
      errors:"",
    };
  },
  methods: {
    signUp: function() {
      var isError = false
      this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.password)
        .catch(function(error) {
          // Handle Errors here.
          console.log("entered")
          isError = true
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          this.errors = errorMessage;
          console.log(error);
          // [END_EXCLUDE]
        });
      if(!isError)alert("Signed Up");

      //Handle Database now
      var db = this.$firebase.firestore();
      db.collection("users").add(this.user)
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
      this.user.name= "";
      this.user.email= "";
      this.password= "";
      this.user.username= "";
      this.user.infection= "";
      this.user.infected_on= [];
      this.user.status= "";
      this.user.feel= "";
      this.user.meds= "";
      this.user.treatments= "";
      this.user.exp= "";
      this.file= [];
      this.$router.push({ path: "/feed" });
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  text-align: left !important;
  margin-left: 10px;
}
</style>
