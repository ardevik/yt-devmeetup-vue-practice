import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadMeetups: [
      {
        imageUrl:
          'http://3tsll33cscvk11pae33oze51-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/jakarta-hidden-gems-travel.png',
        id: 'jkt',
        title: 'Meetup in Jakarta',
        date: '2018-09-21'
      },
      {
        imageUrl:
          'https://explorewisata.com/wp-content/uploads/2017/06/wisata-bandung.jpg',
        id: 'bdg',
        title: 'Meetup in Bandung',
        date: '2018-09-22'
      },
      {
        imageUrl:
          'https://cdn.idntimes.com/content-images/community/2018/05/surabaya-563208a10bae5-284a3da3c4964ff7cbd556970117db09_600x400.jpg',
        id: 'sby',
        title: 'Meetup in Surabaya',
        date: '2018-09-23'
      }
    ],
    user: {
      id: 'asdasdo9etgasj',
      registeredMeetups: ['asdjonvsperjwrg']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      }
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return meetupId => {
        return state.loadMeetups.find(meetup => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
