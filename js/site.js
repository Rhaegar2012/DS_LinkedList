
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
        this.temp=null;
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

        
    }
    Pop(){
        //TODO
    }
    Remove(){
        //TODO
    }
    TraverseList(){
        let listIndexer=0;
        let currentNode=this.head;
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
    linkedList.TraverseList();
    DisplayList();

}
function AddNodeToEvent()
{
    let nodeValue=document.getElementById("listInput").value;
    let nodeIndex=document.getElementById("listIndexInput").value; 
    newNode=new ListNode(nodeValue,null,null);
    linkedList.AddTo(newNode,nodeIndex);
    linkedList.TraverseList();
    DisplayList();
}
