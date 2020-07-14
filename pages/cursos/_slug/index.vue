<template>
  <div class="curso">
    <section class="hero">
      <span class="subtitle">{{ curso.category }}</span>
      <h1 class="title">{{ curso.title }}</h1>
      <nuxt-link to="/cursos" class="back">&larr; Voltar</nuxt-link>
    </section>

    <TwoLines class="twolines" />

    <section class="content">
      <img class="img" :src="require(`@/static/image/${curso.img}`)" :alt="curso.title">
      <div class="description">
        <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas nunc eu consequat tincidunt. Maecenas eget dignissim diam. Duis blandit volutpat faucibus. Ut blandit placerat velit quis mattis. Sed eleifend ipsum vel scelerisque bibendum. In eget sem convallis, ultrices enim quis, tempor nunc. Nullam id dolor elit. In fringilla diam nisl, vel viverra justo blandit sed. Nunc sit amet ex leo. Donec a tincidunt massa, vel ornare orci. Fusce semper lectus elementum accumsan iaculis. Nunc felis leo, efficitur ac ultricies imperdiet, iaculis quis justo. Morbi bibendum ornare nibh, eu volutpat nunc sodales a.</p>
        <p class="paragraph">Aenean eu dolor facilisis, sodales dui id, luctus libero. Sed ac facilisis est. Ut sit amet neque ut odio tincidunt dapibus. Proin eu ante vulputate, imperdiet sapien nec, venenatis turpis. Donec maximus vel nisl a vestibulum. Proin at quam mauris. Maecenas non posuere lorem, ut venenatis libero. In ac velit aliquam, feugiat velit ac, fringilla ipsum. In tincidunt sodales dignissim. Sed et nunc eu sapien viverra lacinia vitae id massa.</p>
      </div>
      <div class="speaker">
        <div class="speaker-img-wrapper">
          <img class="speaker-img" :src="require('@/static/image/rafael-mendes.png')" :alt="curso.title">
        </div>

        <div class="speaker-text">
          <h3 class="speaker-name">Rafael Mendes</h3>
          <h2 class="speaker-title">Palestrante</h2>
          <p class="speaker-description">Aenean eu dolor facilisis, sodales dui id, luctus libero. Sed ac facilisis est. Ut sit amet neque ut odio tincidunt dapibus. Proin eu ante vulputate, imperdiet sapien nec, venenatis turpis. Donec maximus vel nisl a vestibulum</p>
        </div>
      </div>

      <div class="local">
        <div class="local-info">
          <span class="info-display">Localização</span>
          <p class="info-item">Hotel</p>
          <p class="info-item">Rua</p>
          <p class="info-item">Bairro</p>
          <p class="info-item">Cidade - UF</p>
        </div>
        <div class="map"></div>
      </div>

      <div class="value-wrapper">
        <span class="value-display">Valor</span>
        <span class="value">{{formatedValue}}</span>
      </div>

      <a class="register-btn" href="#">Cadastre-se agora mesmo</a>
    </section>

    <Contato />
  </div>
</template>

<script>
export default {
  name: 'Curso',
  head() {
    return {
      title: `${this.curso.title} | Plenitude Consultoria`
    }
  },
  data() {
    return {
      curso:
        {
          img: 'cursos.jpg',
          title: 'Biomecânica aplicada ao treinamento de força e lesões',
          category: 'Anatomia',
          date: '01/04/2020',
          value: 149,
        },
    };
  },
  methods: {
    getImg(urlImg) {
      return urlImg;
    },
  },
  computed: {
    formatedValue() {
      return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.curso.value);
    },
  },
};
</script>

