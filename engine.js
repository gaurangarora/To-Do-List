function getAndUpdate(){
    console.log("List Updated");
    tasks = document.getElementById('Task').value;
    details = document.getElementById('Details').value;
    if (localStorage.getItem('tasksList')==null){ //if list does not exist, then add new
        tasksListArray = [];
        tasksListsArray.push([tasks, details]);
        localStorage.setItem('tasksList', JSON.stringify(tasksListArray))
    }
    else{
        tasksListArrayStr = localStorage.getItem('tasksList')
        tasksListArray = JSON.parse(tasksListArrayStr);
        tasksListArray.push([tasks, details]);
        localStorage.setItem('tasksList', JSON.stringify(tasksListArray))
    }
    main();
}

function main(){
    if (localStorage.getItem('tasksList')==null){
        tasksListArray = []; 
        localStorage.setItem('tasksList', JSON.stringify(tasksListArray));
    } 
    else{
        tasksListArrayStr = localStorage.getItem('tasksList')
        tasksListArray = JSON.parse(tasksListArrayStr); 
    }

// Filling entries----->
    let fillTable = document.getElementById("fillTable");
    let entry = "";
    tasksListArray.forEach((element, index) => {
        entry += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-sm btn-danger" onclick="deleteEntry(${index})">Delete</button></td> 
        </tr>`; 
    });
    fillTable.innerHTML = entry;
}
addTask = document.getElementById("addTask");
addTask.addEventListener("click", getAndUpdate);
main();
function deleteEntry(itemIndex){
    console.log("Delete", itemIndex);
    tasksListArrayStr = localStorage.getItem('tasksList')
    tasksListArray = JSON.parse(tasksListArrayStr);

    tasksListArray.splice(itemIndex, 1); //deleting single entry
    localStorage.setItem('tasksList', JSON.stringify(tasksListArray));
    main();

}

//Clear all entries ---->
function clearAll(){
    if (confirm("Do you areally want to clear?")){
    console.log('Clearing the storage')
    localStorage.clear();
    main();
    }
}