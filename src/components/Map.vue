<template>
  <div class="map" :style="mapStyle">
    <el-amap :touchZoom="false" :dragEnable="false" v-if="show" :vid="dtId" class="amap-demo" style="width: 100%;height: 100%"
      :center="center" :zoom="12">
      <el-amap-marker vid="component-marker" :position="center"></el-amap-marker>
    </el-amap>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import BaseVue from '@/components/vueBase'
@Component({
  components: {}
})
export default class Map extends BaseVue {
  @Prop({
    type: Array,
    default: () => {
      return [121.59996, 31.197646];
    }
  })
  private center!: number[];

  @Prop(Object)
  private styles!: Type.Object;

  private mapStyle: string = '{"width": "100%","height":"130px"}';

  private dtId: string = 'map';

  private show: boolean = true;

  private created() {
    this.handleStyle();
    this.dtId = 'map' + Math.random().toFixed(3);
  }

  private handleStyle(): void {
    let myStyle: string = '';
    const myStyleObj: Type.Object = this.$utils.extend(
      JSON.parse(this.mapStyle),
      this.styles
    );
    for (const key in myStyleObj) {
      if (myStyleObj.hasOwnProperty(key)) {
        myStyle += key + ':' + myStyleObj[key] + ';';
      }
    }
    this.mapStyle = myStyle;
  }
}
</script>


<style scoped lang="less">
.map {
  border-radius: 8px;
  overflow: hidden;
}
</style>
