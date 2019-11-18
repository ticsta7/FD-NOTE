console.clear();

function showTitle(o)
{
    console.log(this.title);
}

//默认调用时候，相当于window.title
showTitle({title:'test'});

//call apply,强制绑定this

showTitle.call({title:'test'});
showTitle.apply({title:'test'});

//bind 从在原有函数基础上新建函数，并且把新建函数的this
//绑定到bind的第一个参数上
var showNewTitle=showTitle.bind({title:'tic'});
showNewTitle();

//bind例2

var b ={color:'blue'};

function saycolor()
{
    console.log(this.color);
}

saycolor();//undefined

var sayNewColor = saycolor.bind(b);
sayNewColor();//blue

//通过 ‘对象.方法（）’来调用时，this会绑定到对象上

var book = new Object
{
    book.page=500;
    book.now=5;
    book.read = function()
    {
        this.now++;
        if(this.now>this.book)
        this.now=this.page;
        console.log(this);
    }
}

book.read();
//构造函数中，this=正在构造的对象

//dom中，this=触发时间的function
//dom的 inline on-xxx 函数中，this=监听器所在的dom元素。