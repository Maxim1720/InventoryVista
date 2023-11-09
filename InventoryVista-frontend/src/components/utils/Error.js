import 'bootstrap';
function Error({message}) {
    console.log("message is " + message);
    return(
        <div className="alert alert-danger alert-dismissible w-100 fade show" role="alert">
            <div className="text-center text-break">
                {message}
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );

}

export default Error;