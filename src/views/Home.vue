<template>
  <div id="homepage">
    <section id="home-hero" :class="$vuetify.theme.dark && 'theme--dark'" class="grey--text text--lighten-1" fluid tag="section">
      <v-responsive :max-width="1280 + 24" class="mx-auto pa-6" min-height="30vh">
        <v-container class="pa-0">
          <v-row class="align-center mt-12">
            <!-- This is the HERO TEXT -->
            <v-col cols="12" md="5" class="pr-5">
              <hero-card />
            </v-col>
            <!-- This is the HERO FORM -->
            <v-col cols="12" md="7">
              <hero-form v-on:showwizard="showwizard" />
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </section>
    <div>

    </div>
    <v-container>
      <div v-show="!wizard">
        <div id="card-over-65">
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
      <form-wizard v-show="wizard" :products="products" />
    </v-container>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";

const formorder = [
  "app-form-main-member",
  "app-form-spouse",
  "app-form-dependant",
  "app-address-form",
];

export default Vue.extend({
  name: "Home",
  components: {
    HeroCard: () => import("@/components/HeroCard.vue"),
    FormWizard: () => import("@/components/FormWizard.vue"),
    HeroForm: () => import("@/components/HeroForm.vue"),
  },
  data: () => ({
    wizard: false,
    selectedComponent: "app-form-main-member",
  }),
  computed: {
    policyformschema() {
      return this.$store.getters.policyformschema;
    },
    products() {
      return this.$store.getters.getallfuneralproducts;
    }
  },
  methods: {
    toggleWizard: function (event) {
      console.log(event.target);
      this.wizard = !this.wizard;
    },
    showwizard: function (event) {
      // console.log("showwizard reached in the home.vue file");
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
});
</script>
<style scoped></style>
