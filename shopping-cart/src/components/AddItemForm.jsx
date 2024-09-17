function AddItemForm(){

const[name,setName]=userState('');
const[price,setPrice]=userState('');
const[quality,setQuality]=userState('');

return(
    <div>
        <h1>Add item</h1>
        <form action="">
            <input type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="ItemName"
            />
        </form>

    </div>

)
}

export default AddItemForm