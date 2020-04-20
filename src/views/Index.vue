<template>
  <div class="index">
    <div class="title">普通创业篇 - 推箭心选</div>
    <div class="head"></div>
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
.title {
  font-size:42px;
  color:rgba(60,65,70,1);
}
.head {
  /* width:29rem;
  height:6.67rem;
  background:rgba(247,248,249,1);
  border-radius:0.42rem;
  margin-left: 1.08rem; */
  width:696px;
  height:160px;
  background:rgba(247,248,249,1);
  border-radius:10px;
  margin-left: 26px;
}
</style>

