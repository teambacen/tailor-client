<template>
    <div id="header">
        <nav class="navbar  navbar-light bg-faded">
        <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse"
            data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-toggleable-md" id="collapsibleNavId">
          <ul class="nav navbar-nav float-xs-right" v-show="!check">
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/signin">Sign In</router-link></a>
            </li>
            <li class="nav-item">
                 <a class="nav-link" href="#"><router-link to="/signup">Sign Up</router-link></a>
            </li>
          </ul>
          <ul class="nav navbar-nav float-xs-right" v-show="check">
            <li class="nav-item">
              <a href="" class="nav-link"> Hi ! {{ user.name }} </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link"> <router-link to="">Profile</router-link> </a>
            </li>
            <li class="nav-item" v-if="user.roles === 1">
              <a href="" class="nav-link"> <router-link to="">Tailor</router-link> </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link" @click="logout" >Sign Out</a>
            </li>
          </ul>
        </div>
        {{ getUser }}
      </nav>
    </div>
</template>
<script>
export default {
  name: 'heade',
  data: () => {
    return {
      access_token: '',
      user: []
    }
  },
  computed: {
    check: function () {
      if (window.localStorage.getItem('access_token')) {
        this.access_token = window.localStorage.getItem('access_token')
        return true
      } else {
        return false
      }
    },
    getUser: function () {
      this.$http.get('http://tailor.app/api/user').then((response) => {
        this.user = response.body
      })
    }
  },
  methods: {
    logout: () => {
      window.localStorage.removeItem('access_token')
    }
  }
}
</script>
<style>
    .navbar{
        border-radius:0px; 
    }
</style>