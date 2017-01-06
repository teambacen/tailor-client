<template>
    <div id="home">
        <h1 v-if="success">{{ success }}</h1>
        <form @submit.prevent="register">
            <input type="text" v-model="formDaa.name">
            <input type="text" v-model="formDaa.email">
            <input type="password" v-model="formDaa.password">
            <input type="submit">Submit</input>
        </form>
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