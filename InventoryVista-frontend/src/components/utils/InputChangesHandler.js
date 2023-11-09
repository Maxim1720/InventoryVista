
function inputChangesHandler(event) {
    const { name, value } = event.target;

    this.setState((prevState) => ({
        ...prevState,
        formData: {
            ...prevState.formData,
            [name]: value
        }
    }));
}