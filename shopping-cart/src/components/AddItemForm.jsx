const{useState}=require("react")

function AddItemForm(){
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [quantity,setQuantity]=useState('');
    const handleSubmit=(e)=>{
    e.preventDefault();
    console.log({name,price,quantity});
    }
    return(
        <div>
            <h1>Add item</h1>
            <form action="">
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="ItemName"
                />
                <input type="number"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                placeholder="ItemPrice"
                min="1"
                />
                 <input type="number"
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value)}
                placeholder="Item Quantity"
                min="1"
                />
                <button type="submit" onClick={handleSubmit}>Add Item</button>
            </form>

        </div>

    )
}

export default AddItemForm