<style lang="scss">
.curso {
  .hero {
    width: 100vw;
    padding: 200px 15vw 150px 15vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @include max('tablet-wide') {
      padding: 150px 5vw 100px 5vw;
    }

    .back {
      @include p-type('small', 1, 'semibold', #FFF);
      padding-top: 15px;
      cursor: pointer;
      transition: all .1s ease;

      &:hover {
        color: $p-color;
      }
    }

    .subtitle {
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
      @include p-type(2.5rem, 1.2, 'semibold', #FFF);
      text-transform: uppercase;
      padding-bottom: 5px;

      @include max('tablet') {
        font-size: 1.5rem;
      }
    }
  }

  .twolines {
    width: 100%;
    justify-content: center;
  }

  .content {
    width: 100%;
    padding: 150px 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include max('tablet-wide') {
      padding: 150px 10vw 0px 10vw;
    }

    @include max('phone') {
      padding: 150px 5vw 0px 5vw;
    }

    .img {
      width: 100%;
    }

    .description {
      margin-top: 60px;
      opacity: .9;

      .paragraph {
        @include p-type('normal', 1.2, 'reg', #FFF);

        & + .paragraph {
          padding-top: 20px;
        }
      }
    }

    .speaker {
      margin-top: 100px;
      padding: 60px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      justify-content: center;

      @include max('tablet') {
        grid-template-columns: 1fr;
        padding: 60px 0;
        gap: 0px;
      }

      &-img {
        display: flex;
        align-content: center;
        transform: translate3d(35px, 35px, 0);

        @include max('tablet') {
          transform: translate3d(25px, 25px, 0);
        }

        &-wrapper {
          border: 7px solid $p-color;
          transform: translate3d(-35px, -35px, 0);

          @include max('tablet') {
            justify-self: center;
            width: 70%;
            border: 5px solid $p-color;
            transform: translate3d(-25px, -25px, 0);
          }
        }
      }

      &-text {
        display: flex;
        flex-direction: column;
        justify-content: center;

        @include max('phone') {
          padding: 0 5vw;
        }
      }

      &-name {
        @include p-type('mid', 1, 'bold', #FFF);
        text-transform: uppercase;

        @include max('tablet') {
          padding-top: 30px;
        }
      }
      &-title {
        padding-top: 5px;
        @include p-type(.7rem, 1, 'semibold', #FFF);
        text-transform: uppercase;
        opacity: .7;
      }

      &-description {
        padding-top: 15px;
        @include p-type('normal', 1.2, 'reg', #FFF);
        opacity: .9;
      }
    }

    .local {
      margin-top: 90px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      @include max('tablet-small') {
        grid-template-columns: 1fr;
      }

      .info {
        &-display {
          display: block;
          @include p-type('mid', 1, 'semibold', $p-color);
          text-transform: uppercase;
          padding-bottom: 30px;
          padding-top: 5px;
        }

        &-item {
          @include p-type('normal', 1, 'semibold', #FFF);

          & + .info-item {
            padding-top: 5px;
          }
        }
      }

      .map {
        grid-column: 2 / -1;
        width: 90%;
        height: 250px;
        justify-self: center;
        background: gray;

        @include max('tablet-small') {
          grid-column: 1 / -1;
          width: 100%;
          margin-top: 30px;
        }
      }
    }

    .value {
      &-wrapper {
        padding: 150px 0 100px 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        @include max('phone') {
          padding: 150px 0 75px 0;
          font-size: 1rem;
        }
      }

      &-display {
        @include p-type(2rem, 1, 'bold', $p-color);
        text-transform: uppercase;
        display: flex;
        align-items: center;
        letter-spacing: 3px;

        @include max('phone') {
          font-size: 1.3rem
        }

        &::before, &::after {
          content: '';
          display: block;
          width: 100px;
          height: 5px;
          background: $p-color;
          margin: 0 20px;

          @include max('phone') {
            width: 50px;
            height: 3px;
          }
        }
      }

      letter-spacing: 3px;
      margin-top: 10px;
      @include p-type(4.5rem, 1, 'semibold', #FFF);

      @include max('phone') {
        font-size: 2.5rem
      }
    }

    .register-btn {
      @include p-type('mid', 1, 'bold', $d-color);
      padding: 15px 100px;
      text-transform: uppercase;
      background: $p-color;
      cursor: pointer;
      text-align: center;

      @include max('tablet') {
        padding: 15px 50px;
        font-size: 1.4rem;
      }

      @include max('phone') {
        padding: 15px 30px;
        font-size: 1rem;
      }
    }
  }
}
</style>
