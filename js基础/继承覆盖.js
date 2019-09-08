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
var test =[];

test.push( new salaryData('bj','fe','20000','10000'));
test.push( new salaryData('bj','gz','18000','8000'));

for( i in test)
{
    console.log(test[i].pure_income());
}