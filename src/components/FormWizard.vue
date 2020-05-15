<template>
  <div>
    <!-- <v-card class="mb-4">
      <v-card-text>
        <v-select
          v-model="steps"
          :items="[2, 3, 4, 5, 6]"
          label="# of steps"
        ></v-select>
      </v-card-text>
    </v-card> -->
    <div>{{ products[1] }}</div>
    <v-stepper v-model="e1" alt-labels>
      <v-toolbar color="white" tile light>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-stepper-header>
        <template v-for="(n, index) in formorder">
          <v-stepper-step
            :key="`${index + 1}-step`"
            :complete="e1 > index + 1"
            :step="index + 1"
            editable
          >
            Step {{ index + 1 }}
          </v-stepper-step>

          <v-divider
            v-if="index + 1 !== steps + 1"
            :key="index + 1"
          ></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="(n, index) in formorder"
          :key="`${index + 1}-content`"
          :step="index + 1"
        >
          <component v-bind:is="n" rendertype="short"></component>

          <v-btn color="primary" @click="nextStep(index + 1)">
            Continue
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
import FormDependant from "@/components/forms/FormDependant.vue";
import FormAddressDetails from "@/components/forms/FormAddressDetails.vue";
import FormMainMember from "@/components/forms/FormMainMember.vue";
import FormSpouse from "@/components/forms/FormSpouse.vue";

const testformorder = [
  "app-form-main-member",
  "app-form-spouse",
  "app-form-dependant",
  "app-address-form",
];

export default {
  name: "FormWizard",
  components: {
    appFormDependant: FormDependant,
    appAddressForm: FormAddressDetails,
    appFormSpouse: FormSpouse,
    appFormMainMember: FormMainMember,
  },
  props: ["products"],
  data: () => ({
    e1: 1,
    formorder: testformorder,
    steps: Number,
  }),
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
  },
  created: function() {
    console.log(this.products);
  },
  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
  },
};
</script>
