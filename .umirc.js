
// ref: https://umijs.org/config/
export default {
  sass:{},
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'umi',
      dll: true,
      routes: {
        exclude: [
        
          /components\//,
        ],
      },
    }],
  ],
}
