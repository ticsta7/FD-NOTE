console.clear();

// ① 不声明 ================

tall=180;
console.log(tall);
//不声明的变量可以delete

delete tall;
console.log(tall);


// ② var ===================


var tall;



function prinrt_tall()
{
  console.log(tall);
}

prinrt_tall();

// ③ 作用域( ES6 ) ================

// 块内

function test_let()
{
  let testlet = 000;
  console.log(testlet);
}

test_let();

//console.log(testlet);报错，因为let的变量离开了作用域


// 全局范围使用 let


let city = 'beijing';
// delete city;
console.log( city );
//let 在全局作用内 定义，则全局可用


// ④ 常量 =================

// 常量的值不可改变

const best_language = 'PHP';
best_language = 'JavaScript';


// 但常量指向的值却可以改变（指向一个var，var可变）


let best_languages = ['PHP','JavaScript'];

const best_language_array = best_languages;

best_languages.push('PPT');

console.log( best_language_array );


// ⑤ 解构赋值 (ES6)

var city_salary = new Object();
city_salary.city = 'beijing';
city_salary.position = 'fe';
city_salary.salary_min = 19422;
city_salary.salary_max = 30919;

let { city , position } = city_salary;

console.log( city );// 相当于 let city= city_salary.city,下同
console.log( position );



// import 常用



