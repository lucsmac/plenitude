<template>
  <div :style="{ 'backgroundImage': `url(${require('@/static/image/logo-bg.png')})`}" class="pos-graduacao">
    <section class="hero">
      <span class="subtitle">Alcance o próximo level</span>
      <h3 class="pretitle">Cursos</h3>
      <h1 class="title">Pós-graduação</h1>
    </section>

    <TwoLines class="twolines" />

    <section class="warning">
      <h1 class="warning-title">Em breve</h1>
      <h1 class="warning-subtitle">As inscrições já encerraram</h1>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Pós-graduação | Plenitude Consultoria'
    }
  }
};
</script>

<style lang="scss">
.pos-graduacao {
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

      @include max('phone') {
        font-size: 0.7rem;
      }

      &::before, &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        background: #FFF;
        margin: 0 20px;

        @include max('phone') {
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

      @include max('tablet') {
        transform: translate3d(12.5px, 0, 0);
        letter-spacing: 25px;
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

  .twolines {
    width: 100%;
    justify-content: center;
  }

  .warning {
    width: 100%;
    padding: 150px 15vw 100px 15vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include max('tablet') {
      padding: 150px 3vw 0 3vw;
    }

    &-title {
      @include p-type('giant', 1, 'bold', #FFF);
      text-transform: uppercase;
      border: 10px solid #FFF;
      padding: 50px 100px;
      text-align: center;

      @include max('tablet') {
        border: 5px solid #FFF;
        font-size: 3rem;
        padding: 5vw 10vw;
      }
    }

    &-subtitle {
      @include p-type('mid', 1.2, 'semibold', #FFF);
      text-transform: uppercase;
      letter-spacing: 5px;
      padding-top: 30px;
      text-align: center;

      @include max('phone') {
        font-size: 1rem;
      }
    }
  }
}
</style>
