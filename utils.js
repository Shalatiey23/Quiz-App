let username ;

function saveUserName(name) {
    if(!name){
        throw new Error("Please enter a name")
     
    }
    if(typeof name !== "string"){
        throw new Error("Name should be a string")
     }
    username = name
}


function getUserName(storage){
    const getName = localStorage.getItem(storage)
    return getName;
}
export {saveUserName}