(function (global) {
    /**
     * @desc 全局变量 类似jquery里面$
     * @param {string} selec 选择器
     */
    global.zz = function (selec) {
        return new Z(selec);
    };
    class Z {
        constructor(selec) {
            const el = document.querySelector(selec);
            if (!el) {
                console.log('输入的选择器有问题');
                return;
            }
            this.el = el;
        }
        addClass(name) {
            const className = this.el.className + ' ' + name;
            this.el.className = className;
        }
        removeClass(name) {
            const className = this.el.className.replace(name, '').trim();
            this.el.className = className;
        }
        text(text) {
            this.el.innerText = text;
        }
    }
})(window);
