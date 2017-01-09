<template>
        {{ check }}
    <div id="login" class="container bawah">
          <div class="row flex-items-xs-middle">
            <div class="col-md-4">
              <h1 class="main-title display-1">Tailor</h1>
            </div>
            <div class="col-md-4 line">
              <h1 class="sign-title display-3">SIGN IN</h1>
              <div class="alert alert-warning" role="alert" v-if="fail.error">
                <strong>{{ fail.error }}</strong> <a href="#" class="alert-link"></a>
              </div>
              <form @submit.prevent="login">
                  <div class="form-group">
                    <input type="text" class="form-control" v-model="formData.username" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" v-model="formData.password" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <button type="submit" name="" id="" class="btn btn-primary btn-block">Sign In</button>
                  </div>
              </form>
            </div>
            <div class="col-md-4"></div>
          </div>
    </div>
</template>
<script>
    export default{
      name: 'login',
      data: function () {
        return {
          formData: {
            grant_type: 'password',
            client_id: '2',
            client_secret: 'glw2WS7NvqZkNLkH9VTHTbnPfrVO9S8AJuM5iupK',
            username: '',
            password: '',
            scope: '*'
          },
          fail: {
            error: '',
            message: ''
          }
        }
      },
      methods: {
        login: function () {
          let formData = this.formData
          this.$http.post('http://tailor.app/oauth/token', formData).then((response) => {
            this.fail.error = ''
            window.localStorage.setItem('access_token', response.data.access_token)
          }, function (response) {
            if (response.data) {
              this.fail.error = response.data.message
            }
            return console.log(response)
          })
        }
      },
      computed: {
        check: function () {
          if (window.localStorage.getItem('access_token')) {
            console.log('aa')
          } else {
            console.log('aa')
          }
        }
      }
    }
</script>
<style>
  body{
    background: url(./assets/bg.png) no-repeat center center fixed;
    background-size: cover;
  }
  .sign-title{
    color: #fff;
    font-size: 5em;
  }
  .bawah{
    margin-top: 300px;
  }
  .form-control{
    border: transparent 0 solid;
  }
  .line{
    border-left: #fff 3px solid;
    padding: 10px;
    padding-left: 20px;
  }
  .main-title{
    color:#fff;
    font-size: 8em;
    padding-top: 90px;
  }
</style>