1. **首先将jar包传到服务器指定目录下**

我这里是在根目录下创建了一个mydata目录

![image-20221119200750771](https://img-blog.csdnimg.cn/img_convert/39b1a5c8ed156334c7ae3423fe9fc9f7.png)

## 1. 编写Dockerfile文件

**在mydata目录下创建Dockerfile文件，编写Dockersfile文件**

```dockerfile
FROM java:8
EXPOSE 8160

VOLUME /tmp

ENV TZ=Asia/Shanghai
RUN ln -sf /usr/share/zoneinfo/{TZ} /etc/localhosttime && echo "{TZ}" > /etc/timezone

ADD campus-modular.jar /app.jar
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]

# FROM java:8：表示基于 Jdk8 环境
# EXPOSE 9999：表示对外暴露端口
# VOLUME /tmp：表示挂载在/tmp目录下
# RUN bash -c 'touch /app.jar'：表示把jar包添加到镜像服务的根目录中并改名app.jar
# ENTRYPOINT ["java","-jar","/app.jar"]：启动命令
```

## 2. 配置nginx文件

1. **在/目录下创建一个app目录，进入app目录**

```bash
mkdir /app
```

1. **首先创建一个nginx容器，只是为了复制出配置**

```bash
# 1.运行容器
docker run -p 80:80 --name nginx -d nginx:1.18.0# 2.将容器内的配置文件拷贝到当前目录/app中:
docker container cp nginx:/etc/nginx .
# 3.将文件nginx修改为conf
mv nginx conf
# 4.创建文件夹nginx
mkdir nginx
# 5.将conf目录拷贝到nginx目录
cp -r conf nginx/
# 6.删除conf目录
rm -rf conf
# 3.停止并删除容器
docker stop nginx && docker rm nginx 
```

## 3. 编写docker-compose.yml文件

1. **在/mydata目录下创建docker-compose.yml文件，并编写docker-compose.yml文件**

 在vim模式下 `:set paste`粘贴的文本数据不会乱

```yaml

```

1. **检查当前目录下compose.yml文件是否有语法错误**

```ini
docker compose config -q
```

1. **启动所有docker-compose服务并后台运行**

```ini
docker compose up -d
```









## Mysql

-d: 后台运行容器，也可以使用镜像id -p 将容器的端口映射到本机的端口 -v 将主机目录挂载到容器的目录 -e 设置参数  MYSQL_ROOT_PASSWORD 指定登录密码  

docker run -d --name mysql -p 3306:3306 -v /opt/containerd/mysql/conf:/etc/mysql/conf.d -v /opt/containerd/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:8.0.16







## 运行后端程序

```bash
docker build  -t campus:1.2 .
```



```bash
docker run --name campus -p 8160:8160 -d campus:1.2
```



| 1    | 2    | 3    |
| ---- | ---- | ---- |
| 111  | 222  | 333  |
|      |      |      |
|      |      |      |

$$
J(\theta)=\frac{1}{m} \sum_{i=1}^{m} \exp \left(-y^{(i)} \theta^{T} \phi\left(x^{(i)}\right)\right)
$$

