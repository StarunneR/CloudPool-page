git rm -r --cached . # 清除缓存
git add . #跟踪所有文件，除.gitignore文件规定的
read -p "Commit Message: " message #输入保存Commit Message为函数message
git commit -m "$message" #暂存文件，暂存附加信息message函数
git push github master #推送到远端名github的master分支