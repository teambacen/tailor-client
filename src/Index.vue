<template>
    <div id="index">
      <Heade></Heade>
      
      <div class="container-fluid">
        <div class="row flex-items-md-center">
          <div class="col-md-8 offset-md-2">
            <h1 class="tai-tit display-1">Tailor</h1>
            <div class="col-md-12 search-box">
              <form @submit.prevent="search">
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
                          <option v-if="state === 'terengganu'" v-for="tgn in terengganu" v-bind:value="tgn.value">
                            {{ tgn.text }}
                          </option>
                          <option v-if="state === 'kelantan'" v-for="kltn in kelantan" v-bind:value="kltn.value">
                            {{ kltn.text }}
                          </option>
                          <option v-if="state === 'melaka'" v-for="mlk in melaka" v-bind:value="mlk.value" >
                            {{ mlk.text }}
                          </option>
                        </select>
                    </div>
                    <div class="col-xs-2">
                      <button type="submit" name="" id="" class="btn btn-primary btn-block">Search</button>
                    </div>
                </div>
              </form>
            </div>
            <div class="col-md-12 margin-sikit">
              <div class="alert alert-warning" role="alert" v-show="error">
                  <strong>{{ error }}</strong>
              </div>
              <div class="card" v-for="result in results">
                <div class="card-block">
                  <h4 class="card-title">{{ result.store_name }}</h4>
                  <h6 class="card-subtitle mb-2 text-muted">{{ result.state }}, {{ result.city }}</h6>
                </div>
              </div>
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
      results: [],
      error: false,
      state: '',
      city: '',
      options: [
        { text: 'Select State', value: '' },
        { text: 'Terengganu', value: 'terengganu' },
        { text: 'Kelantan', value: 'kelantan' },
        { text: 'Melaka', value: 'melaka' }
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
    },
    search: function () {
      this.error = ''
      this.results = []
      this.$http.get('http://tailor.app/api/tailor?q=' + this.state).then((response) => {
        response.body.error ? this.error = response.body.error : this.results = response.body
        console.log(response.body)
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
.margin-sikit{
  margin-top: 20px;
}
</style>