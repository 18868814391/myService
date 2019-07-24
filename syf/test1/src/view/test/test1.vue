<template>
  <div class="test1-page">

  </div>
</template>
<script>
import Cookies from 'js-cookie'
import moment from 'moment'
import {yiiGetDood} from '@/api';
import { Toast,Popup } from 'vant';
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

    },
    mounted () {
      yiiGetDood({
        
      }).then(()=>{

      }).catch(()=>{
        
      })
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

