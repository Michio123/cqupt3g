1. **首先将jar包传到服务器指定目录下**

我这里是在根目录下创建了一个mydata目录

![image-20221119200750771](https://img-blog.csdnimg.cn/img_convert/39b1a5c8ed156334c7ae3423fe9fc9f7.png)

1. **在mydata目录下创建Dockerfile文件，编写Dockerfile文件**

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

2. ## 配置nginx文件
