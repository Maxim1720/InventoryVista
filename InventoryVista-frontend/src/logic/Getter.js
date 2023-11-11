
class ItemFinder{
    constructor(props) {
        this.url = props.url;
    }

    async getById(id){
        return await fetch(this.url + `/${id}`)
            .then(resp=>{
                if(!resp.ok){
                    throw new Error(`${resp.status} ${':' && resp.statusText}`);
                }
                return resp.json();
            })
    }

    async getAll(){
        return await fetch(this.url)
            .then(resp=>{
                if(!resp.ok){
                    throw new Error(`${resp.status} ${':' && resp.statusText}`);
                }
                return resp.json()
            })
    }

}

export default ItemFinder;