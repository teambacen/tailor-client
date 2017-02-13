<template>
    <div class="booking">
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
                    <h1 class="display-4">Booking</h1>
                    <hr>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Book No</th>
                                <th>Tailor Name</th>
                                <th>Book Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="book in booking">
                                <td>{{ book.id }}</td>
                                <td>{{ book.tailor.data.store_name }}</td>
                                <td>{{ book.book_date }}</td>
                                <td>
                                    <span class="badge badge-default" v-if="book.status == 0">Pending</span>
                                    <span class="badge badge-primary" v-if="book.status == 1">Approve</span>
                                    <span class="badge badge-warning" v-if="book.status == 2">In Progress</span>
                                    <span class="badge badge-success" v-if="book.status == 3">Done</span>
                                    <span class="badge badge-danger" v-if="book.status == 4">Cancel</span>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
</template>
<script>
    import Heade from '../components/Header'
    export default{
      name: 'cbooking',
      components: {
        Heade
      },
      data: function () {
        return {
          booking: []
        }
      },
      mounted () {
        this.$http.get('http://tailor.app/api/user/book').then((response) => {
          this.booking = response.body.data
          console.log(response)
        }, function (response) {
          console.log(response)
        })
      }
    }
</script>