import KanbanAPI from "../api/KanbanAPI.js";
import DropZone from "./DropZone.js";
import Item from "./Item.js";

export default class Column {
    /*
    * This function creates a new column
    *
    * @constructor
    * 
    * @param{id}
    * @param{title}
    * 
    * @returns{Column} - the new column
    */
    constructor(id, title){
        const topDropZone = DropZone.createDropZone();

        this.elements = {};
        this.elements.root = Column.createRoot();
        this.elements.title = this.elements.root.querySelector('.kanban__column-title');
        this.elements.items = this.elements.root.querySelector('.kanban__column-items');
        this.elements.addItem = this.elements.root.querySelector('.kanban__add-item');

        this.elements.root.dataset.id = id;
        this.elements.title.textContent = title;
        this.elements.items.appendChild(topDropZone);

        /*
        @event
        */
        this.elements.addItem.addEventListener('click', () => {
            const newItem = {'name': 'New Item', 'columnId': id, 'description': 'New Item Description', 'position': 1};
            const item = KanbanAPI.insertObject(newItem, "item")
            this.renderItem(item);
        });

        /*
        This function render the items in the column
        */
        Column.getItemByColumnId(id, 'item').then( (item) => {
            item.forEach(element => {
                this.renderItem(element);
            });    
        });
    }

    /*
    * This function creates the root of the column
    *
    * @function
    * 
    * @returns{DocumentFragment}
    */
    static createRoot(){
        const range = document.createRange();
        range.selectNode(document.body);
        return range.createContextualFragment(`
            <div class="kanban__column">
                <div class="kanban__column-title"></div>
                <div class="kanban__column-items"></div>
                <button class="kanban__add-item" type="button">+ Add</button>
            </div>
        `).children[0];
    }

    /*
    * This function returns all the items in the column
    *
    * @function
    *   
    * @param{columnId}
    * 
    * @returns{Promise<Response>} - the promise of all the items in the column
    */
    static getItemByColumnId(columnId){
        return KanbanAPI.getItemsByColumnId(columnId,'item').then( (value) => {
            return value.json();
        })
    }

    /*
    * This function renders an item in the column
    *
    * @function
    * 
    * @param{data}
    */
    renderItem(data){
        const item = new Item(data.itemId, data.name);
        
        this.elements.items.appendChild(item.elements.root);
    }
}