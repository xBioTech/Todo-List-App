
function setLocalStorage(key, arr){
   localStorage.setItem(key, JSON.stringify(arr));
}

export default setLocalStorage;