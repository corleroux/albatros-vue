<template>
  <div id="homepage">
    <section id="home-hero" :class="$vuetify.theme.dark && 'theme--dark'" class="grey--text text--lighten-1" fluid tag="section">
      <v-responsive :max-width="1280 + 24" class="mx-auto pa-6" min-height="30vh">
        <v-container class="pa-0">
          <v-row class="align-center mt-12">
            <!-- This is the HERO TEXT -->
            <v-col cols="12" md="7" class="pr-5">
              <HeroCard />
            </v-col>
            <!-- This is the HERO FORM -->
            <v-col cols="12" md="5">
              <FuneralProducts>
                <v-card slot-scope="{ products, loading }" class="mx-auto" max-width="400" tile>
                  <div v-if="loading">Loading...</div>
                  <div v-else>
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
                        <v-btn class="ma-2" text icon color="red lighten-2" @click="toggleWizard">
                          <v-icon :id="product.type" color="black">mdi-login-variant</v-icon>
                        </v-btn>
                      </v-list-item-icon>
                    </v-list-item>
                  </div>
                </v-card>
              </FuneralProducts>
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </section>
    <div>
      {{ policyformschema }}
    </div>
    <v-container>
      <FuneralProducts v-show="!wizard">
        <div id="card-over-65" slot-scope="{ products, loading }">
          <div v-if="loading">Loading...</div>
          <div v-else>
            <v-row justify="center">
              <v-col v-for="product in products" :key="product.type" cols="12" md="4">
                <base-material-card color="secondary">
                  <template v-slot:heading>
                    <div class="display-2 font-weight-light">
                      {{ product.title }}
                    </div>
                    <div class="subtitle-1 font-weight-light"></div>
                  </template>
                  <v-card-text class="text-center">
                    <v-avatar size="128" border="1p solid #000">
                      <span class="white--text headline">
                        <v-icon size="96" color="blue-grey darken-3">
                          {{ product.icon }}
                        </v-icon>
                      </span>
                    </v-avatar>
                    <div class="py-3 text-left display-2 font-weight-light">
                      {{ product.description }}
                    </div>
                  </v-card-text>
                  <v-container class="py-0">
                    <v-row>
                      <v-col cols="12" class="text-center">
                        <v-btn color="primary" class="mr-0 display-1" @click="displayNextForm">
                          {{ product.cta }}
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </base-material-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </FuneralProducts>
      <form-wizard v-show="wizard" :products="products" />
    </v-container>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import FuneralProducts from "@/models/funeralProducts.ts";
import { products } from "@/models/funeralproductmodel";
const formorder = [
  "app-form-main-member",
  "app-form-spouse",
  "app-form-dependant",
  "app-address-form",
];

export default {
  name: "Home",
  components: {
    HeroCard: () => import("@/components/HeroCard.vue"),
    FormWizard: () => import("@/components/FormWizard.vue"),
    FuneralProducts,
  },
  data: () => ({
    wizard: false,
    products,
    selectedComponent: "app-form-main-member",
  }),
  computed: {
    policyformschema() {
      return this.$store.getters.policyformschema;
    },
  },
  methods: {
    toggleWizard: function (event) {
      console.log(event.target);
      this.wizard = !this.wizard;
    },
    displayNextForm: function (e) {
      if (formorder.length > 1) {
        formorder.shift();
        this.selectedComponent = formorder[0];
        console.log(formorder[0]);
      }
    },
  },
};
</script>
<style scoped></style>
