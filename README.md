# NgHELLO

## 升级
* npm uninstall -g @angular/cli
* npm cache clean
# if npm version is > 5 then use `npm cache verify` to avoid errors (or to avoid using --force)
* npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ 
* npm install -g @angular/cli@latest
* rm -rf node_modules dist
* npm install --save-dev @angular/cli@latest
* npm install

## 开发
* npm install
* ng serve 或 ng serve --host 192.168.10.113 --port 4201

打开你的浏览器，访问http://localhost:XXXX/ 或 http://192.168.10.xxx:xxxx

如果你想让加载的包更小，请使用以下方式启动angular-cli内置的轻量级http server

    ng serve --prod --aot

## AOT&TreeShaking

开发状态打出来的bundle体积比较大，在发布到生产环境之前需要进行prod和AOT，用法如下：

打开命令行，进入demo根目录，执行以下命令：
    
    ng build --prod --env=prod --aot

加上--prod参数之后，angular-cli会自动启用TreeShaking（摇树）特性，简而言之，就是把用不到的包全部剔除掉，就像从树上把枯叶子摇下来一样，很形象吧？加上--aot参数是让angular-cli启动预编译特性。

angular-cli会在项目根目录下生成一个dist目录，里面就是编译、压缩好的文件了。仔细观察你会发现，这些文件的体积已经被大幅度压缩，加上gzip之后有一些文件只剩下1/4左右的大小。

## UI组件
* ngx-bootstrap http://valor-software.com/ngx-bootstrap/#/
* moment http://momentjs.cn/docs/
* lodash http://lodashjs.com/docs/
* checkbox https://lokesh-coder.github.io/pretty-checkbox/
* bootstrap https://getbootstrap.com/docs/4.0/components/buttons/
* ng2-toastr https://github.com/PointInside/ng2-toastr
* ngx-perfect-scrollbar https://github.com/zefoy/ngx-perfect-scrollbar
* bootstrap-datepicker https://github.com/uxsolutions/bootstrap-datepicker
* bootstrap-daterangepicker http://www.daterangepicker.com/
* ng-select https://basvandenberg.github.io/ng-select
* ngx-pipes https://github.com/danrevah/ngx-pipes
* angular2-fontawesome https://github.com/travelist/angular2-fontawesome

## 图标
1. http://fontawesome.io/icons/ 常用
2. http://byrushan.com/projects/sa/1-0-3/content-widgets.html# ng-hello
