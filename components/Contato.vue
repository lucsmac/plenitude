<template>
  <section class="contato">
    <h1 class="contato-title">Deixe uma dúvida ou mensagem pra gente</h1>
    <form class="form" action="">
      <input class="form-name" type="text" placeholder="Nome">
      <input class="form-tel" type="text" placeholder="Telefone">
      <input class="form-email" type="e-mail" placeholder="E-mail">
      <textarea row="1" class="form-msg" placeholder="Mensagem" />
      <button type="submit" class="form-btn">Enviar</button>
    </form>
    </section>
</template>

<script>
export default {
  name: 'Formulario',
};
</script>

<style lang="scss">
.contato {
  width: 100%;
  padding: 150px 15vw 100px 15vw;

  @include max('tablet') {
    padding: 150px 5vw 75px 5vw;
  }

  @include max('phone') {
    padding: 150px 3vw 0 3vw;
  }

  &-title {
    @include p-type(2.5rem, 1, 'reg', #FFF);
    padding-bottom: 60px;
    text-align: center;

    @include max('tablet') {
      font-size: 2rem;
      margin: 0 auto;
      width: 80%;
    }

    @include max('phone') {
      font-size: 1.4rem;
    }
  }

  .form {
    display: grid;
    grid-template:
    "name tel"
    "email email"
    "msg msg"
    "btn btn"
    / 1fr 1fr;

    @include max('phablet'){
      grid-template:
        "name"
        "tel"
        "email"
        "msg"
        "btn"
        / 1fr;
    }

    &-name {
      grid-area: name;
    }

    &-tel {
      grid-area: tel;
    }

    &-email {
      grid-area: email;
    }

    &-msg {
      grid-area: msg;
    }

    &-btn {
      grid-area: btn;
      justify-self: center;
      @include p-type('normal', 1, 'semibold', #FFF);
      padding: 10px 100px;
      margin-top: 40px;
      text-transform: uppercase;
      border: 1px solid #FFF;
      background: transparent;
      cursor: pointer;
    }
  }

  input, textarea {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    background: transparent;
    padding: 3px 7px;
    margin: 15px 15px;
    @include p-type('normal', 1, 'reg', #FFF);
    resize: none;
  }
}
</style>
