<template>
  <div class="container">
    <h1 class="title is-primary" style="margin-top:20px">Feed</h1>
    <div v-for="feed in feedUsers" :key="feed.email">
      <FeedCard :data="feed" style="margin-top:3em"></FeedCard>
    </div>
  </div>
</template>

<script>
import FeedCard from "./../components/FeedCard.vue";

export default {
  name: "Feed",
  components: {
    FeedCard
  },
  data() {
    return {
      feedUsers:[]
    }
  },
  beforeMount: function() {
    var db = this.$firebase.firestore();
    db.collection("users")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        this.feedUsers.unshift(doc.data());
    });
});


  }
};
</script>
