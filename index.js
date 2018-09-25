try
{
    var max_num = parseInt(process.argv[3]);//获取题目数值范围中的最大值
    var questions = parseInt(process.argv[5]);//获取题目的生成数量
    const Problem = require('./Problem');
    var fs = require('fs');
    var tmp = '';
    for(let i = 0; i < questions; i++)
    {
        let problem = new Problem(max_num);
        let tmp1 = problem.q_generator();
        tmp += (tmp1 + '\n');
    }
    fs.writeFile('./exercises.txt', tmp, {'flag': 'a'}, function(err){
        if(err)throw err;
    });
}
catch(error)
{
    console.log("\n程序出现错误");
    console.log(error);
}
