{/* <script src = "common.js"></script>
    function Play() {
        this.banner = document.getElementById("banner");
        this.oUl = this.banner.getElementsByTagName("ul")[0];
        this.aLi = this.oUl.getElementsByTagName("li");
        this.aDir = document.querySelectorAll("#dir>a");
        this.aA = document.querySelectorAll("#circular>a");
        this.iw = this.aLi[0].offsetWidth;
        this.iNow = 0;
        this.timer = null;
        this.init();
    }
    Play.prototype = {
        init: function () {

            this.direction1();
            this.direction2();
            this.autoplay();
            var li = this.aLi[0].cloneNode(true);
            this.oUl.appendChild(li);
            this.oUl.style.width = this.aLi.length * this.iw + 'px';
            this.onmouseover();
            this.onmouseout();
            this.circulover();

        },

        direction1: function () {
            this.aDir[0].addEventListener("click", this.direction1callback.bind(this))
        },
        direction1callback: function () {
            if (this.iNow == 0) {
                this.iNow = this.aLi.length - 2;
                this.oUl.style.left = -(this.aLi.length - 1) * this.iw + 'px';
            } else {
                this.iNow--;
            }
            this.toImg();
        },
        direction2: function () {
            this.aDir[1].addEventListener("click", this.direction2callback.bind(this))
        },
        direction2callback: function () {
            if (this.iNow == this.aLi.length - 1) {
                this.iNow = 1;
                this.oUl.style.left = 0;
            } else {
                this.iNow++;
            }

            this.toImg();
        },

        onmouseover: function () {
            this.banner.addEventListener("mouseover", this.onmouseovercallback.bind(this))
        },
        onmouseovercallback: function () {
            clearInterval(this.timer);
        },
        onmouseout: function () {
            this.banner.addEventListener("mouseout", this.onmouseoutcallback.bind(this));
        },
        onmouseoutcallback: function () {
            this.autoplay();
        },
        circulover: function () {
            for (var i = 0; i < this.aA.length; i++) {
                this.aA[i].index = i;
                this.aA[i].addEventListener("mouseover", this.circlecallback.bind(this, this.aA[i]))
            }
        },
        circlecallback: function (that) {
            for (var j = 0; j < this.aA.length; j++) {
                this.aA[j].className = '';
            }
            that.className = 'active';
            this.iNow = that.index;
            this.toImg();
        },
        autoplay: function () {
            this.timer = setInterval(this.autoplaycallback.bind(this), 2000)
        },
        autoplaycallback: function () {
            if (this.iNow == this.aLi.length - 1) {
                this.iNow = 1;
                this.oUl.style.left = 0;
            } else {
                this.iNow++;
            }

            this.toImg();
        },
        toImg: function () {
            for (var i = 0; i < this.aA.length; i++) {
                this.aA[i].className = '';
            }
            this.aA[this.iNow == this.aLi.length - 1 ? 0 : this.iNow].className = 'active';

            move(this.oUl, {
                left: -this.iNow * this.iw
            });

        }

    }
    new Play();

    //选项卡
    function ToggleTab() {
        this.aBtn = document.getElementById("btn").getElementsByTagName("li");
        this.aDiv = document.getElementById("content").getElementsByTagName("ul");
        this.init();
    }

    ToggleTab.prototype = {
        init: function () {
            this.toggleBtn();
        },
        toggleBtn: function () {
            var _this = this;
            for (var i = 0; i < this.aBtn.length; i++) {
                this.aBtn[i].index = i;
                this.aBtn[i].addEventListener("mouseover", this.toggleCb.bind(this, this.aBtn[i]))
            }
        },
        toggleCb: function (that) {
            for (var j = 0; j < this.aBtn.length; j++) {
                this.aBtn[j].className = '';
                this.aDiv[j].style.display = 'none';
            }

            that.className = 'active';
            this.aDiv[that.index].style.display = 'block';

        }
    }


    new ToggleTab();
    // 放大镜
    var oPic = document.querySelector("#pic");
    var oImg = document.querySelectorAll(".smallPics img"); //获取
    var oMaxPic = document.getElementById("js_maxPic"); //获取
    for (var i = 0; i < oImg.length; i++) {
        oImg[i].onmouseover = function (e) { //添加图片移入事件
            // e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
            var src = this.getAttribute("data-src"); //通过自定义属性进行图片链接绑定
            oMaxPic.src = src;

        }
    }

    var omaxPic = document.querySelector(".maxPic");
    var oFilter = document.getElementById("filter");
    var oPic = document.getElementById("pic");
    var ojs_maxPic = document.getElementById("JS_maxPic");
    // for(var i = 0;i<oImg.length;i++){
    //     oImg[i].onmouseover = function(){
    // 		var src = this.getAttribute("data-src");
    // 		ojs_maxPic.src = src;
    // 	}
    // }
    // var omaxImg = document.querySelector(".maxImg");
    omaxPic.onmouseover = function () {
        oFilter.style.display = "block"; //如果鼠标移入 则显示OFilter
        // for(var i = 0;i<oImg.length;i++){
        //      var src = this.getAttribute("data-src");
        //       ojs_maxPic.src = src;
        // }
        ojs_maxPic.style.display = "block"; //右边放大的图显示
        var src = this.children[1].getAttribute("src"); //获取到左边大图的src
        ojs_maxPic.src = src; //让右边放大后的大图的src为左边图片的src 即可完成放大的作用

        // console.log(this);
    }
    // 完成OFilter跟随鼠标移动 并且鼠标一直位于中心位置 完成拖拽
    omaxPic.onmousemove = function (e) {
        var x = e.clientX - offset(oPic).l - oFilter.offsetWidth / 2;
        var y = e.pageY - offset(oPic).t - oFilter.offsetHeight / 2;
        x = x >= omaxPic.offsetWidth - oFilter.offsetWidth ? omaxPic.offsetWidth - oFilter.offsetWidth : x <= 0 ?
            0 : x;
        y = y >= omaxPic.offsetHeight - oFilter.offsetHeight ? omaxPic.offsetHeight - oFilter.offsetHeight : y <=
            0 ? 0 : y;
        oFilter.style.left = x + "px";
        oFilter.style.top = y + "px";
        ojs_maxPic.style.left = -2 * x + "px";
        ojs_maxPic.style.top = -2 * y + "px";
    }
    omaxPic.onmouseout = function () {
        oFilter.style.display = "none";
        ojs_maxPic.style.display = "none";
    }

    //选项卡2
    function ToggleTab2() {
        this.aBtn = document.getElementById("btn1").getElementsByTagName("li");
        this.aDiv = document.getElementById("content2").getElementsByTagName("div");
        this.init();
    }

    ToggleTab2.prototype = {
        init: function () {
            this.toggleBtn();
        },
        toggleBtn: function () {
            var _this = this;
            for (var i = 0; i < this.aBtn.length; i++) {
                this.aBtn[i].index = i;
                this.aBtn[i].addEventListener("mouseover", this.toggleCb.bind(this, this.aBtn[i]))
            }
        },
        toggleCb: function (that) {
            for (var j = 0; j < this.aBtn.length; j++) {
                this.aBtn[j].className = '';
                this.aDiv[j].style.display = 'none';
            }

            that.className = 'active';
            this.aDiv[that.index].style.display = 'block';

        }
    }


    new ToggleTab2();


    //列项不规则排列图片
    var str = "";
    for (var i = 0; i < 8; i++) {
        str += `<li>
            <img src="img1/${i + 1}.jpg"/>
        </li>`
    }
    var oList = document.getElementById("list2");
    oList.innerHTML = str;

    window.onload = function () {
        var aLi = oList.getElementsByTagName("li");
        var iH = [];
        for (var i = 0; i < 4; i++) {
            aLi[i].style.position = "absolute";
            aLi[i].style.left = i * (202 + 20) + 'px';
            aLi[i].style.top = 0;
            iH[i] = aLi[i].offsetHeight;
        }

        for (var i = 4; i < aLi.length; i++) {
            var index = getIndex(iH);
            aLi[i].style.position = "absolute";
            aLi[i].style.left = index * (202 + 20) + 'px';
            aLi[i].style.top = iH[index] + 20 + 'px';
            iH[index] = iH[index] + aLi[i].offsetHeight + 10;
        }

        function getIndex(arr) {
            var min = arr[0];
            var index = 0;

            for (var i = 0; i < arr.length; i++) {
                if (min > arr[i]) {
                    min = arr[i];
                    index = i;
                }
            }

            return index;
        }
    }
    // 列项排列图片2
    // var str = "";
    // for (var i = 0; i < 8; i++) {
    //     str += `<li>
    //         <img src="img2/${i + 1}.jpg"/>
    //     </li>`
    // }
    // var oList = document.getElementById("list3");
    // oList.innerHTML = str;

    // window.onload = function () {
    //     var aLi = oList.getElementsByTagName("li");
    //     var iH= [];
    //     for (var i = 0; i < 4; i++) {
    //         aLi[i].style.position = "absolute";
    //         aLi[i].style.left = i * (202 + 20) + 'px';
    //         aLi[i].style.top = 0;
    //         iH[i] = aLi[i].offsetHeight;
    //     }

    //     for (var i = 4; i < aLi.length; i++) {
    //         var index = getIndex(iH1);
    //         aLi[i].style.position = "absolute";
    //         aLi[i].style.left = index * (202 + 20) + 'px';
    //         aLi[i].style.top = iH[index] + 20 + 'px';
    //         iH[index1] = iH[index] + aLi[i].offsetHeight + 10;
    //     }

    //     function getIndex(arr) {
    //         var min = arr[0];
    //         var index = 0;

    //         for (var i = 0; i < arr.length; i++) {
    //             if (min > arr[i]) {
    //                 min = arr[i];
    //                 index = i;
    //             }
    //         }

    //         return index;
    //     }
    // }
    // 返回顶部
    window.onscroll = function () {
        var ovip = document.getElementById("vip");
        // console.log(ovip);
        // var t = document.documentElement.scrollTop || document.body.scrollTop;
        //    console.log(t);
        ovip.addEventListener("click", function () {
            document.documentElement.scrollTop = 0;
        })
    } */}
