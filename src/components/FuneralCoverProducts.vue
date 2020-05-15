<template>
  <div class="products">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="pa-2 blue darken-3">
            <h1 class="display-3 my-4 white--text">Member only</h1>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="4">
          <v-card max-width="344" pa-2>
            <v-card-media src="src" height="200px"> </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Member Only</h3>
                <div>Funeral Cover for individuals</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="primary">R 5000</v-btn>
              <v-btn flat color="primary">R 10 000</v-btn>
              <v-btn flat color="primary">R 15 000</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card max-width="344">
            <v-card-media src="src" height="200px"> </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Single Parent</h3>
                <div>Family Funeral Cover for single parents</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="primary">R 5000</v-btn>
              <v-btn flat color="primary">R 10 000</v-btn>
              <v-btn flat color="primary">R 15 000</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card max-width="344">
            <v-card-media src="src" height="200px"> </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Family Funeral Cover</h3>
                <div>Funeral Cover for families</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="primary">R 5000</v-btn>
              <v-btn flat color="primary">R 10 000</v-btn>
              <v-btn flat color="primary">R 15 000</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    name: "FuneralCoverProducts",
    products: [
      {
        coverAmount: 5000,
        name: "Member Only",
        premium: [
          { ageMin: 21, ageMax: 65, amount: 33 },
          { ageMin: 66, ageMax: 74, amount: 65 }
        ]
      },
      {
        coverAmount: 10000,
        name: "Member Only",
        premium: [
          { ageMin: 21, ageMax: 65, amount: 40 },
          { ageMin: 66, ageMax: 74, amount: 100 }
        ]
      },
      {
        coverAmount: 15000,
        name: "Member Only",
        premium: [
          { ageMin: 21, ageMax: 65, amount: 48 },
          { ageMin: 66, ageMax: 74, amount: 137 }
        ]
      }
    ]
  })
});
</script>
