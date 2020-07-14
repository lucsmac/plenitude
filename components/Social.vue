<template>
  <div class="social">
    <a class="img-wrapper" href="https://www.facebook.com/plenitudeconsultoriafitness" target="_blank"><img class="img" src="~/static/image/fb.png" alt="Facebook"></a>
    <a class="img-wrapper" href="https://www.instagram.com/plenitudeconsultoria/?hl=pt-br" target="_blank"><img class="img" src="~/static/image/ig.png" alt="Instagram"></a>
  </div>
</template>

<script>
export default {
  name: 'Social',
};
</script>

<style lang="scss">
  .social {
    @include max('phone') {
      display: flex;
    }

    .img {
      margin: 0 auto;
      max-width: 30px;
      height: 30px;
      margin-bottom: 20px;
      @include max('phone') {
        margin: 15px;
      }

      &-wrapper + &-wrapper {
        margin-top: 15px;
      }
    }
  }
</style>
