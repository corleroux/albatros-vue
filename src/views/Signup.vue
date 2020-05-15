<template>
  <v-container grid-list-xs>
    <form-wizard :products="products" />
    <form-window :products="products" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import FormWizard from "@/components/FormWizard.vue";
import { products } from "@/models/funeralproductmodel";
import FormWindow from "@/components/FormWindow.vue";

export default Vue.extend({
  name: "Signup",
  components: {
    FormWizard: FormWizard,
    FormWindow: FormWindow,
  },
  data: () => ({
    products,
  }),
});
</script>
