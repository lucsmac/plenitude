<template>
  <div class="lines">
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>

<script>
export default {
  name: 'TwoLines',
};
</script>

<style lang="scss">
  .lines {
    display: flex;
    align-items: center;
    height: 62.5px;
    .line {
      display: block;
      background: $p-color;
      width: 7px;
      height: 75px;

      & + .line {
        height: 125px;
        margin-left: 10px;
      }
    }
  }
</style>
