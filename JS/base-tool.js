(function (global) {
    /**
     * @desc 全局变量 类似jquery里面$
     * @param {string} select 选择器
     */
    global.zz = function (select) {
        return new Z(select);
    };
    class Z {
        constructor(select) {
            const el = document.querySelector(select);
            if (!el) {
                console.log('输入的选择器有问题');
                return;
            }
            this.el = el;
        }
        addClass(name) {
            const className = this.el.className + ' ' + name;
            this.el.className = className;
            return this
        }
        removeClass(name) {
            const className = this.el.className.replace(name, '').trim();
            this.el.className = className;
            return this
        }
        text(text) {
            if(text){
                this.el.innerText = text;
                return this
            }else{
                var str = ''
                str += this.el.innerText
                return str
            }
        }
        toggle(name){
            if(this.el.className.indexOf(name)  > -1){
                this.removeClass(name)
            }else{
                this.addClass(name)
            }
        }
        click(fn){
            this.bind(this.el,'click',function(){
                fn()
            })
        }
        fadeOut(speed,name){
            this.animation(speed)
            this.addClass(name)
        }
        fadeIn(speed,name){
            this.animation(speed)
            this.removeClass(name)
        }
        fadeToggle(name){
            this.toggle(name)
        }
        slideUp(speed,name){
            this.animation(speed)
            this.addClass(name)
        }
        slideDown(speed,name){
            this.animation(speed)
            this.removeClass(name)
        }
        slideToggle(speed,name){
            this.animation(speed)
            this.toggle(name)
        }
        animate(obj,speed){
            this.animation(speed)
            for(var key in obj){
                this.el.style[key] = obj[key]
            }
        }
        stop(name){
            this.el.style[name] = this.getStyle(this.el,name)
            this.el.style.transition = ''
            this.aniObj.stop = {}
            this.aniObj.stop[name] = this.el.style[name]
        }
        startAnimation(speed, obj){
            if(this.aniObj){
                this.animation(speed)
                for(var key in this.aniObj.start){
                    this.el.style[key] = this.aniObj.start[key]
                }
                return
            }
            this.aniObj = {
                start: obj,
            }
            this.animation(speed)
            for(var key in obj){
                this.el.style[key] = obj[key]
            }
        }
        hide(speed,name,fn){
            this.slideUp(speed,name)
            setTimeout(function(){
                fn()
            }, (speed + 1000))
        }
        setStyle(styleStr, valueStr){
            for(var key in this.el){
                if(key === styleStr){
                    this.el.style[key] = valueStr
                }
            }
        }
        html(para){
            if(!para){
                var str = ''
                str += this.el.innerHTML
                return str
            }else{
                this.el.innerHTML = para
                return this
            }
        }
        Val(para){
            if(!para){
                var str = ''
                str += this.el.value
                return str
            }else{
                this.el.value = para
                return this
            }
        }
        attr(name){
            this.getStyle(this.el,name)
        }
        animation(speed){
            var time
            if(speed === 'fast'){
                time = 0.5
            }
            if(speed === 'slow'){
                time = 2
            }
            if(typeof speed === 'number'){
                time = speed / 1000
            }
            this.el.style.transition = 'all ' + time + 's'
        }
        bind(obj , eventStr , callback){
            if(obj.addEventListener){
                obj.addEventListener(eventStr,callback,false);
            } else{
                obj.attachEvent('on' + eventStr,function(){
                    callback.call(obj);
                });
            }
        };
        getStyle(obj,name){
            if(window.getComputedStyle){
                return getComputedStyle(obj,null)[name]
            }else{
                return obj.currentStyle[name]
            }
        }
    }
})(window);
