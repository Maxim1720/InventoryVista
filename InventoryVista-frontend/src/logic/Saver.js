class Saver {
    constructor(props) {
        this.url = props.url;
    }
    async save(requestData){
        const options= {
            method: "POST",
            body:JSON.stringify(requestData),
            headers: { 'Content-Type': 'application/json' },
        };
        return await fetch(this.url, options).then(resp=>{
            if(!resp.ok){
                throw new Error(`${resp.status} ${resp.statusText && ':'}`);
            }
            return resp.json()
        });
    }
}

export default Saver;
