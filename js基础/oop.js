console.clear();

// 定义类，之后可以直接new ，

class salaryData  
{
  constructor( city , position , salary_max , salary_min )
  //constructor 里面是要传入的参数
  {
    this.city = city;
    this.position = position;
    this.salary_max = salary_max;
    this.salary_min = salary_min; 
  }
  
  //这个是方法
  avg_salary()
  {
      console.log((this.salary_min + this.salary_max)/2);
      
   // return (this.salary_min + this.salary_max)/2;
  }
  
}

var gz_fe = new salaryData( 'gz' , 'fe' , 7000 , 18000 );

//console.log( gz_fe.avg_salary() );


gz_fe.avg_salary();