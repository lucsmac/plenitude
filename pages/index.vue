<template>
  <div class="home">
    <section :style="{ 'backgroundImage': `url(${require('../static/image/cursos/formacao-grupos-especiais-parkinson-alzheimer-bg.jpg')})`}" class="hero">
      <h1 class="title">Alcance o<br /><span class="yellow-text">próximo level</span></h1>
      <h3 class="subtitle">Capacitação e aperfeiçoamento profissional para estudantes e profissionais de Educação Física, Nutrição e Fisioterapia.</h3>
      <nuxt-link to="/cursos" ><Button class="btn"><p>Ver cursos</p></Button> </nuxt-link>
    </section>

    <TwoLines class="twolines twolines-hero" />

    <section class="produtos">
      <h3 class="subtitle">Alcance o próximo nível</h3>
      <h1 class="title">Cursos</h1>
      <div class="cursos">

        <div class="curso">
          <div class=curso-img><img src="~/static/image/cursos/formacao-grupos-especiais-gestantes-natal.jpg"></div>
          <h2 class="curso-title">Presenciais</h2>
          <p class="curso-description">As maiores referências do Brasil, aqui na sua cidade! Venha participar dos nossos cursos presenciais e aprenda com as maiores sumidades da educação física, fisioterapia e nutrição.</p>
          <nuxt-link to="/cursos" class="curso-link">Ver mais</nuxt-link>
        </div>

        <div class="curso">
          <div class=curso-img><img src="~/static/image/cursos/online-course-2.jpg"></div>
          <h2 class="curso-title">Online</h2>
          <p class="curso-description">As maiores referências do Brasil, aqui na sua cidade! Venha participar dos nossos cursos presenciais e aprenda com as maiores sumidades da educação física, fisioterapia e nutrição.</p>
          <nuxt-link to="/cursos" class="curso-link">Ver mais</nuxt-link>
        </div>

        <div class="curso">
          <div class=curso-img><img src="~/static/image/cursos/pos-graduacao.jpg"></div>
          <h2 class="curso-title">Pós-graduação</h2>
          <p class="curso-description">Um instituto de ensino que busca incessantemente desenvolver o potencial máximo, muitas vezes adormecido dos alunos. Em parceria com grandes nomes da educação nacional, buscamos a sincronia perfeita entre teoria e prática, valorizando o currículo do estudante.</p>
          <nuxt-link to="/pos-graduacao" class="curso-link">Ver mais</nuxt-link>
        </div>

      </div>
    </section>

    <div class="phrase-wrapper">
      <p class="phrase">“APRENDER É A ÚNICA COISA DE QUE A MENTE NUNCA SE CANSA, NUNCA TEM MEDO E NUNCA SE ARREPENDE”</p>
      <p class="author">Leonardo Da Vinci</p>
    </div>

    <div class="plenitude-display">
      <p class="plenitude-repeat">
        • Plenitude • Plenitude • Plenitude • Plenitude • Plenitude • Plenitude
      </p>
    </div>

    <section class="perfil">
      <div class="perfil-img-wrapper">
        <p class="perfil-name">Rafael Mendes</p>
        <img class="perfil-img" src="~/static/image/rafael-mendes.png" alt="Rafael Mendes">
      </div>
      <div class="perfil-info">
        <h3 class="perfil-title">Quem está a frente disso tudo</h3>
        <div class="perfil-description">
          <p>Profissional de Educação Física especialista em Fisiologia do Exercício, Cinesiologia, Biomecânica e Personal Trainer.</p>
          <p>Atua no mercado de Personal training desde 2009, com experiências em coordenação técnica de academia, avaliação física e consultoria à distância.</p>
        </div>
        <nuxt-link class="perfil-link" to="/quem-somos">Veja mais sobre a plenitude</nuxt-link>
      </div>
    </section>

    <TwoLines class="twolines twolines-form" />

    <Contato />
  </div>
</template>

<script>
export default {
  name: 'Home',
  head: {
    title: 'Home | Plenitude Consultoria'
  }
};
</script>

