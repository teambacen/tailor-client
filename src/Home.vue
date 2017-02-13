<template>
    <div id="home" class="container bawah">
        <div class="row flex-items-xs-middle">
            <div class="col-md-4">
              <h1 class="main-title display-1">Tailor</h1>
            </div>
            <div class="col-md-4 line">
              <h1 class="sign-title display-3">SIGN UP</h1>
              <div class="alert alert-success" role="alert" v-if="success">
                <strong>{{ success }}</strong> <a href="#" class="alert-link"></a>
              </div>
              <form @submit.prevent="register">
                  <div class="form-group">
                    <input type="text" class="form-control" v-model="formDaa.name" placeholder="Name">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" v-model="formDaa.password" placeholder="Password">
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-control"  v-model="formDaa.email" placeholder="Email">

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
  name: 'home',
  data: function () {
    return {
      formDaa: {
        name: '',
        password: '',
        email: ''
      },
      success: ''
    }
  },
  methods: {
    register: function () {
      let formDaa = this.formDaa
      this.$http.post('http://tailor.app/api/register', formDaa).then((response) => {
        this.formDaa = {
          name: '',
          email: '',
          password: ''
        }
        this.success = 'Thank For Registering'
      }, function (response) {
        return console.log(response.data)
      })
    }
  }
}
</script>