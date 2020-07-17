<template>
  <div class="footer-wrapper">
    <TwoLines class="twolines twolines-footer" />

    <footer class="footer">
      <div class="contact">
        <h3 class="contact-title">Contato</h3>
        <p class="contact-email">emailplenitude@gmail.com</p>
        <p class="contact-phone">(84) 98897-4525</p>
      </div>
      <img class="logo" src="~/static/image/logo-vertical.png" alt="Plenitude">
      <Social />
    </footer>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.footer-wrapper {
  margin-top: 75px;
}

.twolines {
  width: 100%;
  justify-content: center;

  &-footer {
    transform: translate3d(0, 50%, 0);
  }
}

.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 60px 50px 30px 50px;
  background: #000;

  @include max('tablet') {
    padding: 60px 5vw 45px 5vw;
  }

  @include max('phone') {
    grid-template-columns: 1fr;
    padding: 60px 5vw 45px 5vw;
  }

  .contact {
    @include max('phone') {
      order: 1;
      justify-self: center;
      margin-top: 30px;
      text-align: center;
    }

    &-title {
      @include p-type('mid', 1, 'semibold', $p-color);
      padding-bottom: 30px;

      @include max('phone') {
        padding-bottom: 15px;
      }
    }
    &-email {
      @include p-type('normal', 1, 'reg', #FFF);
      padding-bottom: 15px;

      @include max('phone') {
        padding-bottom: 7.5px;
      }
    }
    &-phone {
      @include p-type('normal', 1, 'reg', #FFF);
      padding-bottom: 15px;
    }
  }

  .logo {
    max-width: 100px;
    justify-self: center;

    @include max('phone') {
      margin-top: 15px;
      order: 3;
    }
  }

  .social {
    justify-self: end;

    @include max('phone') {
      order: 2;
      justify-self: center;
    }
  }
}
</style>
