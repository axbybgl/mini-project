# First small project 
## Preface
在做这个迷你练习项目前，请提前阅读：
1. [廖雪峰的git教程](https://www.liaoxuefeng.com/wiki/896043488029600)
2. [廖雪峰的JavaScript教程（快速入门 & Node.js【安装Node.js和npm；第一个Node程序；
搭建Node开发环境（选读）；模块】部分）](https://www.liaoxuefeng.com/wiki/1022910821149312)

在做这个迷你练习项目前，你应该已经掌握了：
```
git reset --hard commitID // 返回某一个commit ID
git reflog // 查看git命令记录
git checkout -- fileName // 撤销对某个文件的修改
git rm fileName // 删除某一个文件后在git里删除对应文件
git remote add origin yourGitSever // 添加远程服务器
git push -u origin master // 第一次将master上传到服务器
git push origin branchName // 将branchName分支上传到服务器
git switch -c branchName // 创建一个branchName的分支并切换到这个分支
git branch // 查看所有分支以及当前所在分支
git branch -d branchName // 删除branchName分支
git status
git log 
git merge branchName // 用FastForward模式将branchName分支合并到当前分支
git merge --no-ff branchName // 禁用FastForward模式merge
git add
git commit -m "your message"
git stash // 工作区暂存
git tag -a yourTagName -m "your message" commitID // yourTagName -> commitID 相当于对commitID设置别名
```

对.gitignore文件的修改。

基本JavaScript语法以及对Node.js的基本了解。

具体关于Node.js环境搭建的问题：
关于不同系统的配置问题请仔细阅读廖雪峰的博客并Google相关资料。
## Start
### Goal
在本项目中你将完成用JavaScript打印100以内所有素数的项目。文件树如下：
```
+ hh-mini-project
|
| README.md 
|
| hello.js // example code (type node hello.js to run)
|
| main.js // you need to create this file
|
| + src // you need to create this directory
| |
| | isPrime.js // you need to create this file 
|
+
```
### Procedure
1. 首先，把此仓库clone到本地。
2. 创建一个dev分支。
3. 在分支上完成所有文件的创建以及修改（注意随时用git记录重要修改）。
4. 在终端输入 node main.js。如果输出不对，返回上一步修改并用git记录。
5. 测试成功后，返回master分支。
6. 利用--no-ff模式将dev分支merge到master分支上。
7. 将master分支上传到你的GitHub远程仓库。

## NOTES
1. 在JavaScript中一个函数的声明方式如下：
```
function foo(...) {
    // code...
}
```
2. 模块的导出请仔细阅读廖雪峰博客关于模块的部分（很像Python的import）。


