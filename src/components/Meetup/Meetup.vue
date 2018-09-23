<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h5 class="primary--text">{{meetup.title}}</h5>
          </v-card-title>
          <v-img height="400px"
            :src="meetup.imageUrl">
          </v-img>
          <v-card-text>
            <div class="info--text">{{meetup.date}} - Where it takes place</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam maxime quasi doloribus laboriosam accusantium odio minima delectus distinctio harum repellat minus, beatae a reprehenderit, sunt impedit dolore at praesentium!</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
