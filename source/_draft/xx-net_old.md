### 方法 3：使用 teredo 等（实测并不稳定）

[教程](https://github.com/XX-net/XX-Net/wiki/如何开启IPv6)
[简便工具](https://github.com/XX-net/XX-Net/issues/10282)

---

## 第二步：程序设置

### 电脑：XX-Net

[Github-XX-Net](https://github.com/XX-net/XX-Net)
[下载](https://github.com/XX-net/XX-Net/blob/master/code/default/download.md)
解压文件，打开 start.bat 或 start.vbs
推荐浏览器中安装 SwitchyOmega，火狐/谷歌扩展搜索或直接导入同名文件夹中的.xpi/.crx 文件，并导入配置文件（主程序同名文件夹下.bak 文件）

### 手机：[Xndroid](https://github.com/XndroidDev/Xndroid/releases)（推荐 root 后使用）

[教程](https://github.com/XX-net/XX-Net/wiki/安卓版)

其他：[AppID 申请](https://github.com/XX-net/XX-Net/wiki/how-to-create-my-appids)，然后部署服务端(记得要用 ID 部署，不要用名称)，之后把部署成功 AppID 的在配置中保存

### 若 IPv6 隧道断开

尝试： 1.重新连接 WIFI（不一定起效） 2.重启路由器，应该会更换 IP 地址
之后用新 IP 重新设置 6in4 隧道（重新填写 Tunnel Broker 设置中的 IP 地址即可）