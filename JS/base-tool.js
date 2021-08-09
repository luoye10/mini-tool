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
            this.el.innerText = text;
            return this
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
    }
})(window);
