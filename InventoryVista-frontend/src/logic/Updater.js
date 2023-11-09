class Updater{
    constructor(props) {
        this.url = props.url;
    }

    async updateById({id, data}) {
        let tmp = this.url;
        this.url += `/${id}`;
        let resp=  this.update(data);
        this.url = tmp;
        return resp;
    }

    async update(data){
        return await fetch(this.url, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(resp => resp.json());
    }

}

export default Updater;