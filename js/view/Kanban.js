import Column from './Column.js';
import KanbanAPI from '../api/KanbanAPI.js';

export default class Kanban {
    constructor(root){
        this.root = root;

        Kanban.columns().then(columns => {
            columns.forEach(column => {
                console.log(column);
                const columnInstance = new Column(column.columnId, column.name);

                this.root.appendChild(columnInstance.elements.root);
            });
        });
    }

    static columns(){
        return KanbanAPI.getItems().then( (value) => {
            return value.json();
        })
    };
}