console.clear();

// ① 不声明 ================

php_salary_beijing = 16501;
console.log(php_salary_beijing);
//不声明的变量可以delete

delete php_salary_beijing;
console.log(php_salary_beijing);



// ② var ===================

/*
var php_salary_beijing;
*/

/*
function prinrt_salary()
{
  console.log(php_salary_beijing);
}

prinrt_salary();

*/

// ③ 作用域( ES6 ) ================

// 块内

/*
function prinrt_salary_max()
{
  let php_salary_beijing = 28713;
  console.log(php_salary_beijing);
}

prinrt_salary_max();

console.log(php_salary_beijing);

*/

// 全局范围使用 let

/*
let city = 'beijing';
delete city;
console.log( city );
*/

// ④ 常量 =================
/*
// 常量的值不可改变

const best_language = 'PHP';
best_language = 'JavaScript';

*/

// 但常量指向的值却可以改变

/*
let best_languages = ['PHP','JavaScript'];

const best_language_array = best_languages;

best_languages.push('PPT');

console.log( best_language_array );
*/

// ⑤ 解构赋值 (ES6)

var city_salary = new Object();
city_salary.city = 'beijing';
city_salary.position = 'fe';
city_salary.salary_min = 19422;
city_salary.salary_max = 30919;

let { city , position } = city_salary;

console.log( city );
console.log( position );

// import 常用



