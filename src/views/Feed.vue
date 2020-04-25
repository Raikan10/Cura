<template>
  <div class="container">
    <h1 class="title is-primary" style="margin-top:20px">Feed</h1>
    <FeedCard userName="Raikan10"></FeedCard>
  </div>
</template>

<script>
import FeedCard from "./../components/FeedCard.vue";

export default {
  name: "Feed",
  components: {
    FeedCard
  }
};
</script>
