
class Remover {
    constructor(props) {
        this.url = props.url;
    }

    removeById = async (id)=>{
        const temp = this.url;
        this.url += `/${id}`;
        const res = await this.remove();
        this.url = temp;
        return res;
    }

     remove = async ()=> {
         return await fetch(this.url, {
             method: 'DELETE',
             /*headers: {
                 'Content-Type': 'application/json',
                 // Дополнительные заголовки, если необходимо
             },*/
         })
             .catch(error => ({
                 error
             }));
     }
}

export default Remover;