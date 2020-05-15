<template>
  <div class="heroCard">
    <h1 class="display-4 thin grey--text text--lighten-2 py-3">
      Celebrating Life, One Family At A Time
    </h1>
    <!--<h2 class="subheading">Our day begins when your day ends</h2>-->
    <p class="display-3 pt-3">
      Protect your families financial well-being by insuring yourself and your
      loved ones.
    </p>
    <p class="display-3">
      Take care of all your funeral expenses with our affordable packages.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HeroCard",
});
</script>

<style lang="sass">
#home-hero
  /*background-image: url(https://solvid.co.uk/wp-content/uploads/2018/06/Content-Marketing-Background-1.png),linear-gradient(119deg,#000D58 40%,#651bb5 100%)!important */
  background-size:cover
  background-position: center right

.home-hero__title
  line-height: 1.2

.v-card--hero
  background: #000
  border-radius: 6px
  height: 0
  margin: 0
  overflow: hidden
  padding-bottom: 70%
  position: relative
  width: 100%

  &__iframe
    display: block
    vertical-align: middle
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>
