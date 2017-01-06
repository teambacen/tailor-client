<template>
    <div id="index">
      <Heade></Heade>
      
      <div class="container-fluid">
        <div class="row flex-items-md-center">
          <div class="col-md-8 offset-md-2">
            <h1 class="tai-tit display-1">Tailor</h1>
            <div class="col-md-12 search-box">
              <form>
                <div class="row">
                    <div class="col-xs-4">
                      <select class="form-control" name="" id="" v-model="state">
                          <option v-for="option in options" v-bind:value="option.value">
                            {{ option.text }}
                          </option>
                        </select>
                    </div>
                    <div class="col-xs-6">
                      <select class="form-control" name="" id="" v-model="city">
                          <option v-if="state === 'tgn'" v-for="tgn in terengganu" v-bind:value="tgn.value">
                            {{ tgn.text }}
                          </option>
                          <option v-if="state === 'kltn'" v-for="kltn in kelantan" v-bind:value="kltn.value">
                            {{ kltn.text }}
                          </option>
                          <option v-if="state === 'mlk'" v-for="mlk in melaka" v-bind:value="mlk.value" >
                            {{ mlk.text }}
                          </option>
                        </select>
                    </div>
                    <div class="col-xs-2">
                      <button type="button" name="" id="" class="btn btn-primary btn-block">Search</button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Heade from './components/Header'

export default{

  name: 'index',
  data: () => {
    return {
      user: [],
      state: '',
      city: '',
      options: [
        { text: 'Select State', value: '' },
        { text: 'Terengganu', value: 'tgn' },
        { text: 'Kelantan', value: 'kltn' },
        { text: 'Melaka', value: 'mlk' }
      ],
      terengganu: [
        { text: 'Select City', value: '' },
        { text: 'Dungun', value: 'dungun' },
        { text: 'Paka', value: 'paka' },
        { text: 'Kemaman', value: 'kemaman' }
      ],
      kelantan: [
        { text: 'Select City', value: '' },
        { text: 'Kota Bahru', value: 'kb' },
        { text: 'Pasir Mas', value: 'pm' }
      ],
      melaka: [
        { text: 'Select City', value: '' },
        { text: 'Jasin', value: 'jsn' },
        { text: 'Alor Gajah', value: 'alg' }
      ]
    }
  },
  components: {
    Heade
  },
  methods: {
    geti: function () {
      this.$http.get('http://tailor.app/api/user').then((response) => {
        this.user = response.body
      })
    }
  }
}
</script>
<style>
.search-box{
  width: 100%;
  background: #2C3E50;
  padding: 20px;
  border-radius: 4px;
}

.btn-primary{
  background: #19B5FE;
  border: #19B5FE 0 solid;
}
.btn-primary:hover{
  background: #19B5FE;
}
.form-control{
  border-radius:3px;  
}
.tai-tit{
  color: #fff;
  font-size:10em;
  padding-top: 300px;
  padding-left:35%; 
}
</style>