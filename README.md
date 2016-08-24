## 1. 文件夹（文件）说明：
（待续）
- veer_design_draft: Veer task2 登录注册、显示在线人数、在线未登录人数的页面设计初稿.

- veer: rails 搭建环境成功应用文件夹。后续会上传本地开发的代码上去，目前正在做传值，数据库数据操作.

## 2. 实现技术说明：

刚接触几个小时的Ruby，刚接触Rails，做一个简单的登录注册应该还不是问题，很多实现“算法”，也就是实现思路是不用怎么去思考和理解的，已经用得得心应手了。

###先利用其VC模块，g(generate) controller veer querydata **进行数据操作**

一个简单的实现数据交互的思路，这里只用到Controller模块即可实现，View页面采用开始实现的草稿设计进行AJAX进行交互数据给controller

- 先简单说下我目前了解的情况，对于Rails的MVC模式，为了更快的去实现，我先利用其VC模块，更直接的说我暂时可以不用View模块，直接用ajax去Controller模块去取数据，就像以前初学动态web时的jsp页面之间传值。这里就把controller当作数据接受、返回的处理中心，根据我的需求，根据我传的参数，返回给我不同的结果，这里我也许会用json格式的数据，顺便先把Task1的api进行了简单实现。

- controller我想的使用形式post方式提交数据： 
  1. 添加数据库用户（注册） 
  路径：~/veer/dealdata?action=add&username=david&password=daivd        return true or false 便于前台反馈消息给用户
  2. 查询数据库用户（登录） 
  路径：~/veer/dealdata?action=query&username=david&password=daivd   return user的json 这里其实用不着返回json，直接可以返回true or false显示登录成功与否，但是为了实现格式化json输出技术，这里简单实现，因为数据库中就username和password字段
