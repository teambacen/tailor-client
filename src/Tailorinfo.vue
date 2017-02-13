<template>
    <div id="tailorinfo">
       
      <Heade></Heade>
      
      <div class="container bgwhite">
        <br>
        <br>
        <div class="alert alert-warning" role="alert" v-if="!tailor">
          <strong>Tailor Not Found</strong>
          <form ></form>
        </div>
        <div class="row">
          <div class="col-md-3">
            <img src="https://placehold.it/150x150" class="center" alt="">
            <h3 class=" storename">{{ tailor.store_name }}</h3>
            <hr>
            <h5 class="storename">{{ follower }} Follower</h5>
            <br>
            <a href="" class="btn btn-outline-success btn-block">Message</a>
          </div>
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-5">
                <h4>{{ tailor.city }}, {{ tailor.state }}</h4>
              </div>
              <div class="col-md-7">
                <a href="" class="btn btn-outline-primary" @click.prevent="follow" v-if="follo.follow != 1">Follow</a>
                <a href="" class="btn btn-primary" @click.prevent="follow" v-if="follo.follow == 1">Unfollow</a>
                <button class="btn btn-outline-primary" data-toggle="modal" data-target="#myModal">Request Appointment</button>
              </div>
            </div>
            <hr>
            <div class="row">
              <dt class="col-sm-3">Description</dt>
              <dd class="col-sm-9">{{ tailor.description }}</dd>

              <dt class="col-sm-3">Services</dt>
              <dd class="col-sm-9">{{ tailor.services }}</dd>
            </div>
            <hr>
            <h4>Feed</h4>
            <div class="row">
              <div class="col-sm-3 pad">
                  <img src="https://placehold.it/150x150" class="center" alt="">
              </div>
               <div class="col-sm-3 pad">
                  <img src="https://placehold.it/150x150" class="center" alt="">
              </div>
               <div class="col-sm-3 pad">
                  <img src="https://placehold.it/150x150" class="center" alt="">
              </div>
               <div class="col-sm-3 pad">
                  <img src="https://placehold.it/150x150" class="center" alt="">
              </div>
               <div class="col-sm-3 pad">
                  <img src="https://placehold.it/150x150" class="center" alt="">
              </div>
               <div class="col-sm-3 pad">
                  <img src="https://placehold.it/150x150" class="center" alt="">
              </div>
               <div class="col-sm-3 pad">
                  <img src="https://placehold.it/150x150" class="center" alt="">
              </div>
               <div class="col-sm-3 pad">
                  <img src="https://placehold.it/150x150" class="center" alt="">
              </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Request Appointment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="book" method="post" v-show="status">
                      <div class="form-group">
                        <label for="date">Select Date</label>
                        <input type="date" class="form-control"  v-model="formData.book_date">
                      </div>
                     <button type="submit" class="btn btn-primary">Save changes</button>
                    </form>
                    <h4 class="display-4" v-show="!status">Our Tailor Will Be Respond Soon</h4>
                  </div>
                      <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      tailor: '',
      message: [],
      mes: '',
      formData: {
        book_date: ''
      },
      status: true,
      follo: [],
      follower: ''
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
    },
    book: function () {
      let formData = this.formData
      this.$http.post('http://tailor.app/api/tailor/' + this.tailor.id + '/book', formData).then((response) => {
        this.status = false
        console.log(response)
      }, function (response) {
        console.log(response)
      })
    },
    follow: function () {
      this.$http.post('http://tailor.app/api/tailor/' + this.tailor.id + '/follow').then((response) => {
        console.log(response)
      }, function (response) {
        console.log(response)
      })
    }
  },
  computed: {
    getInfo: function () {
      this.$http.get('http://tailor.app/api/tailor/' + this.$route.params.id).then((response) => {
        this.tailor = response.body.data[0]
        console.log(response.body.data)
      }, function (response) {
        console.log(response.status)
      })
    }
  },
  mounted () {
    this.$http.get('http://tailor.app/api/tailor/' + this.tailor.id + '/user/follow').then((response) => {
      this.follo = response.body.data[0]
      console.log(response.body.data[0])
    }, function (response) {
      console.log(response)
    })
    this.$http.get('http://tailor.app/api/tailor/' + this.tailor.id + '/follower').then((response) => {
      this.follower = response.body
    })
  }
}
</script>
<style>
  .bgwhite{
    background: #fff;
    margin-top: 30px;
    padding: 20px;
  }
  .storename{
    margin-top: 20px; 
    text-align: center;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto
  }
  .pad{
    padding: 10px;
  }
</style>