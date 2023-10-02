/**
 * This file contains the KanbanAPI class which is used to make calls to the backend
 * 
 * @module KanbanAPI
 */
export default class KanbanAPI {
    /**
    * This function returns all the columns or items from the database
    *
    * @function KanbanAPI
    * 
    * @param {mode} - the mode is either column or item
    * 
    * @returns {Promise<Response>} - the promise of all the columns or items
    */
	static async getObjects(mode) {
        return fetch(`http://localhost:5000/kanban/${mode}/`);
	}

    /**
    * This function returns a specific column or item from the database
    *
    * @function KanbanAPI
    * 
    * @param {objectId} - the id of the item or column
    * @param {mode} - the mode is either column or item
    * 
    * @returns {Promise<Response>} - the promise of the column or item
    */
    static async getObjectID(objectId, mode){
        return fetch(`http://localhost:5000/kanban/${mode}/${objectId}`);
    }

    /**
    * This function inserts a new column or item into the database
    *
    * @function KanbanAPI
    *  
    * @param {object} - the item to be inserted into the database
    * @param {mode} - the mode is either column or item
    * 
    * @returns {Promise<Response>} - the promise of the inserted column or item
    */
    static async insertObject(object, mode){
        return fetch(`http://localhost:5000/kanban/${mode}/`, {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
    /**
    * This function updates a column or item in the database
    *
    * @function KanbanAPI
    * 
    * @param {objectId} - the id of the item or column
    * @param {newItem} - the new item to be updated in the database
    * @param {mode} - the mode is either column or item
    * 
    * @returns {Promise<Response>} - the promise of the updated column or item
    */
    static async updateObject(objectId, newObject, mode){
        const url = `http://localhost:5000/kanban/${mode}/${objectId}`;
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(newObject),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    /**
    * This function deletes a column or item from the database
    *
    * @function KanbanAPI
    * 
    * @param {objectId} - the id of the item or column
    * @param {mode} - the mode is either column or item
    * 
    * @returns{Promise<Response>} - the promise of the deleted column or item
    */
    static async deleteObject(objectId, mode){
        return fetch(`http://localhost:5000/kanban/${mode}/${objectId}`, {
            method: 'DELETE'
        });
    }

    /**
    * This function returns all the items in a column from the database
    *
    * @function KanbanAPI
    * 
    * @param {columnId} - the id of the column
    * @param {mode} - the mode is either column or item
    * 
    * @returns {Promise<Response>} - the promise of all the items in a column
    */
    static async getItemsByColumnId(columnId, mode){
        return fetch(`http://localhost:5000/kanban/${mode}/${columnId}/column/`);
    }
}