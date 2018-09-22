<template>
  <v-container>
    <v-layout row warp>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media height="130px"
                  src="http://3tsll33cscvk11pae33oze51-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/jakarta-hidden-gems-travel.png">
                </v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">My Meetup</h5>
                    <div>20 Sep 2018</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn to="/meetup/1" flat>
                    <v-icon left light>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>  
      </v-flex>
    </v-layout>
  </v-container>
</template>
