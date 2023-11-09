

function Notification({message}){
    return(
        <dialog className="alert alert-info alert-dismissible w-100 fade show" role="alert">
            <div className="text-center text-break">
                {message}
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </dialog>
    );
}
export default Notification;