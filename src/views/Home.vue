<template>
  <div class="home columns is-desktop">
    <section
      class="hero is-fullheight is-primary has-background column is-full"
    >
      <img
        src="@/assets/back1.jpg"
        alt="Simple logo"
        class="hero-background is-transparent"
      />
      <div class="hero-body">
        <div class="container">
          <img src="@/assets/logo.png" />
          <h1 class="title">
            Cura
          </h1>
          <h2 class="subtitle">
            Know whats coming from real people
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.t-card {
  opacity: 10%;
  z-index: 0;
}
.hero.has-background {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
.hero-background.is-transparent {
  opacity: 0.3;
}
</style>
