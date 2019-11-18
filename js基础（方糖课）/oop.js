console.clear();

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
       return (this.salary_max + this.salary_min)/2;
  }

  pure_income()
  {
    return this.avg_salary()*0.6;
  }
}

class capitalSalaryData extends salaryData
{  //派生出一个子类
  constructor( city , position , salary_max , salary_min )
  {  //从super继承来
    super( city , position , salary_max , salary_min );
  }
  
  pure_income()//覆盖之前的方法
  {
    return this.avg_salary()*0.55;
  }
}

var test =[];
// 依然 new salaryData
test.push( new salaryData('gz','fe',18000,8000));

// capitalSalaryData
test.push( new capitalSalaryData( 'beijing' , 'fe' , 20000 , 10000 ) );

for( i in test)
{
    console.log(test[i].pure_income());
}

 //分割线






