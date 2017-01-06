<template>
    <div id="detail">
        <Heade></Heade>
        
        <div class="container box-white">
            <div class="row">
                <div class="col-md-3">
                    
                </div>
                <div class="col-md-9 grey-line">
                    <h1 class="display-4">Your's Detail</h1>
                    <hr>
                    <form action="">
                        <div class="form-group">
                          <label for="">First Name</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.first_name" placeholder="" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Last Name</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.last_name" placeholder="" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Phone</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.phone" placeholder="" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Neck Size (CM)</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.leher" placeholder="" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Armpit Size (CM)</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.ketiak" placeholder="" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Arm Size</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.lengan" placeholder="" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Chest Size</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.dada" placeholder="" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <label for="">Waistline</label>
                          <input type="text" name="" id="" class="form-control" v-model="details.pinggang" placeholder="" aria-describedby="helpId">
                        </div>
                        <div class="form-group">
                          <button type="button" class="btn btn-primary">Update</button>
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
      details: {},
      length: []
    }
  },
  components: {
    Heade
  },
  computed: {
    getdata: function () {
      this.$http.get('http://tailor.app/api/user/detail').then((response) => {
        this.details = response.body.data[0]
        return console.log(JSON.stringify(response.body.data[0]))
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
    .grey-line{
        border-left: #D2D7D3 2px solid; 
    }
</style>