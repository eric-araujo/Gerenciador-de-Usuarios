var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach((field, index) => {

    if (field.name == "gender" && field.checked) {
        console.log('SIM', field);
    } else {
        console.log('NAO');
    }
});