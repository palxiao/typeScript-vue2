<template>
  <div class="index">
    项目初始化成功
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import VueBase from '@/vueBase';

@Component({
  components: {
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

