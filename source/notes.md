---
title: 建站笔记
date: 2020-10-07
tags:
sub: 1
---

Hexo使用

<!-- more -->

*italic*  斜体

**bold**  粗体

# heading_level_1  font-size: 2.0em
## heading_level_2  font-size: 1.7em
### heading_level_3  font-size: 1.5em
#### heading_level_4  font-size: 1.3em & :before: "#"
##### heading_level_5  font-size: 1.2em
###### heading_level_6  font-size: 1.0em

/Enter/  换行
/Enter//Enter/  分段

![remark](photo_link) or 
![remark](photo_link title)  图片

[text](link_address) or
[text](link_address Title)  链接

*** or
--- 水平分区横线(hexo中 前面需多空一行)
需前空行

~~del_text~~  黑幕

> blockquote  灰色背景，左侧蓝色竖线

`code`  橙色小字，粉背景，不分段

    code  黑色小字，分段，行前加入制表符 Tab

* Unordered List1  
* Unordered List2  
可以改 * 为 + 或 -
需前空行

1. Ordered List1
2. Ordered List2
需前空行

\ Escape Symbol  转义符号

图片插入示例：

{% fold %}
{% asset_img .jpg 图片 %}

text
{% endfold %}

## Hexo安装

    git设置代理：
    $ git config --global http.https://github.com.proxy socks5://127.0.0.1:****
    $ git config --global https.https://github.com.proxy socks5://127.0.0.1:****
    git取消代理：
    $ git config --global --unset http.proxy
    $ git config --global --unset https.proxy

1. 安装环境与依赖包

* [Node.js](https://nodejs.org/zh-cn/)
* $ npm install hexo-cli -g

2. 初始化设置

case1: 压缩包可解压后直接cd运行

case2: 从头开始

    1. 空文件夹：cd - hexo init

    2. $ git clone https://github.com/theme-next/hexo-theme-SOMETHEME themes/SOMETHEME 

    3. OPEN ./config.yml:
    theme: landscape   -->   theme: SOMETHEME

## 域名设置

1. 注册（购买）域名

* [Porkbun](https://porkbun.com/) （廉价，但需要国际信用卡）

2. DNS相关设置  

2.1  DNS解析服务商

* [CloudFlare](https://dash.cloudflare.com/) #功能丰富 #访问情况统计

2.2  回到域名注册商页面 - 填写DNS服务器(AUTHORITATIVE NAMESERVERS)
    cass.ns.cloudflare.com
    charles.ns.cloudflare.com

2.3 GitLab - Pages - New Domain

    Example:
    cloudpool.me CNAME StarunneR.gitlab.io. --> CloudFlare: Type = CNAME; Name = cloudpool.me; Content = StarunneR.gitlab.io.

## Git设置

1. 建议安装[Visual Studio Code](https://code.visualstudio.com/)
2. 安装[git](https://git-scm.com/)，一直回车，在第三次回车确认前 将default editor设置为Visual Studio Code，打开git bash
3. 生成公共密钥：
    $ ssh-keygen -t rsa + 三次回车
    查看公共密钥：
    $ cat ~/.ssh/id_rsa.pub
    并复制以ssh-rsa开头的所有内容
4. 打开Gitlab网页用户设置中ssh密钥一栏，粘贴ssh-rsa开头的公共密钥，设置用户名，生效时间。
5. 配置命令：
    $ git config --global user.name "USERNAME"(--global代表应用到整个系统)
    $ git config --global user.email EMAIL
    $ cd blog
    $ git remote add gitlab git@gitlab.com:cloudpool/blog.git
6. 推送
    $ git add .
    $ git commit -m "COMMENT" #暂存文件，暂存附加信息为COMMENT
$ git commit -m "auto" （）
$ git push gitlab master（推送到远端名gitlab的master分支）
$ read -n 1 （暂停运行）

    $ git push gitlab master
    (即commit.sh内容)

## GitLab自动部署设置

新建文件 ./.gitlab-ci.yml

    ./.gitlab-ci.yml:

<pre>
    image: node:12.19.0
    cache:
      paths:
        - node_modules/

    before_script:
      - npm install hexo-cli -g
      - npm install

    pages:
      script:
        - hexo generate
      artifacts:
        paths:
          - public
      only:
        - master
</pre>

## 本地测试

./test.sh 清理缓存 生成静态文件 启动服务器

    $ hexo clean
    $ hexo g
    $ hexo s