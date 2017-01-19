<template>
    <div id="tailorinfo">
       
      <Heade></Heade>
      
      <div class="container box-white">
        <div class="alert alert-warning" role="alert" v-if="!tailor">
          <strong>Tailor Not Found</strong>
          <form ></form>
        </div>
        {{ tailor }}
        {{ getInfo }}
      </div>
    </div>
</template>
<script>
import Heade from './components/Header'
export default{
  name: 'tailorinfo',
  data: function () {
    return {
      tailor: [],
      message: [],
      mes: ''
    }
  },
  ready () {
    return console.log('test')
  },
  components: {
    Heade
  },
  methods: {
    press: function () {
      this.message.push({
        dat: this.mes
      })
    }
  },
  computed: {
    getInfo: function () {
      this.$http.get('http://api.penjahit.my/api/tailor/' + this.$route.params.id).then((response) => {
        this.tailor = response.body.data[0]
        console.log(response.body.data)
      }, function (response) {
        console.log(response.status)
      })
    }
  }
}
</script>