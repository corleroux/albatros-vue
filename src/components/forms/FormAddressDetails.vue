<template>
  <div>
    <v-form-base
      id="array-ease"
      :value="addressValue"
      :schema="addressSchema"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VFormBase from "dco-vuetify-form";

export default Vue.extend({
  name: "FormAddressDetails",
  components: { VFormBase },
  data() {
    return {
      addressValue: {
        AddressLine1: "",
        AddressLine2: "",
        PostalCode: "",
      },
      addressSchema: {
        AddressLine1: { type: "text", label: "Address line" },
        AddressLine2: { type: "text", label: "Address line 2" },
        PostalCode: { type: "number", label: "Postal Code" },
      },
    };
  },
});
</script>
