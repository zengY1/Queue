function Queue(){
    var items=[];
    // 入栈
    this.enqueue=function (element){
       items.push(element);
    }
    // 出栈
    this.outqueue=function () {
       return items.shift();
    } 

    // 打印队列
    this.print =function (){
        return items.toString()
    }
    // 队列的值
    this.indexData=function(index){
        return items[index]
    }
    // 队列是否为空
    this.empty=function(){
        return items.length==0
    }
    // 队列的长度
    this.sizes=function(){
        return items.length
    }
}
// 初始化队列
var queue=new Queue ();
queue.enqueue('Hello');
queue.enqueue('Word');
queue.enqueue('!');
// 队列列表
function queuePrint (){
var dataPrint=queue.print();
document.getElementById('domo').innerHTML=dataPrint;
}
//添加队列
function addQueue(){
    var data=document.getElementById('input').value;
    queue.enqueue(data)
}
//出栈
function queueOut(){
    var dataOut=queue.outqueue();
    document.getElementById('out').innerHTML=dataOut;
}
//队列的index值
function queueSelect(){
    var data=document.getElementById('select').value;
    var dataSelect=queue.indexData(data);
    document.getElementById('selectTag').innerHTML=dataSelect;
}
// 判断队列是否为空
function queueIsEmpty(){
    var isEmpty=queue.empty();
    var empty=isEmpty===true?'空队列':'非空队列';
    document.getElementById('empty').innerHTML=empty;
}
// 队列长度
function queueSize(){
    var data=queue.sizes();
    document.getElementById('length').innerHTML=data;
}