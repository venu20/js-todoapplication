// Import stylesheets
import './style.css';

// Write Javascript code!

class Todolist{

  constructor(){
    this.list = [];
    this.actionEle = document.querySelector('#add-action');
    this.inputEle = document.querySelector('#task-item');
    this.listContainer = document.querySelector('#list-container');

    this.actionEle.addEventListener('click', this.addTaskItem.bind(this));
  }

  addTaskItem(event){
    event.preventDefault();
    const taskItemContent = this.inputEle.value;
    this.list.push(taskItemContent);

    const taskItemID = `task-${this.list.length - 1}`;

    const listItemEle = document.createElement('li');
    listItemEle.setAttribute('id', taskItemID);

    const removeEle = document.createElement('button');

    removeEle.append('Remove');
    removeEle.addEventListener('click', this.removeItem.bind(this, this.list.length-1));
    listItemEle.append(`${taskItemContent}`, removeEle);

    this.listContainer.append(listItemEle);

  }

  removeItem(itemIndex){
    this.list = this.list.slice(itemIndex, 1);
    const item = document.getElementById(`task-${itemIndex}`);

    this.listContainer.removeChild(item);

  }

}

new Todolist();