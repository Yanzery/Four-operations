/**
 * 表达式生成类
 */
function Problem(max_num, question_num)
{
    this.max_num = max_num; //题目中最大值
    this.arr_operator = ['+', '-', '*', '÷'];
    this.op_num = 3; //单个表达式中符号最多为3个
    this.question_num = question_num;
}

module.exports = Problem;

//表达式生成
Problem.prototype.q_generator = function(){
    let question = ""; //单个表达式变量
    let num = 0; //题目中的数字
    let bracket_flag = false; //判断左右括号
    let len = Math.ceil(Math.random() * this.op_num); //表达式符号不能超过三个
    let op_len = this.arr_operator.length;
    let num_flag = 0; //把类似(6)+8-7这种情况排除掉
    const Fraction = require('./Fraction');
    while(len > 0)
    {
        len -= 1;
        if(!bracket_flag) //判断是否加左括号
        {
            if(Math.random() > 0.5)
            {
                question += '( ';
                bracket_flag = true;
            }
        }
        if(Math.random() > 0.2){
            num = Math.ceil(Math.random() * this.max_num); //生成整数
        }else{
            let fraction = new Fraction(this.max_num); //分数处理
            num = fraction.create_num(); //生成分数
        }
        question += (num + ' '); //加数字
        if(bracket_flag)num_flag++;
        if(bracket_flag) //判断是否加右括号
        {
            if(Math.random() > 0.7)
            {
                if(num_flag > 1)
                {
                    question += ') ';
                    bracket_flag = false;
                    num_flag = 0;
                }
            }
        }
        let op = this.arr_operator[Math.floor(Math.random() * op_len)];
        question += (op + ' '); //加运算符
    }
    num = Math.ceil(Math.random() * this.max_num);
    question += (num);
    if(bracket_flag)
        question += ' )';
    if(question[0] == '(' && question.indexOf(')') == question.length-1){
        question = question.slice(2, -2); //排除掉(7+8-9)这种情况
    }
    return question;
}

//生成10000道题目
Problem.prototype.create = function(){
    let tmp ='';
    for(let i = 0; i < this.question_num; i++)
    {
        let tmp1 = this.q_generator();
        tmp = tmp + tmp1;
        if(i != this.question_num - 1)
            tmp += '\n';
    }
    const fs = require('fs');
    fs.writeFile('./exercises.txt', tmp, {'flag': 'a'}, function(err){
        if(err)throw err;
    });
}