(function() {
    "text/javascript"

    
});

// function loadTable() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "https://192.168.137.1:5063/api/Contact/GetAll");
//     xhttp.send();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);
            
//             }
//         }   
// }
// loadTable();

function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://192.168.137.1:5063/api/Contact/GetAll");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = '';
            const objects = JSON.parse(this.responseText);
            console.log(objects)
            for(let object of objects) {
                console.log(object);
                trHTML += '<tr>';
                trHTML += '<td>' + object.id + '</td>';
                trHTML += '<td>' + object.contactName + '</td>';
                trHTML += '<td>' + object.address + '</td>';
                trHTML += '<td>' + object.tel + '</td>';
                trHTML += '<td>' + object.requestDate + '</td>';
                // trHTML += '<td>' + object[''] + '</td>';
                trHTML += '<tr>';
            }
            document.getElementById("contactTable").innerHTML = trHTML;
        }
    }
}
loadTable();
// console.log(object);
// console.log(objects);
// console.log(loadTable);



