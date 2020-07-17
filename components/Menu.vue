<template>
  <div @click="close = !close" class="menu">
    <div :class="{ burguerClose: close}" class="burguer-wrapper">
      <span class="burguer-1"></span>
      <span class="burguer-2"></span>
    </div>
    <nav v-if="close" class="nav">
      <nuxt-link class="nav-item" to="/">Início</nuxt-link>
      <nuxt-link class="nav-item" to="/quem-somos">Quem somos</nuxt-link>
      <nuxt-link class="nav-item" to="/cursos">Cursos presenciais</nuxt-link>
      <nuxt-link class="nav-item" to="/cursos-online">Cursos online</nuxt-link>
      <nuxt-link class="nav-item" to="/pos-graduacao">Pós-graduação</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      close: false,
    }
  }
};
</script>

<style lang="scss">
.menu {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .nav {
    padding: 40px 0 10px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: #000;

    &-item {
      @include p-type('small', 1, 'reg', #FFF);
      padding: 15px 45px;
      white-space: nowrap;
      width: 100%;
      transition: .15s all ease-in-out;

      @include max('phone') {
        padding: 12.5px 15px;
        font-size: 1.1rem;
      }

      &:hover {
        color: $d-color;
        background: $p-color;
      }
    }

    .nuxt-link-exact-active {
      color: $p-color;

      &:hover {
        color: $d-color;
      }
    }
  }

  .burguer {
    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      opacity: .75;
      transition: .2s ease;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }

    &-1, &-2 {
      width: 50px;
      height: 4px;
      background: white;
      border-radius: 5px;
    }

    &-2 {
      margin-top: 7px;
      width: 40px;
    }

    &Close {
      transform: translate3d(0, 10px, 0);

      .burguer-1 {
        width: 30px;
        transform: rotate(-45deg);
        transform-origin: 50% 0%;
      }
      .burguer-2 {
        width: 30px;
        transform: rotate(45deg);
        transform-origin: 100% 0%;
      }
    }
  }
}
</style>
