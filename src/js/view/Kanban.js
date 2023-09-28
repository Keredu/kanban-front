import Column from './Column.js';
import KanbanAPI from '../api/KanbanAPI.js';

/**
* This class creates the kanban
*
* @class Kanban
* 
* @param {root}
*/

export default class Kanban {
    
    /**
     * This constructor creates the kanban
     * 
     * @constructor Kanban
     * 
     * @param {*} root 
     * 
     * @returns {Kanban} - the new kanban
     */
    constructor(root){
        this.root = root;

        Kanban.columns().then(columns => {
            columns.forEach(column => {
                const columnInstance = new Column(column.columnId, column.name);

                this.root.appendChild(columnInstance.elements.root);
            });
        });
    }

    /**
    * This function gets all the columns from the database
    *
    * @function Kanban
    * 
    * @returns {Promise<Response>}
    */
    static columns(){
        return KanbanAPI.getObjects('column').then( (value) => {
            return value.json();
        })
    };
}