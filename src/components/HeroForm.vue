<template>
  <div>

    <v-card class="mx-auto" tile>
      <v-container v-show="!apply">
        <v-toolbar color="accent" dark>
          <v-toolbar-title class="display-3 font-weight-medium text-uppercase">Products</v-toolbar-title>
        </v-toolbar>
        <v-list-item v-for="product in products" :key="product.type" class="py-2">
          <v-list-item-avatar>
            <v-icon large color="blue-grey darken-3">
              {{ product.icon }}
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="display-2 font-weight-light">{{ product.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-btn class="ma-2" text icon color="red lighten-2" @click="toggleApplicationForm">
              <v-icon :id="product.type" color="black">mdi-login-variant</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-container>
      <v-container grid-list-xs v-show=apply>
        <v-toolbar color="accent" dark>
          <v-toolbar-title class="display-3 font-weight-medium text-uppercase">{{ (selectedProduct) ? selectedProduct.title : "" }}</v-toolbar-title>
        </v-toolbar>
        <v-form ref="form" v-model="formValid" lazy-validation @submit.prevent="onSubmit">
          <form-main-member></form-main-member>
          <v-btn type="submit">Submit</v-btn>
          <a @click="toggleApplicationForm">products</a>
        </v-form>
      </v-container>

    </v-card>

  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {
  get,
  is
} from 'lodash'
import FormMainMember from "@/components/forms/FormMainMember.vue"

export default Vue.extend({
  components: {
    FormMainMember: FormMainMember
  },
  data: () => ({
    apply: false,
    selectedProductId: "",
    selectedProduct: {}
  }),
  computed: {
    products() {
      return this.$store.getters.getallfuneralproducts;
    },
  },
  methods: {
    toggleApplicationForm(event) {
      this.apply = !this.apply;
      this.selectedProductId = event.target.id;
    },
    onInput(value, obj) {
      console.log("This is value " + value);
      console.log("This is object" + obj);
    },

    onSubmit(value) {
      console.log("this is the hero form");
      console.log("emitting the event showwizard");
      this.$emit('showwizard', value);
    }
  },
  watch: {
    selectedProductId: function (newVal, oldVal) {
      console.log("watch 'selectedProductId' has been triggered");
      console.debug("the watch has been triggered", [newVal, oldVal]);
      if (newVal != "") {
        this.selectedProduct = this.products[newVal];
      } else {
        this.selectedProduct = {}
      }
    }
  }
})
</script>
