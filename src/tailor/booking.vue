<template>
    <div class="booking">
        <Heade></Heade>
        <div class="container box-white">
            <div class="row">
                <div class="col-md-3">
                   <div class="list-group">
                       <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-id-card" aria-hidden="true"></i> <router-link to="/tailor">Detail</router-link></a>
                       <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-history" aria-hidden="true"></i> <router-link to="/tailor/booking">Booking</router-link></a>
                       <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-key" aria-hidden="true"></i> Password</a>
                   </div>
                </div>
                <div class="col-md-9 grey-line">
                    <h1 class="display-4">Booking</h1>
                    <hr>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Book No</th>
                                <th>Customer Name</th>
                                <th>Book Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr v-for="book in bookings">
                                <td>{{ book.id }}</td>
                                <td>{{ book.user.data.name }}</td>
                                <td>{{ book.book_date }}</td>
                                <td>
                                    <span class="badge badge-default" v-if="book.status == 0">Pending</span>
                                    <span class="badge badge-primary" v-if="book.status == 1">Approve</span>
                                    <span class="badge badge-warning" v-if="book.status == 2">In Progress</span>
                                    <span class="badge badge-success" v-if="book.status == 3">Done</span>
                                    <span class="badge badge-danger" v-if="book.status == 4">Cancel</span>
                                </td>
                                <td>
                                    <i class="fa fa-pencil" aria-hidden="true" data-toggle="modal" data-target="#myModal"></i>
                                    <!-- Modal -->
                                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Status</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="alert alert-success" v-if="message != ''" role="alert">
                                                {{ message }}
                                            </div>
                                            <form @submit.prevent="statu(book.id)">
                                                <div class="form-group">
                                                    <select v-model="status.status" class="form-control">
                                                        <option value="0">Pending</option>
                                                        <option value="1">Approve</option>
                                                        <option value="2">Progress</option>
                                                        <option value="3">Done</option>
                                                        <option value="4">Cancel</option>
                                                    </select>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Save changes</button>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    {{ booking }}
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
    import Heade from '../components/Header'
    export default {
      name: 'booking',
      components: {
        Heade
      },
      data: function () {
        return {
          tailor: [],
          bookings: [],
          status: {
            status: ''
          },
          message: ''
        }
      },
      methods: {
        statu: function (id) {
          let status = this.status
          this.$http.post('http://tailor.app/api/tailor/' + id + '/status', status).then((response) => {
            this.message = 'Status Has Been Update'
            console.log(response)
          }, function (response) {
            console.log(response)
          })
        }
      },
      computed: {
        booking: function () {
          this.$http.get('http://tailor.app/api/tailor/' + this.tailor.id + '/book').then((response) => {
            this.bookings = response.body.data
            console.log(response.body.data)
          })
        }
      },
      mounted () {
        this.$http.get('http://tailor.app/api/tailor/detail').then((response) => {
          this.tailor = response.body.data[0]
          console.log(response)
        }, function (response) {
          console.log(response)
        })
      }
    }
</script>