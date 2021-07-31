`parse-html`是将html格式的文本转化为`hyperscript`格式文本的前端实用工具。

Parse the html tag and generate the js function declarative source code. 

`hyperscript`格式常用于构造DOM文档，它可以直接被javascript使用，并且避免许多html的陷阱。

`parse-html`输入内容可以是任何类似html的格式文本，例如html，xml，jsx等等各种格式的文本。生成hyperscript代码的一般语法为

```js
tagName(props={}, childNodes=[])
```

## 用法

首先将github中的内容，克隆至本地。仓库地址为xp44mm/parse-html仓库。

在文件夹根目录启动命令行。执行：

```bash
npm i
```

安装依赖包。

```bash
npm run build
```

生成页面。

## 运行

导航进入目录`parse-html/dist`找到`index.html`双击，用浏览器打开页面，运行。

贴一些html源文本，到顶部的输入文本框，点击生成按钮，底部的输出文本框会生成输出代码。

将输出代码粘贴的你的源文件，在此基础上，适当的修改之。

