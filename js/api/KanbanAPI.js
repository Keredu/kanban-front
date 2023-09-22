export default class KanbanAPI {

	static async getItems(mode) {
        return fetch("http://localhost:5000/item/");
	}

    static async insertItem(item, mode){
        return httpGet("http://localhost:5000/item/");
    }

    static async updateItem(itemId, newItem, mode){
        return httpGet("http://localhost:5000/item/");
    }

    static async deleteItem(itemId, mode){
        return httpGet("http://localhost:5000/item/");
    }
}

async function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           return xmlHttp.responseText;
        }
    };
    xmlHttp.open( "GET", theUrl, true );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}