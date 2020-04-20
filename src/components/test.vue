<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{computedMsg}}</h2>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div>过滤器格式化测试：{{123|money('元')}}</div>
    <div id="postcard" ref="postcard" style="">
      <img :src="QRurl" alt="">
    </div>
    <div class="line-clamp-1" style="width:100px;background:red;">爱到家了卡萨基多拉商家的打两局</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import { Button, Icon } from 'vant';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';
@Component({
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon
  }
})
export default class HelloWorld extends Vue {
  @Prop(String)
  private msg!: string;
  @Prop([String, Number])
  private propB!: string | number;

  private QRurl: string = '';
  private $ajax!: Type.Object;
  private $utils!: Type.Object;
  private postcardCache: string = '';

  get computedMsg() {
    return '计算属性: ' + this.msg;
  }

  private async mounted() {
    await this.$nextTick();
    // 二维码生成测试
    await QRCode.toDataURL(location.href).then((url: string) => {
      this.QRurl = url;
    });
    // this.test();
    console.log(this.$utils.regular.phone.test(13711300890));

  }

  private test() {
    // 截图插件测试
    const domName: string = 'postcard';
    (this.$refs[domName] as HTMLElement).setAttribute(
      'style',
      'position:absolute;padding:40px;background:red;top:-200%;'
    );
    html2canvas(this.$refs[domName] as HTMLElement, {
      useCORS: true
      // scale: 2,
      // height: this.shareImgH
    }).then(canvas => {
      this.postcardCache = canvas.toDataURL('image/jpeg', 0.9);
      const img = new Image();
      img.crossOrigin = '';
      img.src = this.postcardCache;
      // img.style = ''
      img.onload = () => {
        document.getElementsByClassName('hello')[0].appendChild(img);
        console.log('(调试模式)生成的图片大小:', img.width, img.height);
      };
    });
    // axios请求测试
    // this.$ajax.home.getMember().then((res: Type.Object) => {});
  }

  @Emit('change')
  private change(e: MouseEvent) {
    // todo
  }

  @Watch('person', { immediate: true, deep: true })
  private onPersonChanged(val: string, oldVal: string) {
    // todo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
