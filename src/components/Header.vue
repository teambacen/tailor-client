<template>
    <div id="header">
        <nav class="navbar  navbar-light bg-faded">
        <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a href="" class="navbar-brand">Tailor</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          
          <ul class="navbar-nav" v-show="!check">
            <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/signin">Sign In</router-link></a>
            </li>
            <li class="nav-item">
                 <a class="nav-link" href="#"><router-link to="/signup">Sign Up</router-link></a>
            </li>
          </ul>
          <ul class="navbar-nav" v-show="check">
            <li class="nav-item">
              <a href="" class="nav-link"> Hi ! {{ user.name }} </a>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link"><router-link to='/'>Home</router-link></a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link bg"> <router-link to="/detail">Profile</router-link> </a>
            </li>
            <li class="nav-item" v-if="user.roles === 1">
              <a href="" class="nav-link"> <router-link to="/tailor">Tailor</router-link> </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link" @click="logout" >Sign Out</a>
            </li>
          </ul>
        </div>
        </div>
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
  mounted () {
    this.$http.get('http://tailor.app/api/user').then((response) => {
      this.user = response.body
    })
  },
  computed: {
    check: function () {
      if (window.localStorage.getItem('access_token')) {
        this.access_token = window.localStorage.getItem('access_token')
        return true
      } else {
        return false
      }
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
        background-color: #0274D3; 
    }
    .navbar-brand{
      color: #fff !important;
    }
    .navbar-default .navbar-nav > li > a {
        color: #fff !important;
    }
    .navbar-default .navbar-brand {
        color: #fff !important;
    }
    .nav-link {
      color: #fff !important;
      text-decoration: none;
    }
    .nav-link a{
      color: #fff;
    }
    .router-link-active {
      color: #fff;
    }
</style>