<template>
    <div id="detail">
        <Heade></Heade>
        
        <div class="container box-white">
            <div class="row">
                <div class="col-md-3">
                   <div class="list-group">
                       <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-id-card" aria-hidden="true"></i> <router-link to='/detail'>Detail</router-link></a>
                       <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-history" aria-hidden="true"></i> <router-link to='/user/booking'>Booking</router-link></a>
                       <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-key" aria-hidden="true"></i> Password</a>
                   </div>
                </div>
                <div class="col-md-9 grey-line">
                    <h1 class="display-4">Your's Detail</h1>
                    <hr>
                    <div class="alert alert-success" v-if="message != ''">
                      {{ message }}
                    </div>
                    <form @submit.prevent="storeDetail">
                        <div class="form-group">
                          <label for="">First Name</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.first_name" placeholder="" aria-describedby="helpId" required>
                        </div>
                        <div class="form-group">
                          <label for="">Last Name</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.last_name" placeholder="" aria-describedby="helpId" required>
                        </div>
                        <div class="form-group">
                          <label for="">Phone</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.phone" placeholder="" aria-describedby="helpId" required>
                        </div>
                        <div class="form-group">
                          <label for="">Neck Size (CM)</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.leher" placeholder="" aria-describedby="helpId" required>
                        </div>
                        <div class="form-group">
                          <label for="">Armpit Size (CM)</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.ketiak" placeholder="" aria-describedby="helpId" required>
                        </div>
                        <div class="form-group">
                          <label for="">Arm Size</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.lengan" placeholder="" aria-describedby="helpId" required>
                        </div>
                        <div class="form-group">
                          <label for="">Chest Size</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.dada" placeholder="" aria-describedby="helpId" required>
                        </div>
                        <div class="form-group">
                          <label for="">Waistline</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.pinggang" placeholder="" aria-describedby="helpId" required>
                        </div>
                        <div class="form-group">
                          <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
        {{ getdata }}
    </div>
</template>
<script>
import Heade from './components/Header.vue'

export default{
  name: 'detail',
  data: () => {
    return {
      details: {
        first_name: '',
        last_name: '',
        phone: '',
        leher: '',
        ketiak: '',
        lengan: '',
        dada: '',
        pinggang: ''
      },
      length: [],
      error: '',
      message: ''
    }
  },
  components: {
    Heade
  },
  methods: {
    storeDetail: function () {
      let detail = this.details
      this.$http.post('http://tailor.app/api/user', detail).then((response) => {
        this.message = 'Your Detail Has Been Save'
        console.log(response)
      }, function (response) {
        console.log(response)
      })
    }
  },
  computed: {
    getdata: function () {
      this.$http.get('http://tailor.app/api/user/detail').then((response) => {
        if (response.body.data[0] === undefined) {
          console.log('no data')
        } else {
          this.details = response.body.data[0]
        }
      }, function (response) {
        console.log(response)
      })
    }
  }
}
</script>
<style>
    .box-white{
        background: #fff;
        margin-top: 10px;
    }
    .box-white .row{
        padding: 30px;
    }
    .box-white .form-control{
        border-bottom: #6C7A89 2px solid; 
        border-radius: 0px;
    }
    .box-white .list-group-item{
        border: transparent 0px ;
    }
    .grey-line{
        border-left: #D2D7D3 2px solid; 
    }
</style>