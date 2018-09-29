try
{
    var max_num = parseInt(process.argv[3]);//获取题目数值范围中的最大值
    var question_num = parseInt(process.argv[5]);//获取题目的生成数量

    const Problem = require('./Problem');
    let problem = new Problem(max_num, question_num);
    problem.create(); //题目生成

    const Calculate = require('./Calculate');
    let calc = new Calculate();
    calc.get_answer(); //题目计算
}
catch(error)
{
    console.log("\n程序出现错误");
    console.log(error);
}
