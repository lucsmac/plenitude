<template>
  <header class="header">
    <nuxt-link class="logo" to="/"><img src="~/static/image/logo-extend.png" alt="Plenitude"></nuxt-link>
    <Menu />
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss">
.header {
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px 50px 20px 50px;
  height: 75px;
  position: fixed;
  z-index: 1000;
  background-color: #000;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
  box-sizing: border-box;

  @include max('phone') {
    padding: 20px 5vw 0 5vw;
  position: fixed;
  }

  .logo {
    grid-column: 2 / 3;
    max-width: 160px;
    justify-self: center;

    @include max('phone') {
      grid-column: 1 / 2;
      width: 150px;
    }
  }
  .menu {
    grid-column: 3 / 4;
    justify-self: end;
  }
}
</style>
