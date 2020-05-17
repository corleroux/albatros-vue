<template>
  <v-form-base :value="spouseValue" :schema="spouseSchema" />
</template>

<script lang="ts">
import Vue from "vue";
import VFormBase from "dco-vuetify-form";

export default Vue.extend({
  name: "FormSpouse",
  components: { VFormBase },
  data() {
    return {
      spouseValue: {
        FirstName: "",
        LastName: "",
        Title: "",
        IdentityNumber: "",
        DateOfBirth: "",
      },
      spouseSchema: {
        FirstName: { type: "text",label: "Name" },
        LastName: { type: "text",label: "Surname" },
        IdentityNumber: { type: "text",label: "ID Number" },
        DateOfBirth: {
          type: "calendar",
          label: "Date of Birth",
          color: "primary",
        },
      },
    };
  },
});
</script>
