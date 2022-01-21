
interface HeaderProps {
    title: string
}

export default function Header({title}: HeaderProps){
    return(
        <div className="header">
            <h1>{title}</h1>
        </div>
    )
}