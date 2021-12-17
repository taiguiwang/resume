//提交到数据库（leancloud）
AV.init({
    appId: "YDEYgr8CmtfwvyYVFjMjIw4d-gzGzoHsz",
    appKey: "tKa141fGL4tzkLt8WjKTGC0K",
    serverURL: "https://ydeygr8c.lc-cn-n1-shared.com"
});

//报名表
document.querySelector(".btn").addEventListener("click", btn);

function btn() {
    // 声明 class
    const Lianxi = AV.Object.extend('Lianxi');
    // 构建对象
    const lianxi = new Lianxi();
    // 为属性赋值
    lianxi.set('name', document.getElementById("nameContact").value);
    lianxi.set('email', document.getElementById("emailContact").value);
    //留言
    var text = document.getElementById('messageContact').innerHTML;
    var text = $("#messageContact").val();
    lianxi.set('Message', text);

    // 将对象保存到云端
    lianxi.save().then((lianxi) => {
        // 成功保存之后，执行其他逻辑
        // console.log(`保存成功。objectId：${todo.id}`);
        alert("提交成功！");
        //注册成功后刷新网页
        location.reload();
    }, (error) => {
        // 异常处理
        // console.log("失败");
        alert("提交失败！");

        //注册成功后刷新网页
        location.reload();
    });



}