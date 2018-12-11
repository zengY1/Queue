//队列
function Queue(){
    var items=[];
    this. addQueue=function(element){
        return items.push(element)
    }
    this.outQueue=function(){
        return items.shift()
    }
    this.printQueue=function(){
        return items.toString();
    }
    this.size=function(){
        return items.length ;
    }
}
//
function forQueue(nameList,num){
    //初始化队列和淘汰者
    losser=[];
    var queue=new Queue();
    // 将数据导入队列中
    for(var i=0; i<nameList.length; i++){
        queue.addQueue(nameList[i])
    }
    var outQueueData='';
    // 当队列还存在值时，在循环中将出列的值在进行入列操作，循环结束将出列的淘汰者存在looser的数组中
    while(queue.size()>1){
        for(var i=0;i<num;i++){
            queue.addQueue(queue.outQueue())
        }
        outQueueData=queue.outQueue();
        console.log('失败者'+outQueueData)
        losser.push(outQueueData)
    }
    //返回最终队列的值
    return queue.outQueue();

}
var nameList=['one','two','three','four','fine','six','server'];
var losser=[];
var num =0;
//looser列表
function looserPrint(){
    var data=losser.toString();
    document.getElementById('list').innerHTML=data;
}
//随机改变队列循环的次数
function changeNum(){
  num=Math.floor(Math.random()*100);
  console.log(num)
  var winner=forQueue(nameList,num)
  console.log('胜利者'+winner);
  document.getElementById('winner').innerHTML=winner;
}
