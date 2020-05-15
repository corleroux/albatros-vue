<template>
  <div>
    <v-form-base id="array-ease" :value="depValue" :schema="depSchema" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VFormBase from "dco-vuetify-form";

const getDep = () => {
  return {
    FirstName: "",
    Surname: "",
    DateOfBirth: "",
    RelationToPolicyHolder: "",
  };
};

export default Vue.extend({
  name: "FormDependant",
  components: {
    VFormBase,
  },

  data() {
    return {
      maxDependants: 6,
      depCount: 0,
      depValue: {
        Dependants: [getDep()],
      },
      depSchema: {
        Dependants: {
          type: "array",
          schema: {
            FirstName: { type: "text", label: "First Name" },
            Surname: { type: "text", label: "Surname" },
            DateOfBirth: {
              type: "calendar",
              label: "Date of Birth",
              color: "primary",
            },
            RelationToPolicyHolder: {
              type: "select",
              label: "Relation to Policy Holder",
              items: ["Father", "Mother", "Uncle", "Aunt", "Nephew", "Neice"],
            },
          },
        },
      },
    };
  },
  computed: {},
  methods: {
    incrementKey() {
      return this.depCount++;
    },
  },
});
</script>
