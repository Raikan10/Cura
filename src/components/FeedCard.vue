<template>
  <div id="card">
    <div class="columns is-mobile">
      <div class="column">
        <img :src="img" alt="Profile photo" /><br />
        <p>{{ data.username }}</p>
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
          <p><span class="title is-6">Update: </span>{{ data.update }}</p>
        </div>
      </div>
      <div class="column">
        <p class="title is-6">Feeling</p>
        <p class="icon">{{ feels }}</p>
      </div>
      <div class="column">
        <p class="title is-6">Infection</p>
        <p>{{ data.infection }}</p>
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
    data: Object
  },
  data() {
    return {
      img: "https://picsum.photos/64",
      comment: "",
      comments: []
    };
  },
  computed: {
    day: function() {
      var today = new Date()
      console.log(today)
      console.log(this.data.infected_on)
      var Difference_In_Time = today.getTime()/1000 - this.data.infected_on.seconds; 
      return parseInt(Difference_In_Time / (3600 * 24));  

    },
    status: function(){
      return this.$store.getters.getStatus[0]
    },
    feels: function(){
      return this.$store.getters.getFeel[this.data.feel]
    },
    user: function(){
      return "You";
    }
  },
  methods: {
    addComment: function() {
      var x = this.user+": " + this.comment;
      this.comments.push(x);
      this.comment = "";
    }
  },
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
