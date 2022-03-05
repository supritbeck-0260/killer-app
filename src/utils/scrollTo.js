export const scrollTo = (offset)=>{
    if(isNaN(offset)) return;
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
      })
}