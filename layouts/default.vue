<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">

// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap');

@font-face{
    font-family:"Museo W01_300";
    src:url("~static/fonts/905279/d9dabe05-624c-4f28-8eee-b3b6f1841abf.woff2") format("woff2"),url("~static/fonts/905279/827f2f08-a8d3-40b2-9795-927b59905269.woff") format("woff");
}
@font-face{
    font-family:"Museo W01_500";
    src:url("~static/fonts/905282/52be0694-00c1-4daa-8782-419021c48e95.woff2") format("woff2"),url("~static/fonts/905282/dee84039-06ae-4a61-89c4-709e594804a3.woff") format("woff");
}
@font-face{
    font-family:"Museo W01_700";
    src:url("~static/fonts/905285/13012335-73ef-44f0-b295-7b83041355af.woff2") format("woff2"),url("~static/fonts/905285/28d74e9b-4ea9-4e3c-b265-c67a72c66856.woff") format("woff");
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: $d-color;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
