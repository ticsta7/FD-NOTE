console.clear();

var number1 = 1;
var number2 = 2;


// 数值类型和字符串类型之间的转换 ================

// 数值 → 字符 
var string1 = number1 + "";
console.log( '加空字符后的type: ' + typeof(string1) );

// isNaN 
console.log( 'isnan 之后的情况'+isNaN( string1 )  );

// 字符 → 数值

var number3 = parseInt( string1 );
// 浮点数用 parseFloat

console.log( 'parseInt后的type: '+typeof(number3) );


//  数组 =========================


var arr1=[1,2,3];
console.log(arr1);

// push 在数组最后追加
arr1.push( 4 );
console.log( arr1 );

// pop 从数组最后弹出
arr1.pop();

console.log( arr1.pop() );

// unshift 在数组头部加入
arr1.unshift( 20000 );
console.log( arr1 );

// shift 从数组头部弹出
arr1.shift( 20000 );
console.log( arr1 );



// ⑤ 对象 ================

var city_salary = new Object();
city_salary.city = 'beijing';
city_salary.position = 'fe';
city_salary.salary_min = 19422;
city_salary.salary_max = 30919;

console.log( city_salary );

var city_salary2 = {
  city: "beijing",
  position: "fe",
  salary_max: 30919,
  salary_min: 19422
};

console.log( city_salary2 );



