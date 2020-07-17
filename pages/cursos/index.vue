<template>
  <div :style="{ 'backgroundImage': `url(${require('@/static/image/logo-bg.png')})`}" class="cursos">
    <section class="hero">
      <span class="subtitle">Alcance o próximo level</span>
      <h3 class="pretitle">Cursos</h3>
      <h1 class="title">Presenciais</h1>
    </section>

    <section class="cursos-list">
      <div v-for="(curso, index) in cursos" class="curso" :key="index">
        <div class="img-wrapper">
          <img class="img" :src="require(`@/static/image/cursos/${curso.img}`)" :alt="curso.title">
        </div>

        <nuxt-link :to="'/cursos/' + curso.slug" class="description">
          <h4 class="category">{{ curso.category }}</h4>
          <h2 class="title">{{ curso.titulo }}</h2>
          <span class="date">{{ curso.date }}</span>
        </nuxt-link>

      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'Cursos',
  head: {
    title: 'Cursos presenciais | Plenitude Consultoria'
  },
  computed: {
    ...mapGetters(["cursos"])
  }
};
</script>

<style lang="scss">
.cursos {
  background-position: -10% 2%;
  background-repeat: no-repeat;

  @include max('tablet') {
    background-position: -50% 2%;
  }

  @include max('phablet') {
    background-position: 150% 2%;
  }

  .hero {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include max('phone') {
      min-height: 93vh;
    }

    .subtitle {
      @include p-type('normal', 1, 'reg', #FFF);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      opacity: .7;

      @include max('phablet') {
        font-size: 0.7rem;
      }

      &::before, &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        background: #FFF;
        margin: 0 20px;

        @include max('phablet') {
          margin: 0 5px;
        }
      }
    }

    .pretitle {
      padding-top: 20px;
      @include p-type(2rem, 1, 'bold', $p-color);
      text-transform: uppercase;
      letter-spacing: 45px;
      transform: translate3d(22.5px, 0, 0);

      @include max('tablet-wide') {
        transform: translate3d(12.5px, 0, 0);
        letter-spacing: 25px;
      }

      @include max('tablet') {
        transform: translate3d(7.5px, 0, 0);
        letter-spacing: 15px;
      }

      @include max('phone') {
        font-size: 2rem;
        transform: translate3d(7.5px, 0, 0);
        letter-spacing: 15px;
      }
    }

    .title {
      padding-top: 20px;
      @include p-type(5rem, 1, 'bold', #FFF);
      text-transform: uppercase;
      letter-spacing: 25px;

      @include max('tablet-wide') {
        padding-top: 15px;
        font-size: 3rem;
        letter-spacing: 15px;
        text-align: center;
      }

      @include max('tablet') {
        padding-top: 15px;
        font-size: 2.75rem;
        letter-spacing: 15px;
        text-align: center;
      }

      @include max('phone') {
        padding-top: 15px;
        font-size: 2rem;
        letter-spacing: 7.5px;
        text-align: center;
      }
    }
  }

  .cursos-list {
    width: 100%;
    padding: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @include max('tablet-wide') {
      padding: 0 5vw;
    }

    .curso {
      width: 50%;
      padding: 0 3%;

      @include max('tablet') {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      & + .curso {
        @include max('tablet') {
          margin-top: 50px;
        }
      }

      .img {
        display: flex;
        align-content: center;
        transform: translate3d(35px, 35px, 0);
        filter: brightness(80%);
        transition: all .2s ease;

        @include max('tablet') {
          transform: translate3d(0, 0, 0);
        }

        &:hover {
          filter: brightness(100%);
        }

        &-wrapper {
          border: 7px solid $p-color;
          transform: translate3d(-35px, -35px, 0);

          @include max('tablet') {
            border: none;
            transform: translate3d(0, 0, 0);
          }
        }
      }

      &:nth-child(2n) {
        align-self: flex-end;

        @include max('tablet') {
          align-self: center;
        }
      }

      .description {
        padding: 0 20px;
        transform: translate3d(0, -40px, 0);
        display: flex;
        flex-direction: column;

        .category {
          display: flex;
          align-items: center;
          @include p-type('small', 1.2, 'reg', #FFF);
          padding-bottom: 5px;

          &::before {
            content: '';
            display: block;
            width: 70px;
            height: 4px;
            background: $p-color;
            margin-right: 10px;
          }
        }

        .title {
          @include p-type(2rem, 1.2, 'semibold', #FFF);
          text-transform: uppercase;
          padding-bottom: 5px;

          @include max('tablet-wide') {
            font-size: 1.2rem;
          }

          @include max('tablet') {
            font-size: 1.4rem;
          }
        }

        .date {
          // align-self: flex-end;
          @include p-type('normal', 1.2, 'semibold', $p-color);
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
