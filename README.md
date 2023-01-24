

## 404页面$router报错
> 增加script标签

## 弹窗变成了组件,没有弹出来
> 引入element plus 的样式文件

1. 创建的监听键盘事件需要移除
2. dispatch用于触发action
3. 进度条插件 nprogress
    https://www.npmjs.com/package/nprogress

``` css
/* 修改进度条样式直接修改 */
#nprogress .bar{
  background-color: #f4f4f4;
  height: 3px;
}
```
4. 表达式结果再次计算加括号,不然无效
```javascript
(to.meta.title ? to.meta.title : "商城后台") + "--管理"
```