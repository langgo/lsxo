 - 配置文件中的每一项，在什么情况下使用。保证所有的配置都是有用的









---

console help

logger



---

由于 styl 这种有依赖存在，所以不好判断是否有改动。所以不能做缓存。

// 但是在server情况下，这种要每次都生成。是不应该的。
// 整体的判断source文件夹是否有改动。或者按照改动的文件的格式来，重新加载该格式的文件。


主题文件夹下面的文件 watch，根据文件夹来。重新加载一个文件夹。
styl 这种文件，做缓存。缓存在db中。
//




watch 环境下
unwatch 环境下


// 是否缓存 styl

保持原目录结构

---
post

_id
_content // 未解析的markdown文本
content // 解析之后的文本
title // 文章标题，默认是文件名
date // 发表时间，默认文件创建时间，格式 todo
updated // 更新时间，文件的最后更新时间
path // 源目录
excerpt // 摘录，放置于首页，page页
md5 // 暂时用md5标志是否缓存。todo 验证，md5的运算速度和解析markdown的速度，差别有多大。如果一样快，则不能用md5标志。










# lsxo

 - 由于文件创建时间可能会随，转移文件夹，导致md文件的创建时间发生变化。而且还需要记录最后更新时间，所以，要把这些信息记录下来。
 -



## 流程

 - parsemd -> lsxo.posts | parseview -> lsxo.theme
 - genrouter -> lsxo.router
 - generate



## todo

 - 加载主题的配置到 `locals.theme`
 - highlight
 - __函数，_p函数 有关于 i18n, hexo/lib/plugins/filter/template_locals/i18n.js




















































