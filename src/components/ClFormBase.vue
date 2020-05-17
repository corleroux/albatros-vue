<template>
  <v-card class="px-3">
    <!-- <v-card-title primary-title>
      <div class="text-uppercase">Get covered today</div>
    </v-card-title> -->
    <v-card-text>
      <v-form>
        <v-form-base :value="myValue" :schema="mySchema" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn tile color="accent" class="font-weight-black headline" @click="submit">
        Get Covered Today
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import VFormBase from "dco-vuetify-form";

export default Vue.extend({
  name: "ClFormBase",
  components: { VFormBase },
  data() {
    return {
      myValue: {
        PolicyHolder: {
          FullName: "",
          EmailAddress: "",
          IdentityNumber: "",
          DateOfBirth: "",
          // Relation: "",
          // RequiredPackage: "",
        },
      },
      mySchema: {
        PolicyHolder: {
          FullName: {
            type: "text",
            label: "Full name",
            prependIcon: "mdi-access-point-network-off",
          },
          // LastName: { type: "text", label: "Surname" },
          // Title: {
          //   type: "select",
          //   label: "Title",
          //   selected: 0,
          //   items: ["Mr", "Ms", "Dr"],
          // },
          //IdentityNumber: { type: "text", label: "ID Number" },
          DateOfBirth: {
            type: "calendar",
            label: "Date of Birth",
            color: "primary",
          },
          // Relation: {
          //   type: "select",
          //   label: "Relation to Policy Holder",
          //   items: ["Father", "Mother", "Uncle", "Aunt", "Nephew", "Neice"],
          // },
          // RequiredPackage: {
          //   type: "select",
          //   label: "Required Package",
          //   items: ["Option 1", "Option 2", "Option 3"],
          // },
        },
      },
    };
  },
  methods: {
    submit() {
      console.log(this.myValue);
    },
  },
});
</script>
