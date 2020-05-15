import Vue from "vue";
// https://github.com/wotamann/vuetify-form-base/issues/2
// https://vuetifyjs.com/en/customization/a-la-carte

import Vuetify, {
  VLayout,
  VCheckbox,
  VSelect,
  VBtn,
  VChip,
  VDatePicker,
  VCard,
  VContent,
  VTextarea,
  VInput,
  VHover,
} from "vuetify/lib";

import "@/sass/overrides.sass";

Vue.use(Vuetify, {
  components: {
    VLayout,
    VCheckbox,
    VSelect,
    VBtn,
    VChip,
    VDatePicker,
    VCard,
    VContent,
    VTextarea,
    VInput,
    VHover,
  },
});

Vue.use(Vuetify);

const theme = {
  // primary: "#4CAF50",
  // secondary: "#9C27b0",
  // accent: "#9C27b0",
  // info: "#00CAE3",
  primary: "#0D47A1",
  secondary: "#2962FF",
  accent: "#FFA726",
  error: "#f44336",
  warning: "#ffc107",
  info: "#607d8b",
  success: "#4caf50",
};
//#3D5AFE
//#ff9800
export default new Vuetify({
  theme: {
    themes: {
      light: theme,
      dark: theme,
      // primary: "#2196f3",
      // secondary: "#ff5722",
      // accent: "#ff9800",
      // error: "#f44336",
      // warning: "#ffc107",
      // info: "#607d8b",
      // success: "#4caf50",
    },
  },
});
