<template>
  <v-card class="px-3 py-5">
    <v-form>
      <v-card-title primary-title>
        <div class="text-uppercase">Get covered today</div>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <div class="text-uppercase">Policy Holder details</div>
          </v-col>
          <v-col cols="12" md="8">
            <v-form-base
              :value="formValue.PolicyHolder"
              :schema="formSchema.PolicyHolder"
              @update="onUpdateForm"
            />
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row>
          <v-col cols="12" md="4">
            <div class="text-uppercase pt-10">Address</div>
          </v-col>
          <v-col cols="12" md="8">
            <v-form-base
              :value="formValue.Address"
              :schema="formSchema.Address"
              @update="onUpdateForm"
            />
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row>
          <v-col cols="12" md="4">
            <div class="text-uppercase pt-10">Spouse's details</div>
          </v-col>
          <v-col cols="12" md="8">
            <v-form-base
              :value="formValue.Spouse"
              :schema="formSchema.Spouse"
              @update="onUpdateForm"
            />
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row>
          <v-col cols="12" md="4">
            <div class="text-uppercase pt-10">
              Dependants (Max 6)
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <v-form-base
              :value="formValue.Dependants"
              :schema="formSchema.Dependants"
              @update="onUpdateForm"
            />
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row>
          <v-col cols="12" md="4">
            <div class="text-uppercase pt-10">
              Extended Family Members (Max 4)
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <v-form-base
              :value="formValue.ExtendedFamily"
              :schema="formSchema.ExtendedFamily"
              @update="onUpdateForm"
            />
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row>
          <v-col cols="12" md="4">
            <div class="text-uppercase pt-10">
              Beneficiary Details
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <v-form-base
              :value="formValue.Beneficiary"
              :schema="formSchema.Beneficiary"
              @update="onUpdateForm"
            />
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row>
          <v-col cols="12" md="4">
            <div class="text-uppercase pt-10">Banking Details</div>
          </v-col>
          <v-col cols="12" md="8">
            <v-form-base
              :value="formValue.BankingDetails"
              :schema="formSchema.BankingDetails"
              @update="onUpdateForm"
            />
          </v-col>
        </v-row>
        <v-divider></v-divider>

        <v-row>
          <v-col cols="12" md="4">
            <div class="text-uppercase pt-10">
              Declaration of Health
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <div>{{ formValue.Declaration.Body }}</div>
            <v-form-base
              :value="formValue.Declaration"
              :schema="formSchema.Declaration"
              @update="onUpdateForm"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions text-left>
        <v-btn tile block color="primary text-capitalize" @click="onSubmit">
          Get Covered Today
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import VFormBase from "dco-vuetify-form";

import db from "@/db.ts";

import applicationFormSchema from "@/models/applicationFormSchema.ts";

import applicationFormStruct from "@/models/applicationFormStructure.ts";

import policyHolderStruct from "@/models/policyholder.ts";

import spouseStruct from "@/models/spouse.ts";

import addressStruct from "@/models/address.ts";

import dependantsStruct from "@/models/dependants.ts";

import extendedfamilyStruct from "@/models/extendedfamily.ts";

import beneficiaryStruct from "@/models/beneficiary.ts";

import bankingdetailsStruct from "@/models/bankingdetails.ts";

import declarationStruct from "@/models/declaration.ts";

export default Vue.extend({
  name: "PolicyApplication",
  components: { VFormBase },

  data() {
    return {
      formValue: {
        ...policyHolderStruct,
        ...spouseStruct,
        ...addressStruct,
        ...dependantsStruct,
        ...extendedfamilyStruct,
        ...beneficiaryStruct,
        ...bankingdetailsStruct,
        ...declarationStruct,
      },
      formSchema: applicationFormSchema,
      origValue: applicationFormStruct,
    };
  },
  methods: {
    onSubmit() {
      console.log("clicked / submitted");
      console.log(this.formValue.PolicyHolder);

      const polHolder = {
        dateofbirth: this.formValue.PolicyHolder.DateOfBirth,
        email: this.formValue.PolicyHolder.Email,
        firstname: this.formValue.PolicyHolder.FirstName,
        identitynumber: this.formValue.PolicyHolder.IdentityNumber,
        phone: this.formValue.PolicyHolder.PhoneNumber,
        surname: this.formValue.PolicyHolder.Surname,
        title: this.formValue.PolicyHolder.Title,
      };

      db.collection("policyholder").add(polHolder);
    },
    onUpdateForm({ on, key, obj, params }) {
      // test event is 'click' and comes from appendIcon on key 'password'
      // console.log(on);
      // console.log(key);
      // console.log(obj);
      // console.log(params);

      if (
        on == "click" &&
        key == "FirstName" &&
        (params && params.tag) == "prepend"
      ) {
        // toggle icon
        obj.schema.prependIcon =
          obj.schema.type === "text"
            ? "mdi-lock"
            : "mdi-access-point-network-off";

        // toggle visibility
        // obj.schema.type = obj.schema.type === "password" ? "text" : "password";
      }
    },
  },
});
</script>
