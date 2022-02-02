//Executable functions 
let linkedLIst=LinkedList();
function AppendNode()
{
    let nodeValue=document.getElementById("listInput").value;
    newNode=ListNode(nodeValue,null,null);
    linkedList.Append(newNode);
    linkedList.TraverseList();
    DisplayList();

}
function AddNodeTo()
{
    let nodeValue=document.getElementById("listInput").value;
    let nodeIndex=document.getElementById("listIndexInput").value; 
    newNode=ListNode(nodeValue,null,null);
    linkedList.AddTo(newNode,nodeIndex);
    linkedList.TraverseList();
    DisplayList();
}
function DisplayList()
{
    //TODO;
}
//Linked List Class
var LinkedList={
    tail:null,
    head:null,
    size:0,
    InitList:function(){
        tail=ListNode("tail",head,null);
        head=ListNode("head",null,tail);
        size=2//List size initializes at 2 to account for tail and head 
    },
    Append:function(newNode){
        temp=this.tail.prevNode;
        this.tail.prevNode=newNode;
        newNode.nextNode=this.tail;
        newNode.prevNode=temp;
        this.size+=1;

    },
    AddTo:function(newNode, nodeIndex){
        let listIndexer=0;
        currentNode=this.head;
        if(nodeIndex<this.size)
        {
            while(listIndexer<=this.size)
            {
                if(nodeIndex=listIndexer)
                {
                    temp=currentNode.nextNode;
                    currentNode.nextNode=newNode;
                    newNode.prevNode=currentNode;
                    newNode.nextNode=temp;
                    this.size+=1;
                }else
                {
                    currentNode=currentNode.nextNode;
                }
                listIndexer+=1;

            }

        }

        
    },
    Pop:function(){
        //TODO
    },
    Remove:function(){
        //TODO
    },
    TraverseList:function(){
        let listIndexer=0;
        values=[];
        currentNode=this.head;
        while (listIndexer<this.size)
        {
            values.Push(currentNode.value);
            currentNode=currentNode.nextNode;
            listIndexer+=1;
        }
    
    }
}
//Node class
var ListNode={
    value:null,
    prevNode:null,
    nextNode:null,
    createNode:function(nodeValue,_prevNode,_nextNode){
        value=nodeValue;
        prevNode=_prevNode;
        nextNode=_nextNode;
    }
}
