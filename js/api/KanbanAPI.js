export default class KanbanAPI {

	static async getObjects(mode) {
        return fetch(`http://localhost:5000/${mode}/`);
	}

    static async getObjectID(itemId, mode){
        return fetch(`http://localhost:5000/${mode}/${itemId}`);
    }

    static async insertObject(item, mode){
        return fetch(`http://localhost:5000/${mode}/`, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

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

    static async deleteObject(itemId, mode){
        return fetch(`http://localhost:5000/${mode}/${itemId}`, {
            method: 'DELETE'
        });
    }

    static async getItemsByColumnId(columnId, mode){
        return fetch(`http://localhost:5000/${mode}/${columnId}/column/`);
    }
}