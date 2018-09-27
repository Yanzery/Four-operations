/**
 * 分数生成类
 */
function Fraction(max_num){
    this.max_fenzi = max_num; //设置分子的最大值
    this.max_fenmu = max_num; //设置分母的最大值
}

module.exports = Fraction;

Fraction.prototype.create_num = function(){
    let result_num =''; //存储分数生成后的结果
    let fenzi = 0; //分子
    let fenmu = 0; //分母
    while(true){
        fenzi = Math.ceil(Math.random() * this.max_fenzi);
        fenmu = Math.ceil(Math.random() * this.max_fenmu);
        if(fenzi == Math.floor(fenzi / fenmu) * fenmu)continue; //排除掉9/3,4/2这种情况
        else if(fenzi < fenmu){
            result_num += (fenzi + '/' + fenmu);
            return result_num;
        }
        else{
            let tmp = Math.floor(fenzi / fenmu);
            fenzi = fenzi - tmp * fenmu;
            result_num += (tmp + "'" + fenzi + '/' + fenmu);
            return result_num;
        }
    }
    
}