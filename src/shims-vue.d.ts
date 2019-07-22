declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'qrcode';
declare module 'vue-amap';

declare module 'vue/types/vue' {
  interface Vue {
    $ajax: any,
    $utils: any
  }
}

