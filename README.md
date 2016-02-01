# simple-single-page-application-demo
异常简单的单页面应用例子

(DEMO)[http://codepen.io/hejx/pen/eJKwPm]

### 注意⚠️
1. 只支持内嵌html page切换
2. 路由规则为先进后出（栈），不能重复路由
3. 只提供页面跳转开始和结束的回调事件，包括一些简单的参数
4. 路由跳转不会改变当前URL

### 初始化

````
var app = new Spa();
````

### 页面 

有固定的格式，参考demo的index.html，页面必须有data-page，并且唯一

### 路由方法

#### 使用a标签

```
<a href="#about?id=1&name=test">click and go 'test' page</a>
```

#### 使用router.go()

```
app.router.go('somePage', {name: 'test'});
```

### 回调

```
//页面开始跳转
app.router.before('somePage', function(page){
    //page 里包含query参数
});

//页面跳转结束（动画结束）
app.router.after('somePage', function(page){
    //page 里包含query参数
});
```
