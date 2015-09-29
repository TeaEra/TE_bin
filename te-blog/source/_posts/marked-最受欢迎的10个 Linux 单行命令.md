title: 10个Linux命令
date: 2015-09-24
tags:
    - marked
    - linux
---

1. 以 root 帐户执行上一条命令

    ```bash
    sudo !!
    ```

2. 利用 Python 搭建一个简单的 Web 服务器，可通过 http://$HOSTNAME:8000 访问

    ```bash
    python -m SimpleHTTPServer
    ```

3. 在 Vim 中无需权限保存编辑的文件
        
    ```bash
    :w !sudo tee %
    ```

4. 更改到上一次访问的目录

    ```bash
    cd -
    ```

5. 将上一条命令中的 foo 替换为 bar，并执行

    ```bash
    ^foo^bar
    ```

6. 快速备份或复制文件

    ```bash
    cp filename{,.bak}
    ```

7. traceroute + ping

    ```bash
    mtr google.com
    ```

8. 搜索命令历史，但不执行

    ```bash
    !whatever:p
    ```

9. 将 ssh keys 复制到 user@host 以启用无密码 SSH 登录

    ```bash
    ssh-copy-id user@host
    ```

10. 把 Linux 桌面录制为视频

    ```bash
    ffmpeg -f x11grab -s wxga -r 25 -i :0.0 -sameq /tmp/out.mpg
    ```