import "./ItemCounter.css"

export default function ItemCounter(props){
    return(
        <div className="itemCounter">
            <div className="itemCounter_show">
                <p>2</p>
            </div>
            <div className="itemCounter_change">
                <button>+</button>
                <button>-</button>
            </div>

        </div>
    )
}