import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode { }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
  namespace Type {
    export interface Object {
      [propName: string]: any
    }
  }
  namespace Ajax {
    // axios return data
    export interface AxiosResponse {
      data: Response
    }
  
    // reqposne interface
    export interface Response {
      error: null | object
      jsonrpc: string
      result: any
    }
  }
}
