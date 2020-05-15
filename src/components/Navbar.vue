<template>
  <section>
    <v-toolbar color="white" light>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <router-link :to="{ name: 'Home' }" tag="div" class="v-toolbar__title"
        ><a>LinkTitle</a></router-link
      >

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
    <!--
  <nav>
    <v-app-bar color="grey lighten-4" dense flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo-orange.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://lms.collectif.link" target="_blank" text>
        <span class="mr-2">Online Education</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>

      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
-->
    <!--
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav> -->

    <v-card class="pa-12" color="indigo darken-4" flat>
      <v-card elevation="12" width="256">
        <v-navigation-drawer floating permanent>
          <v-list dense rounded>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  ><router-link :to="item.route">{{
                    item.title
                  }}</router-link></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-card>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home-city", route: "/" },
        {
          title: "Get Funeral Cover",
          icon: "mdi-account",
          route: "/apply",
        },
        {
          title: "Products",
          icon: "mdi-account-group-outline",
          route: "/products",
        },
      ],
    };
  },
});
</script>
