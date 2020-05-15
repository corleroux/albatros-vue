<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="4">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Edit Profile
            </div>
            <div class="subtitle-1 font-weight-light">
              Complete your profile
            </div>
          </template>
          <v-container class="py-0">
            <v-row>
              <v-col cols="12">
                <v-expand-x-transition mode="ease-in">
                  <keep-alive>
                    <component
                      v-bind:is="selectedComponent"
                      rendertype="short"
                    ></component>
                  </keep-alive>
                </v-expand-x-transition>
                <v-btn color="success" class="mr-0" @click="displayNextForm">
                  Update Profile
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </base-material-card>
        <!--
        <app-form-spouse></app-form-spouse>
        <app-address-form></app-address-form>
        <app-form-dependant></app-form-dependant>
        -->
      </v-col>
    </v-row>

    <v-card elevation="24" max-width="444" class="mx-auto">
      <v-system-bar lights-out></v-system-bar>
      <v-carousel
        :continuous="false"
        :cycle="cycle"
        :show-arrows="false"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <v-col cols="12" class="px-5">
                <component v-bind:is="slide" rendertype="short"></component>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-list two-line>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            <v-list-item-subtitle>Author</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-switch v-model="cycle" label="Cycle Slides" inset></v-switch>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import FormDependant from "@/components/forms/FormDependant.vue";
import FormAddressDetails from "@/components/forms/FormAddressDetails.vue";
import FormMainMember from "@/components/forms/FormMainMember.vue";
import FormSpouse from "@/components/forms/FormSpouse.vue";
// @
import AddressValues from "@/models/address.ts";

const testformorder = [
  "app-form-main-member",
  "app-form-spouse",
  "app-form-dependant",
  "app-address-form",
];

export default Vue.extend({
  name: "Signup",
  components: {
    appFormDependant: FormDependant,
    appAddressForm: FormAddressDetails,
    appFormSpouse: FormSpouse,
    appFormMainMember: FormMainMember,
    AddressValues: AddressValues,
  },

  data() {
    return {
      selectedComponent: "app-form-main-member",
      selectedForm: "app-form-main-member",
      applicationform: {
        mainmember: {},
        spouse: {},
        address: {},
        dependants: {},
        signupFormOrder: [
          "memberShort",
          "packages",
          "spouse",
          "dependants",
          "memberPersonal",
          "family",
          "banking",
          "declaration",
        ],
      },
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1",
      ],
      cycle: false,
      slides: [
        "app-form-main-member",
        "app-form-spouse",
        "app-form-dependant",
        "app-address-form",
      ],
    };
  },
  created() {
    console.log(AddressValues);
  },
  methods: {
    displayNextForm: function(e) {
      console.log(testformorder);
      console.log(testformorder[0]);
      if (testformorder.length > 1) {
        testformorder.shift();
        this.selectedComponent = testformorder[0];
        console.log(testformorder[0]);
      }
    },
  },
});
</script>
