
class ItemFinder{
    constructor(props) {
        this.url = props.url;
    }

    async getById(id){
        return await fetch(this.url + `/${id}`)
            .then(resp=>resp.json());
    }

    async getAll(){
        return await fetch(this.url)
            .then(resp=>resp.json())
    }

}

export default ItemFinder;