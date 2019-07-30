function validateForm() {
    var box = document.getElementById("first");
    var box2 = document.getElementById("last");
    var box3 = document.getElementById('password');
        if(box.value ==='' || box2.value === '') {
            alert('The name field cannot be blank');
            box.focus();
            box2.focus();
            box.style.boxShadow = "0 0 5px 1px red";
            box2.style.boxShadow = "0 0 5px 1px red";
            return false;
        } else if (box3.value.length < 6){
            alert('The password must contain at least 6 characters');
            box3.focus();
            box3.style.boxShadow = "0 0 5px 1px red";
            return false;
        }
}