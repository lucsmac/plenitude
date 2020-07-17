<template>
  <div :style="{ 'backgroundImage': `url(${require('@/static/image/logo-bg.png')})`}" class="quem-somos">
    <section class="hero">
      <span class="subtitle">Alcance o próximo level</span>
      <h3 class="pretitle">Plenitude</h3>
      <h1 class="title">Quem somos</h1>
    </section>

    <section class="description">
      <h2 class="description-title">Nosso objetivo é o seu crescimento</h2>
      <p class="description-text">A Plenitude Consultoria Fitness atua no fomento ao conhecimento técnico e científico aos professores de Educação Física, Nutrição e Fisioterapia por meio de cursos, palestras e treinamentos.</p>
      <div class="stats">
        <div v-for="(stat, index) in stats" :key="index" class="stats-item">
          <span class="value">{{ stat.value }}</span>
          <p class="title">{{ stat.title }}</p>
        </div>
      </div>
    </section>

    <section class="gallery">
      <img class="photo" src="@/static/image/cursos/leonidas-biomecanica-2.jpg" alt="Biomecânica - Professor Leônidas">
      <img class="photo" src="@/static/image/cursos/caue-sem-equipamento.jpg" alt="Sem equipamentos - Professor Cauê">
      <img class="photo" src="@/static/image/cursos/caue-sem-equipamento-2.jpg" alt="Sem equipamentos - Professor Cauê">
      <img class="photo" src="@/static/image/cursos/firmino-gestante-natal.jpg" alt="Formação gestantes - Professor Firmino">
      <img class="photo" src="@/static/image/cursos/leonidas-biomecanica-4.jpg" alt="Biomecânica - Professor Leônidas">
      <img class="photo" src="@/static/image/cursos/leonidas-biomecanica-1.jpg" alt="Biomecânica - Professor Leônidas">
      <img class="photo" src="@/static/image/cursos/zorzi-biomecanica-4.jpg" alt="Biomecânica - Professor Zorzi">
      <img class="photo" src="@/static/image/cursos/zorzi-biomecanica-2.jpg" alt="Biomecânica Professor Zorzi">
      <img class="photo" src="@/static/image/cursos/alunos.jpg" alt="Alunos da Plenitude">
    </section>
  </div>
</template>

<script>
export default {
  name: 'QuemSomos',
  head() {
    return {
      title: 'Quem somos | Plenitude Consultoria'
    }
  },
  data() {
    return {
      stats: [
        {
          value: 20,
          title: 'Eventos realizados',
        },
        {
          value: 2000,
          title: 'alunos fizeram nossos cursos',
        },
        {
          value: 200,
          title: 'Horas de conteúdo ministrado',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.quem-somos {
  background-position: -10% 2%;
  background-repeat: no-repeat;

  @include max('tablet') {
    background-position: -50% 2%;
  }

  @include max('phone') {
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

      @include max('phone-wide') {
        font-size: 0.7rem;
      }

      &::before, &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        background: #FFF;
        margin: 0 20px;

        @include max('phone-wide') {
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

      @include max('phone-wide') {
        font-size: 1.4rem;
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
        font-size: 4rem;
        letter-spacing: 15px;
        text-align: center;
      }

      @include max('tablet') {
        padding-top: 15px;
        font-size: 3rem;
        letter-spacing: 15px;
        text-align: center;
      }

      @include max('phone-wide') {
        padding-top: 15px;
        font-size: 2rem;
        letter-spacing: 15px;
        text-align: center;
      }
    }
  }

  .description {
    width: 100%;
    padding: 5px 15vw;
    display: flex;
    flex-direction: column;

    @include max('tablet') {
      padding: 0 5vw;
    }

    &-title {
      display: flex;
      align-items: center;
      @include p-type(1.75rem, 1, 'semibold', #FFF);
      text-transform: uppercase;

      @include max('phablet') {
        font-size: 1.5rem;
        display: grid;
        grid-template-columns: 1fr;
      }

      &::before {
        content: '';
        width: 50px;
        height: 1px;
        background: white;
        margin-right: 20px;

        @include max('phablet') {
          width: 80px;
          height: 3px;
          margin-top: 20px;
          order: 2;
        }
      }
    }

    &-text {
      align-self: flex-end;
      padding-top: 150px;
      width: 60%;
      opacity: .9;
      @include p-type('normal', 1, 'reg', #FFF);

      @include max('phablet') {
        padding-top: 75px;
        width: 100%;
        align-self: start;
      }
    }

    .stats {
      padding-top: 150px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;

      @include max('phablet') {
        padding-top: 75px;
        grid-template-columns: 1fr;
        grid-gap: 50px;
      }

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .value {
          @include p-type(4.5rem, 1, 'bold', $p-color);

          @include max('tablet') {
            font-size: 4rem;
          }
        }
        .title {
          @include p-type('normal', 1.2, 'semibold', #FFF);
          margin-top: 30px;
          text-transform: uppercase;
          text-align: center;
        }
      }
    }
  }

  .gallery {
    width: 100%;
    padding: 0 15vw 50px 15vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    @include max('tablet') {
      padding: 150px 5vw 0 5vw;
      grid-template-columns: 1fr;
    }

    .photo {
      max-width: 85%;
      padding-top: 200px;

      &:nth-child(2n) {
        transform: translate3d(0, 50%, 0);

        @include max('tablet') {
          transform: translate3d(0, 0, 0);
        }
      }

      @include max('tablet') {
        padding-top: 0;
      }

      & + .photo {
        @include max('tablet') {
          padding-top: 75px;
        }
      }
    }
  }
}
</style>
