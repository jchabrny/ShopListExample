import "./AddField.css"

export default function AddField({amount,setAmount,item,setItem}){
    return(
        <form className="addField">
            <div className="addField_input">
                <input type="text" onChange={setItem()} value={item}/>

            </div>
            <div className="addField_input">
                <input type="text" onChange={setAmount} value={amount}/>
            </div>
            <div className="addField_btn">
                <button>Add</button>
            </div>
        </form>
    )
}