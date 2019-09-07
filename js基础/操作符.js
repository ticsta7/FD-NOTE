console.clear();

// 逻辑运算

// 与

var feel_good = true;
var product_expiring = true;

if( feel_good && product_expiring )
  price = 100;

console.log( price );


// 或

title = ""; 
var default_title = title || "i am default_title";

console.log( default_title );


// 非

var weather = "";
console.log( !!weather ); // 强制布尔值转换


//  位运算

var a = 1;// 01
var b = 2;// 10
var c = a&b; // 00
var d = a|b // 11
var e = a >> 1; // 00
var f = a << 1; // 10

console.log( c );
console.log( d );
console.log( e );
console.log( f );

//  字符串


var name = 'tic';
var notice_string  = "<div>
<h1>"+ name +"</h1>
<p>服务器又挂了</p>
</div>";

// 改：var notice_string  = "<div>"
// +"<h1>"+ name +"</h1>"
// +"<p>服务器又挂了</p>"
// +"</div>";

console.log( notice_string );



// JS 里边除了分号，换行也能成为语句结束的标志

// ES6 引入了模板 ``

var name = 'tic';

var notice_string  = `<div>
<h1>${name}</h1>
<p>服务器又挂了</p></div>`;


console.log( notice_string );









