import { Task } from "./addTask";
import getLocalStorage from "./getLocalStorage";
import setLocalStorage from "./setLocalStorage";


  // need to stringify both then get rid of duplicates with new Set
  // then parse it back into an array with only unique values
  // and setLocalStorage with merged array holding just unique values

  // because setLocalStorage wont work with the original array as it will just
  // overwrite the local storage with a single value instead of updating it


function populateLocalStorage(key, arr, ){

const storedArr = getLocalStorage(key);

if(!storedArr){
setLocalStorage(key, arr);
} else {
   const stringifyStored = storedArr.map(JSON.stringify);
   const stringifyArr = arr.map(JSON.stringify);

   const stringifyMerged = new Set([...stringifyArr, ...stringifyStored]);

   const uniqueMerged = Array.from(stringifyMerged).map(JSON.parse)

   setLocalStorage(key, uniqueMerged);
}

}


function updateLocalStorage(key, taskArray) {

  localStorage.clear();

  setLocalStorage(key, taskArray);
}

export { populateLocalStorage, updateLocalStorage };