# git rm -r --cached . # 清除缓存
git add . #跟踪所有文件，除.gitignore文件规定的
read -p "Commit Message: " message #输入保存Commit Message为函数message
git commit -m "$message" #暂存文件，暂存附加信息message函数
git push gitlab master #推送到远端名gitlab的master分支
git push github master #推送到远端名github的master分支
hexo clean #清除博客本地生成器缓存
hexo g #渲染生成静态网页
hexo d #推送到远端名为github的gh-page分支
read -n 1 #暂停运行