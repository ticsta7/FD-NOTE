console.clear();

var city_salary = {
  city: "beijing",
  position: "fe",
  salary_max: 30919,
  salary_min: 19422
};


// ① if
//${number 变量}
if( city_salary.city == 'beijing' && city_salary.position == 'fe' )
{
  console.log( `北京前端的薪资为${city_salary.salary_min}~${city_salary.salary_max}` );
}
else
{
  console.log("暂时没有其他城市的薪资数据");
}


// ② switch


var city_salary2 = {
  city: "shanghai",
  position: "fe",
  salary_max: 24675,
  salary_min: 14398
};



var theone = city_salary2;

switch( theone.city )
{
  case 'beijing':
    console.log( `北京前端的薪资为${theone.salary_min}~${theone.salary_max}` );
    break;
  case 'shanghai':
    console.log( `上海前端的薪资为${theone.salary_min}~${theone.salary_max}` );
    break; 
    
  default:
    console.log("暂时没有其他城市的薪资数据");
    
}


// ③ for 



var city_array = [ city_salary , city_salary2 ];

for( i = 0 ; i < city_array.length ; i++ )
{
  let theone = city_array[i];
  switch( theone.city )
  {
    case 'beijing':
      console.log( `北京前端的薪资为${theone.salary_min}~${theone.salary_max}` );
      break;
    case 'shanghai':
      console.log( `上海前端的薪资为${theone.salary_min}~${theone.salary_max}` );
      break; 

    default:
      console.log("暂时没有其他城市的薪资数据");

  }
}


/*
for( i in city_array )
{
  let theone = city_array[i];
  switch( theone.city )
  {
    case 'beijing':
      console.log( `北京前端的薪资为${theone.salary_min}~${theone.salary_max}` );
      break;
    case 'shanghai':
      console.log( `上海前端的薪资为${theone.salary_min}~${theone.salary_max}` );
      break; 

    default:
      console.log("暂时没有其他城市的薪资数据");

  }
}
*/


// ④ while


var i = 0 ;
while( i < 2 )
{
  let theone = city_array[i];
  switch( theone.city )
  {
    case 'beijing':
      console.log( `北京前端的薪资为${theone.salary_min}~${theone.salary_max}` );
      break;
    case 'shanghai':
      console.log( `上海前端的薪资为${theone.salary_min}~${theone.salary_max}` );
      break; 

    default:
      console.log("暂时没有其他城市的薪资数据");

  }
  
  i++;
  // break; 
}


/*
var i = 0 ;
do
{
  let theone = city_array[i];
  switch( theone.city )
  {
    case 'beijing':
      console.log( `北京前端的薪资为${theone.salary_min}~${theone.salary_max}` );
      break;
    case 'shanghai':
      console.log( `上海前端的薪资为${theone.salary_min}~${theone.salary_max}` );
      break; 

    default:
      console.log("暂时没有其他城市的薪资数据");

  }
  
  i++;
  // break; 
}
while( i < 2 );
*/  
  


