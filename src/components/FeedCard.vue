<template>
  <div id="card">
    <div class="columns is-mobile">
      <div class="column">
        <img :src="img" alt="Profile photo" /><br />
        <p>{{ userName }}</p>
      </div>
      <div class="column">
        <p class="title is-6">Day</p>
        <p>{{ day }}</p>
      </div>
      <div class="column">
        <p class="title is-6">Status</p>
        <p class="title is-6" style="color:#FC5766">{{ status }}</p>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column">
        <div class="column">
          <p><span class="title is-6">Update: </span>{{ update }}</p>
        </div>
      </div>
      <div class="column">
        <p class="title is-6">Feeling</p>
        <p class="icon">{{ feel }}</p>
      </div>
      <div class="column">
        <p class="title is-6">Infection</p>
        <p>{{ infection }}</p>
      </div>
    </div>
    <hr />
    <div class="columns is-mobile">
      <div class="column">
        <ul class="primary">
          <li v-for="com in comments" :key="com">
            {{ com }}
          </li>
        </ul>
      </div>
    </div>
    <div class="columns is-mobile is-8">
      <div class="column is-9">
        <textarea
          class="textarea is-primary is-small"
          placeholder="Comment here"
          rows="1"
          v-model="comment"
        ></textarea>
      </div>
      <div class="column">
        <button
          class="button is-primary is-light is-small"
          @click.prevent="addComment"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedCard",
  props: {
    userName: String
  },
  data() {
    return {
      img: "https://bulma.io/images/placeholders/64x64.png",
      status: "Recovered",
      day: 25,
      infection: "COVID-19",
      feels: "happy",
      update: "Finally recovered",
      comment: "",
      comments: []
    };
  },
  computed: {
    feel: function() {
      return this.$store.getters.getFeel[this.feels];
    }
  },
  methods: {
    addComment: function() {
      var x = "Username: " + this.comment;
      this.comments.push(x);
      this.comment = "";
    }
  }
};
</script>

<style scoped lang="scss">
#card {
  box-shadow: 5px 5px 10px grey !important;
  margin-top: 20px;
  border-radius: 10px;
}
img {
  border-radius: 100px;
}

.icon {
  font-size: 3em;
}
textarea {
  margin-left: 20px;
}
ul {
  text-align: left;
  margin-left: 20px;
}
</style>
