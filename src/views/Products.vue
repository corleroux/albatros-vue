<template>
  <v-container>
    <funeral-cover-products />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import FuneralCoverProducts from "@/components/FuneralCoverProducts.vue";

export default Vue.extend({
  name: "Signup",
  components: {
    FuneralCoverProducts
  }
});
</script>
