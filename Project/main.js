function search() {
    var data = document.getElementById('txt-search').value;
    if(data == '') {
        alert('Please enter data to search');
        return false;
    }
    return true;
}