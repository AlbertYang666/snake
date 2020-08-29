/**
 * 食物对象
 * Created by AlbertYang on 2020-08-16.
 */
(function () {
    var elements = [];// 用来保存食物
    // 食物的构造函数,食物是一个小方块,有宽,高,颜色,横纵坐标等属性
    function Food(x, y, width, height, color) {
        // 宽和高
        this.width = width || 20;
        this.height = height || 20;
        // 背景颜色
        this.color = color || "green";
		// 横纵坐标
		this.x = x || 0;
		this.y = y || 0;
    }

    // 为食物对象原型添加初始化食物的方法(作用：在页面上显示这个食物)
    // 因为食物要在地图上显示,所以,需要用到地图这个参数
    Food.prototype.init = function (map) {
        // 删除已经存在地图上的食物
        // 此处remove为私有函数，外部无法访问
        remove();

        // 创建div
        var div = document.createElement("div");
        // 把div加到map中
        map.appendChild(div);
        // 设置div的样式
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        // 脱离文档流
        div.style.position = "absolute";
        // 随机横纵坐标
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";

        // 把div加入到数组elements中
        elements.push(div);
    };

    // 删除食物---私有函数外部无法访问
    function remove() {
        // elements数组中有这个食物
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            // 找到这个子元素的父级元素,然后删除这个子元素
            ele.parentNode.removeChild(ele);
            // 把elements中的这个子元素也要删除
            elements.splice(i, 1);
        }
    }

    // 把Food暴露给Window,以便外部可以使用
    window.Food = Food;
}());//自调用函数
