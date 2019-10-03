<template>
  <div class="test1-page">

  </div>
</template>
<script>
import Cookies from 'js-cookie'
import moment from 'moment'
import {yiiGetDood} from '@/api';
import { Toast,Popup } from 'vant';
import syftime from 'syftime'
  export default {
  components: {
		[Toast.name]: Toast,
		[Popup.name]: Popup,
  }, 		
    data () {
      return {

      }
    },
    created () {
      let stamp=syftime.TimeStamp('2018/12/27 18:30:00')
      console.log(stamp)
      let stamp2=syftime.TimeStamp('2019-12-27 10:12:33')
      let stamp3=stamp2-stamp
      console.log(syftime.TimeString(stamp3).timeData1);
      let stamp4=syftime.TimeEver('2019-9-12 02:01:00')
      console.log(stamp4)
      let stamp5=new Date().getTime()
      let stamp6=syftime.TimeStamp('2019-9-14 09:30:00')
    },
    mounted () {

    },
    destroyed () {

    },
    computed: {

    },
    methods: {

    }
  }
</script>
<style lang="scss">
.test1-page{

}
</style>

