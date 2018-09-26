function Problem(max_num)
{
    this.max_num = max_num; //题目中最大值
    this.arr_operator = ['+', '-', '*', '/'];
    this.op_num = 3; //单个表达式中符号最多为3个
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
    while(len > 0)
    {
        len -= 1;
        if(!bracket_flag) //判断是否加左括号
        {
            if(Math.random() > 0.5)
            {
                question += '(';
                bracket_flag = true;
            }
        }
        num = Math.ceil(Math.random() * this.max_num);
        question += String(num); //加数字
        if(bracket_flag)num_flag++;
        if(bracket_flag) //判断是否加右括号
        {
            if(Math.random() > 0.7)
            {
                if(num_flag > 1)
                {
                    question += ')';
                    bracket_flag = false;
                    num_flag = 0;
                }
            }
        }
        let op = this.arr_operator[Math.floor(Math.random() * op_len)];
        question += op; //加运算符
    }
    num = Math.ceil(Math.random() * this.max_num);
    question += String(num);
    if(bracket_flag)question += ')';
    return question;
}