<style lang="scss">

  .hero {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @include max('phone') {
      height: 92vh;
    };

    .title {
      @include p-type('giant', 1, 'bold', white);
      text-align: center;
      padding-bottom: 3px;
      padding-top: 5vh;
      text-transform: uppercase;

      @include max("tablet-wide") {
        font-size: 4rem;
      }

      @include max("tablet") {
        font-size: 3rem;
      }

      @include max("phone") {
        font-size: 2.5rem;
      }
    }

    .subtitle {
      @include p-type('normal', 1, 'normal', white);
      text-align: center;
      width: 40%;
      margin-bottom: 40px;

      @include max("tablet") {
        width: 60%;
        font-size: .8rem;
      }

      @include max("phone") {
        width: 90%;
        font-size: .8rem;
      }
    }

    .yellow-text {
      color: $p-color;
    }
  }

  .twolines {
    width: 100%;
    justify-content: center;

    &-hero {
      transform: translate3d(0, -50%, 0);
    }
  }

  .produtos {
    padding: 60px 15vw 0 15vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    @include max('tablet') {
      padding: 100px 5vw 0 5vw;
    }

    .subtitle {
      @include p-type('normal', 1, 'reg', #FFF);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      opacity: .7;

      @include max('phablet') {
        font-size: .7rem;
      }

      &::before, &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        background: #FFF;
        margin: 0 20px;

        @include max('phablet') {
          margin: 0 10px;
        }
      }
    }

    .title {
      padding-top: 20px;
      padding-bottom: 100px;
      @include p-type(3.5rem, 1, 'bold', $p-color);
      text-transform: uppercase;
      letter-spacing: 45px;
      transform: translate3d(22.5px, 0, 0);

      @include max('phablet') {
        padding-top: 10px;
        padding-bottom: 75px;
        font-size: 2.5rem;
        letter-spacing: 25px;
        transform: translate3d(12.5px, 0, 0);
      }
    }

    .cursos {
      padding-top: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      @include max('phablet') {
        grid-template-columns: 1fr;
      }

      .curso {
        display: flex;
        flex-direction: column;
        align-items: center;

        & + .curso {
          @include max('phablet') {
            margin-top: 75px;
          }
        }

        &-img {
          width: 225px;
          height: 300px;
          overflow: hidden;
          position: relative;

          @include max('phablet') {
            width: 80%;
          }

          img {
            display: block;
            object-fit: cover;
            min-height: 100%;
            filter: brightness(85%);
            transform: scale(1);
            transition: all .8s ease;

            &:hover {
              filter: brightness(100%);
            transform: scale(1.025);
            }
          }
        }

        &-title {
          padding-top: 30px;
          @include p-type('mid', 1, 'bold', #FFF);
          text-transform: uppercase;
        }

        &-description {
          max-width: 80%;
          padding-top: 15px;
          @include p-type('normal', 1.2, 'reg', #FFF);
          text-align: center;
          opacity: .6;

          @include max('phablet') {
            max-width: 100%;
          }
        }

        &-link {
          @include p-type('normal', 1, 'bold', $p-color);
          margin-top: 25px;
        }
      }
    }
  }

  .phrase-wrapper {
    box-sizing: border-box;
    padding: 150px 15vw 150px 15vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: .8;

    @include max("phablet") {
      padding: 150px 5vw;
    }

    .phrase {
      @include p-type(2.1rem, 1, 'reg', #FFF);
      text-align: center;

      @include max("phablet") {
        font-size: 1.5rem;
      }
    }

    .author {
      align-self: flex-end;
      padding-top: 30px;
      display: flex;
      align-items: center;
      @include p-type('normal', 1, 'reg', #FFF);

      @include max("phablet") {
        font-size: .8rem;
        align-self: center;
      }

      &::before {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        background: #FFF;
        margin: 0 20px;

        @include max('phablet') {
          margin: 0 10px;
        }
      }
    }
  }

  .plenitude-display {
    height: 100px;
    // width: 100vw;
    overflow: hidden;
    position: relative;

    @include max('tablet') {
      height: 75px;
    }

    @include max('phone') {
      height: 50px;
    }

    .plenitude-repeat {
      display: block;
      @include p-type(6rem, 1, 'bold', $p-color);
      white-space: nowrap;
      position: absolute;
      left: -100px;

      @include max('tablet') {
        font-size: 4.5rem;
      }

      @include max('phone') {
        font-size: 2rem;
      }
    }
  }

  .perfil {
    width: 100%;
    padding: 150px 15vw;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include max('tablet-wide') {
      grid-template-columns: 1fr;
      padding: 100px 15vw 150px 15vw;
      text-align: center;
    }

    @include max('phablet') {
      grid-template-columns: 1fr;
      padding: 100px 0 150px 0;
      text-align: left;
    }

    &-img {
      display: flex;
      align-content: center;
      transform: translate3d(9%, 9%, 0);

      &-wrapper {
        width: 90%;
        display: flex;
        align-items: flex-end;
        border: 7px solid $p-color;
        transform: translate3d(-9%, -9%, 0);

        @include max('tablet-wide') {
          width: 70%;
          margin-bottom: 60px;
          justify-self: center;
        }

        @include max('phablet') {
          margin-top: 100px;
          justify-self: center;
          width: 70%;
        }
      }
    }

    &-name {
      @include p-type(2.5rem, 1, 'semibold', #FFF);
      max-width: 20px;
      opacity: .4;
      padding-top: 15px;
      white-space: nowrap;
      transform: rotate(270deg);
      transform-origin: 0% 0%;

      @include max('phablet') {
        padding-top: 15px;
        font-size: 1.5rem;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      align-self: center;
    }

    &-title {
        @include p-type('mid', 1, 'semibold', #FFF);
        text-transform: uppercase;
        padding-bottom: 50px;
    }

    &-description {
      opacity: .7;
      padding-bottom: 50px;

      p {
        @include p-type('normal', 1.3, 'reg', #FFF);

        & + p {
          padding-top: 20px;
        }
      }
    }

    &-link {
      @include p-type('normal', 1, 'semibold', $p-color);
      padding: 10px 60px;
      text-transform: uppercase;
      border: 1px solid $p-color;
      text-align: center;
      cursor: pointer;

      @include max('phone') {
        padding: 10px 60px;
      }
    }
  }
</style>
