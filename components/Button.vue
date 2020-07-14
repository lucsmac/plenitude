<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['text'],
};
</script>

<style lang="scss">
.btn {
  @include p-type('normal', 1, 'semibold', $p-color);
  padding: 10px 60px;
  text-transform: uppercase;
  border: 1px solid $p-color;
  background: $p-color;
  text-align: center;
  cursor: pointer;
  transition: .3s all ease-in-out;

  p {
    width: 150px;
    color: $d-color;
    font-weight: 500;
    letter-spacing: 1px;
    transition: .3s all ease-in-out;
  }

  @include max('phone') {
    padding: 10px 60px;
  }

  &:hover {
    background: $p-color;

    p {
      letter-spacing: 3px;
    }
  }
}
</style>
