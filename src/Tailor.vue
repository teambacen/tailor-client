<template>
    <div id="tailor">
        <Heade></Heade>
        <div class="container box-white">
            <div class="row">
                <div class="col-md-3">
                    <div class="list-group">
                       <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-id-card" aria-hidden="true"></i> <router-link to="/tailor">Detail</router-link></a>
                       <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-history" aria-hidden="true"></i> <router-link to="/tailor/booking">Booking</router-link></a>
                       <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-key" aria-hidden="true"></i> Customer</a>
                   </div>
                </div>
                {{ checkTailor }}
                <div class="col-md-9 grey-line">
                    <h1 class="display-4">Tailor Detail</h1>
                    <hr>
                    <form enctype="multipart/form-data" @submit.prevent="store">
                        <div class="form-group">
                          <label for="">Store Name</label>
                          <input type="text" name="" id="" class="form-control" v-model="tailor.store_name" placeholder="" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Company Registration Number</label>
                          <input type="text" name="" id="" class="form-control" placeholder="" v-model="tailor.ssm" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Address</label>
                          <textarea class="form-control" name="" id="" rows="3" v-model="tailor.address"></textarea>
                        </div>
                        <div class="form-group">
                          <label for="">State</label>
                          <input type="text" name="" id="" class="form-control" placeholder="" v-model="tailor.state" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">City</label>
                          <input type="text" name="" id="" class="form-control" placeholder="" v-model="tailor.city" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Phone</label>
                          <input type="text" name="" id="" class="form-control" placeholder="" v-model="tailor.phone" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Services</label>
                          <input type="text" name="" id="" class="form-control" placeholder="" v-model="tailor.services" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Description</label>
                          <textarea class="form-control" name="" id="" rows="3" v-model="tailor.description"></textarea>
                        </div>
                        <div class="form-group">
                          <label for="">Default Picture</label>
                          <input type="file" class="form-control-file" name="" id="" placeholder="" aria-describedby="fileHelpId">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Heade from './components/Header.vue'
export default {
  name: 'tailor',
  data: function () {
    return {
      tailor: {
        store_name: '',
        ssm: '',
        address: '',
        state: '',
        city: '',
        phone: '',
        services: '',
        description: '',
        default_picture: ''
      }
    }
  },
  components: {
    Heade
  },
  methods: {
    store: function () {
      let tailor = this.tailor
      this.$http.post('http://tailor.app/api/tailor', tailor).then((response) => {
        console.log(response.body)
      })
    }
  },
  computed: {
    checkTailor: function () {
      this.$http.get('http://tailor.app/api/tailor/detail').then((response) => {
        if (response.body.data[0] === undefined) {
          console.log('no data')
        } else {
          this.tailor = response.body.data[0]
        }
      }, function (response) {
        console.log(response)
      })
    }
  }
}
</script>