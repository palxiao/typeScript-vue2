<template>
  <div class="index">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import VueBase from '@/vueBase';
import { Swipe, SwipeItem, NoticeBar } from 'vant';
// import test from '@/components/test.vue';

@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [NoticeBar.name]: NoticeBar,
    // test
  }
})
export default class Index extends VueBase {
  // public constructor() {
  //   super();
  // }
  // private created() {}
  private async mounted() {
    await this.$nextTick();
  }
}
</script>

<style scoped>

</style>

