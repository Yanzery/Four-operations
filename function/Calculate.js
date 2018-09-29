/**
 * 题目计算类
 */
function Calculate(){
    let btree = new BTree();
    let op_priority = {'+': 1, '-': 1, '*': 2, '÷': 2}; //设置运算符的优先级
}
''
module.exports = Calculate;

//读取exercises.txt中的每一行, 并对数字和符号进行分离截取
Calculate.prototype.get_answer = function(){
    let str_arr = ''; //存储表达式分离后的字符串数组
    const readline = require('readline');
    const fs = require('fs');
    const rl = readline.createInterface({
        input: fs.createReadStream('exercises.txt'),
        output: process.out
    });
    rl.on('line', function(line){
        str_arr = line.split(" ");
        this.count_expression(str_arr);
    });
}

//计算单个表达式的结果
Calculate.prototype.count_expression = function(str_arr){
    
}

//使用二叉树结构存储并计算表达式
function BTree(){
    this.data ='';
    this.lchild = '';
    this.rchild ='';
}