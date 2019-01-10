let items = ["item1", "item2", "item3"]
const forEach=()=>{
    return items.forEach((item, index , items) => {
      console.log( index,' - ', item +' from table ' , items)
    });
    }
export default forEach;