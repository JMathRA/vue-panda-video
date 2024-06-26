<template>
    <div>
      <v-menu offset-y :nudge-width="200">
        <template v-slot:activator="{ on, attrs }">
          <v-chip
            v-bind="attrs"
            v-on="on"
            class="ml-2 mr-n2 font-weight-bold"
            :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            :color="$vuetify.theme.dark ? 'grey darken-3' : 'accent'"
          >
            <v-avatar class="mr-2">
              <v-img
                :src="
                  $store.getters.currentUser.avatar
                    ? $store.getters.currentUser.avatar
                    : {
                        src: require('../../assets/defaultAvatar.png'),
                        text: 'Default Avatar',
                        extra: 'Avatar',
                      }
                "
              />
            </v-avatar>
            {{ $store.getters.currentUser.name }}
            <v-icon right size="20"> mdi-chevron-down </v-icon>
          </v-chip>
        </template>
        <v-list>
          <v-list-item>
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-list-item-avatar>
                  <v-img
                    :src="
                      $store.getters.currentUser.avatar
                        ? $store.getters.currentUser.avatar
                        : {
                            src: require('../../assets/defaultAvatar.png'),
                            text: 'Default Avatar',
                            extra: 'Avatar',
                          }
                    "
                  />
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      style="cursor: pointer"
                      @click="showProfile = !showProfile"
                    >
                      <v-icon size="20">mdi-pencil</v-icon>
                    </v-overlay>
                  </v-fade-transition>
                </v-list-item-avatar>
              </template>
            </v-hover>
            <v-list-item-content>
              <v-list-item-title
                >{{ $store.getters.currentUser.name }}
              </v-list-item-title>
              <v-list-item-subtitle>Logged in</v-list-item-subtitle>
            </v-list-item-content>
  
            <v-list-item-action>
              <v-btn icon @click="signOut">
                <v-icon>mdi-logout</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
  
        <v-divider></v-divider>
        <v-list dense>
          <v-list-item-title class="text-center subtitle-2 mt-2"
            >Settings</v-list-item-title
          >
          <v-list-item>
            <v-list-item-title>Dark mode</v-list-item-title>
            <v-list-item-action>
              <v-switch
                v-model="$vuetify.theme.dark"
                inset
                dense
                class="font-weight-bold mt-5"
                color="white"
                @change="saveSettings('darkMode')"
              ></v-switch
            ></v-list-item-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Choose theme</v-list-item-title>
              <v-list-item-subtitle class="mt-2">
                <v-chip
                  small
                  class="ma-2"
                  :color="$vuetify.theme.dark ? '#b83232' : '#ff4a4a'"
                  @click="saveSettings('setAccent', '1')"
                >
                </v-chip>
                <v-chip
                  small
                  class="ma-2"
                  :color="$vuetify.theme.dark ? '#7532b8' : '#954aff'"
                  @click="saveSettings('setAccent', '2')"
                >
                </v-chip>
                <v-chip
                  small
                  class="ma-2"
                  :color="$vuetify.theme.dark ? '#3234b8' : '#4964fc'"
                  @click="saveSettings('setAccent', '3')"
                >
                </v-chip>
                <v-chip
                  small
                  class="ma-2"
                  :color="$vuetify.theme.dark ? '#d6a41c' : '#ffce4a'"
                  @click="saveSettings('setAccent', '4')"
                >
                </v-chip>
                <v-chip
                  small
                  class="ma-2"
                  :color="$vuetify.theme.dark ? '#2da138' : '#46fa58'"
                  @click="saveSettings('setAccent', '5')"
                >
                </v-chip>
                <v-chip
                  class="ma-2"
                  :color="$vuetify.theme.dark ? '#171717' : '#e8e8e8'"
                  @click="saveSettings('setAccent', 'default')"
                >
                  Default
                </v-chip></v-list-item-subtitle
              ></v-list-item-content
            >
          </v-list-item>
        </v-list> </v-menu
      ><profile
        :showProfile="showProfile"
        @closeProfileDialog="showProfile = false"
      />
    </div>
  </template>
  
  <script>
  import { signOut } from "../../services/sessionManagement";
  import profile from "../userManagement/profile.vue";
  
  export default {
    data: () => ({ showProfile: false }),
    components: { profile },
    methods: {
      signOut() {
        signOut();
      },
      saveSettings(parameter, color) {
        if (parameter === "darkMode") {
          localStorage.setItem("darkTheme", this.$vuetify.theme.dark);
        } else {
          let lightAccent =
            color === "default"
              ? "#e8e8e8"
              : color === "5"
              ? "#46fa58"
              : color === "4"
              ? "#ffce4a"
              : color === "3"
              ? "#4964fc"
              : color === "2"
              ? "#954aff"
              : color === "1"
              ? "#ff4a4a"
              : "";
          let darkAccent =
            color === "default"
              ? "#171717"
              : color === "5"
              ? "#32b83e"
              : color === "4"
              ? "#d6a41c"
              : color === "3"
              ? "#3234b8"
              : color === "2"
              ? "#7532b8"
              : color === "1"
              ? "#b83232"
              : "";
          localStorage.setItem("lightAccent", lightAccent);
          localStorage.setItem("darkAccent", darkAccent);
          this.$vuetify.theme.themes.light.accent = lightAccent;
          this.$vuetify.theme.themes.dark.accent = darkAccent;
        }
      },
    },
  };
  </script>
  