export default class KanbanAPI {

    /*
    * This function returns all the columns or items from the database
    *
    * @function
    * 
    * @param{mode} - the mode is either column or item
    * 
    * @returns{Promise<Response>} - the promise of all the columns or items
    */
	static async getObjects(mode) {
        return fetch(`http://localhost:5000/${mode}/`);
	}

    /*
    * This function returns a specific column or item from the database
    *
    * @function
    * 
    * @param{itemId} - the id of the item or column
    * @param{mode} - the mode is either column or item
    * 
    * @returns{Promise<Response>} - the promise of the column or item
    */
    static async getObjectID(itemId, mode){
        return fetch(`http://localhost:5000/${mode}/${itemId}`);
    }

    /*
    * This function inserts a new column or item into the database
    *
    * @function
    *  
    * @param{item} - the item to be inserted into the database
    * @param{mode} - the mode is either column or item
    * 
    * @returns{Promise<Response>} - the promise of the inserted column or item
    */
    static async insertObject(item, mode){
        return fetch(`http://localhost:5000/${mode}/`, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    
    /*
    * This function updates a column or item in the database
    *
    * @function
    * 
    * @param{itemId} - the id of the item or column
    * @param{newItem} - the new item to be updated in the database
    * @param{mode} - the mode is either column or item
    * 
    * @returns{Promise<Response>} - the promise of the updated column or item
    */
    static async updateObject(itemId, newItem, mode){
        const url = `http://localhost:5000/${mode}/${itemId}`;
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    /*
    * This function deletes a column or item from the database
    *
    * @function
    * 
    * @param{itemId} - the id of the item or column
    * @param{mode} - the mode is either column or item
    * 
    * @returns{Promise<Response>} - the promise of the deleted column or item
    */
    static async deleteObject(itemId, mode){
        return fetch(`http://localhost:5000/${mode}/${itemId}`, {
            method: 'DELETE'
        });
    }

    /*
    * This function returns all the items in a column from the database
    *
    * @function
    * 
    * @param{columnId} - the id of the column
    * @param{mode} - the mode is either column or item
    * 
    * @returns{Promise<Response>} - the promise of all the items in a column
    */
    static async getItemsByColumnId(columnId, mode){
        return fetch(`http://localhost:5000/${mode}/${columnId}/column/`);
    }
}