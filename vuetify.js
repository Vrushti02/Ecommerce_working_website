import Vue from 'vue';
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from "vuetify";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify, {
    // iconfont: 'md',
});

export default new Vuetify({
     theme: {
    light: true,
    themes: {
      dark: {
       
        // frendy: "#6A1B9A",
        admin:"#fbc02d",
        cyanbox:"#66e5b5",
        redbox:"#ff7657"
      },
      dark: {
        primary: colors.blue.lighten3
      }
    }
  }

});