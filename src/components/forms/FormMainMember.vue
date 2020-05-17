<template>
  <v-form-base id="form-main-member" :value="memberValue" :schema="formRenderType" @update:form-main-member="update" />
</template>

<script lang="ts">
import Vue from "vue";
import VFormBase from "dco-vuetify-form";

export default Vue.extend({
  name: "FormMainMember",
  components: {
    VFormBase,
  },
  props: {
    rendertype: String,
  },
  data() {
    return {
      memberValue: {
        PolicyHolder: {
          Title: "",
          Fullname: "",
          IdentityNumber: "",
          DateOfBirth: "",
          Email: "",
          MobilePhone: "",
          Age: "",
        },
      },
      memberSchema: {
        PolicyHolder: {
          Title: {
            type: "select",
            label: "Title",
            selected: 0,
            items: ["Mr", "Ms", "Mrs", "Dr"],
          },
          Fullname: {
            type: "text",
            label: "Fullname",
            placeholder: "",
          },
          IdentityNumber: { type: "text", label: "ID Number" },
          DateOfBirth: {
            type: "calendar",
            label: "Date of Birth",
            color: "primary",
          },
          Email: { type: "text", label: "Email" },
          MobilePhone: { type: "text", label: "Phone Number" },
        },
      },
      memberSchemaShort: {
        PolicyHolder: {
          Fullname: {
            type: "text",
            label: "Fullname",
            placeholder: "",
          },
          DateOfBirth: {
            type: "calendar",
            label: "Date of Birth",
            color: "primary",
          },
          MobilePhone: { type: "text", label: "Phone Number" },
        },
      },
    };
  },
  computed: {
    DateOfBirth() {
      return this.memberValue.PolicyHolder.DateOfBirth;
    },
    formRenderType() {
      // short circuiting this method for testing
      return this.memberSchemaShort;
      if (this.rendertype == "short") {
        return this.memberSchemaShort;
      }
      return this.memberSchema;
    },
  },
  watch: {
    DateOfBirth: function (val) {
      this.calculateAge(val);
      console.log(this.memberValue.PolicyHolder.Age);
    },
  },
  methods: {
    calculateAge: function (dobs) {
      const mydate = dobs.split("-");
      const dob = new Date(mydate[0], mydate[1], mydate[2]);
      const diffMs = Date.now() - dob.getTime();
      const ageDt = new Date(diffMs);
      this.memberValue.PolicyHolder.Age = Math.abs(
        ageDt.getUTCFullYear() - 1970
      );
      return this.memberValue.PolicyHolder.Age;
    },
    update({ on, key, obj, params }) {
      // console.log("this is on " + on);
      // test event is 'click' and comes from appendIcon on key 'password'
      if (on == 'input') {
        console.log("This is the value in the store that will be updated");
        console.log(key + ":" + obj.value)
        console.debug("this is the object ", [obj])
        const payload = {
          'key': key,
          'value': obj.value
        };
        this.$store.commit('setPolicyValue', payload);
      }
    }
  },
});
</script>
