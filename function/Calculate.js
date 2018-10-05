/**
 * 题目计算类
 */
function Calculate(){
}

module.exports = Calculate;

//计算单个表达式的结果
Calculate.prototype.count = function(data){
    let reg = new RegExp("'", 'g'); //创建正则对象
    let new_data = data.replace(reg, '+');
    reg = new RegExp('÷', 'g');
    new_data = eval(new_data.replace(reg, '/'));
    return new_data;
}

//读取exercises.txt中的每一行
Calculate.prototype.get_answer = function(){
    const readline = require('readline');
    const fs = require('fs');
    const rl = readline.createInterface({
        input: fs.createReadStream('exercises.txt'),
        output: process.out
    });
    rl.on('line', function(line){
        let tmp = '';
        let calc = new Calculate();
        tmp = calc.count(line);
        tmp = tmp + '\n';
        //把答案写入answers.txt
        fs.writeFile('./answers.txt', tmp, {'flag': 'a'}, function(err){
            if(err)throw err;
         });
    });
}
