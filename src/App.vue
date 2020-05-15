<template>
  <v-app class="grey lighten-4" id="main-div">
    <span class="bg"></span>
    <navbar />

    <v-content>
      <router-view></router-view>
    </v-content>
    <div class="head-foot"></div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";

export default Vue.extend({
  name: "App",
  components: {
    Navbar,
  },
  data: () => ({}),
});
</script>
<style scoped>
.bg {
  width: 100%;
  height: 95%;
  position: absolute;
  top: 0;
  left: 0;
  background: no-repeat center center;
  /*background-image: url(https://solvid.co.uk/wp-content/uploads/2018/06/Content-Marketing-Background-1.png),
    linear-gradient(119deg, #000d58 40%, #651bb5 100%) !important;*/
  background-size: cover;
  background-color: #1a237e;
  transform: scale(1.1);
}
</style>
