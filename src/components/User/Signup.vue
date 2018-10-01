<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-form @submit.prevent="onSignup">
              <v-text-field
                name="email"
                id="email"
                v-model="email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                name="password"
                id="password"
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-text-field
                name="confirmPassword"
                id="confirmPassword"
                v-model="confirmPassword"
                label="Confirm Password"
                type="password"
                :rules=[comparePassword]
                required
              ></v-text-field>
              <v-btn type="submit">
                Sign Up
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      confirmPassword: null
    }
  },
  computed: {
    comparePassword () {
      return this.confirmPassword !== this.password ? 'Password do not match' : ''
    },
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignup () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
  }
}
</script>
