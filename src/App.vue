<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" temporary app>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>View Meetups</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon 
        @click.stop="sideNav = !sideNav"
        class=""></v-toolbar-side-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left>supervisor_account</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content></v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  }
}
</script>
 