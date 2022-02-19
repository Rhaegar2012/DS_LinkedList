
//Classes
class ListNode{
    constructor(nodeValue,_prevNode,_nextNode){
        this.value=nodeValue;
        this.prevNode=_prevNode;
        this.nextNode=_nextNode;
    }
}
class LinkedList{
    constructor(){
        this.tail=new ListNode("tail",null,null);
        this.head=new ListNode("head",null,null);
        this.head.nextNode=this.tail;
        this.tail.prevNode=this.head;
        this.size=2;//List size initializes at 2 to account for tail and head 
        this.values=[]
    }
    Append(newNode){
        let temp=this.tail.prevNode;
        temp.nextNode=newNode;
        this.tail.prevNode=newNode;
        newNode.nextNode=this.tail;
        newNode.prevNode=temp;

        this.size+=1;

    }
    AddTo(newNode, nodeIndex){
        let listIndexer=0;
        let currentNode=this.head;
        if(nodeIndex<this.size)
        {
            while(listIndexer<=this.size)
            {
                if(nodeIndex=listIndexer)
                {
                    let temp=currentNode.nextNode;
                    currentNode.nextNode=newNode;
                    newNode.prevNode=currentNode;
                    newNode.nextNode=temp;
                    this.size+=1;
                    break;
                }else
                {
                    currentNode=currentNode.nextNode;
                }
                listIndexer+=1;

            }

        }

        
    }
    Pop(){
        let nodeToPop=this.tail.prevNode;
        this.tail.prevNode=nodeToPop.prevNode;
        nodeToPop.nextNode=this.tail;
        this.size-=1;
        nodeToPop=null;
    }
    Remove(value){
        let currentNode=this.head;
        let valueFound=false;
        while(currentNode.value=!value)
        {
            currentNode=currentNode.nextNode;
            if(currentNode.value==value)
            {
                valueFound=true;
            }
        }
        if(valueFound)
        {
            prevNode=currentNode.prevNode;
            nextNode=currentNode.nextNode;
            prevNode.nextNode=nextNode;
            nextNode.prevNode=prevNode;
            this.size-=1;
        }
        
    }
    TraverseList(){
        let listIndexer=0;
        let currentNode=this.head;
        this.values=[]
        while (listIndexer<this.size)
        {
            this. values.push(currentNode.value);
            currentNode=currentNode.nextNode;
            listIndexer+=1;
        }
    
    }

}

//Node class
//Class Instantiation
let linkedList= new LinkedList();
//Button Event Functions 
function AppendNodeEvent()
{
    let nodeValue=document.getElementById("listInput").value;
    newNode= new ListNode(nodeValue,null,null);
    linkedList.Append(newNode);
    DisplayList();

}
function AddNodeToEvent()
{
    let nodeValue=document.getElementById("listInput").value;
    let nodeIndex=document.getElementById("listIndexInput").value; 
    newNode=new ListNode(nodeValue,null,null);
    linkedList.AddTo(newNode,nodeIndex);
    DisplayList();
}
function PopNodeEvent()
{
    linkedList.Pop();
    DisplayList();

}
function RemoveNodeEvent()
{
    valueToRemove=document.getElementById("deleteInput").value;
    linkedList.Remove(valueToRemove);
    DisplayList();

}
function DisplayList()
{
    linkedList.TraverseList();
    for (let i=0;i<linkedList.size;i++)
    {
        console.log(linkedList.values[i]);
    }
}
