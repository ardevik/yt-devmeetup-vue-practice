<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Explore Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
            <div class="titleself">{{meetup.title}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join  our awsome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          {
            imageUrl:
              'http://3tsll33cscvk11pae33oze51-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/jakarta-hidden-gems-travel.png',
            id: 'asdasgasasdfa',
            title: 'Meetup in Jakarta'
          },
          {
            imageUrl:
              'https://explorewisata.com/wp-content/uploads/2017/06/wisata-bandung.jpg',
            id: 'asdasgasasdfa',
            title: 'Meetup in Bandung'
          },
          {
            imageUrl:
              'https://cdn.idntimes.com/content-images/community/2018/05/surabaya-563208a10bae5-284a3da3c4964ff7cbd556970117db09_600x400.jpg',
            id: 'asdasgasasdfa',
            title: 'Meetup in Surabaya'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .titleself {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>

