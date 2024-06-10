interface IsetLink {
    setInfo(link:string): void 
}

export const InputLink = ({setInfo}:IsetLink)=>{
    function click(evt:FormEventHandler<HTMLFormElement>){
        evt.preventDefault()
        setInfo("")
    }
    return (    
            <form action="http:\\localhost:3000" method="POST" onSubmit={click}>
                <input type="text" />
                <button>Enviar Link</button>

            </form>
        )
}