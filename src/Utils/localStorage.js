
const getEstates=()=>{
  const getLocalStorage=localStorage.getItem('estate-booked');
  if(getLocalStorage){
    return JSON.parse(getLocalStorage)
  }
  return []
}

const setEstates= id=>{
  const setLocalStorage=getEstates();
  const isExist=setLocalStorage.find(estateId=> estateId===id);
  if(!isExist){
    setLocalStorage.push(id);
    localStorage.setItem('estate-booked', JSON.stringify(setLocalStorage))
  }
}

const removeEstates=(logOut)=>{
 if(logOut){
  localStorage.removeItem('estate-booked');
 }
}


export {getEstates,setEstates,removeEstates }