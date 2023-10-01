import KanbanAPI from "../api/KanbanAPI.js";
import DropZone from "./DropZone.js";

/**
 * This class represents an Item
 * @class Item
 */
export default class Item {

    /**
     * This constructor creates a new item
     * 
     * @constructor Item
     * 
     * @param {number} id - the id of the item
     * @param {text} content - the content of the item
     * 
     * @returns {Item} - the new item
     */
    constructor(id, content){
        const bottomDropZone = DropZone.createDropZone();

        this.elements = {};
        this.elements.root = Item.createRoot();
        this.elements.input = this.elements.root.querySelector('.kanban__item-input');

        this.elements.root.dataset.id = id;
        this.elements.input.textContent = content;
        this.content = content;
        this.elements.root.appendChild(bottomDropZone);

        const onBlur = () => {
            const newContent = this.elements.input.textContent.trim();

            if (newContent === this.content) {
                return;
            };

            this.content = newContent;
            KanbanAPI.updateObject(id, {'name': newContent}, 'item');
        };

        this.elements.input.addEventListener('blur', onBlur);
        this.elements.input.addEventListener('dblclick', () => {
            const check = confirm('Are you sure you want to delete this item?');

            if(check){
                KanbanAPI.deleteObject(id, 'item');
                this.elements.input.removeEventListener('blur', onBlur);
                this.elements.root.parentElement.removeChild(this.elements.root);
            }
        });

        this.elements.root.addEventListener('dragstart', e => {
            e.dataTransfer.setData("text/plain", id);
        });

        //Para que el texto no se añada al dropear
        this.elements.input.addEventListener('drop', e => {
            e.preventDefault();

        });



    }

    /**
    * This function creates the root of the item
    *
    * @function Item
    * 
    * @returns{DocumentFragment}
    */
    static createRoot(){
        const range = document.createRange();
        range.selectNode(document.body);
        return range.createContextualFragment(`
            <div class="kanban__item" draggable="true">
                <div class="kanban__item-input" contenteditable></div>
            </div>
        `).children[0];
    }
}