interface UserProps{
    imagem: string
    nome: string
    comentario: string
}

export const User = ({imagem, nome, comentario}:UserProps) => {
    return(
        <div className="flex justify-center w-full">
            <div className="grid justify-items-start py-5 rounded-xl w-1/2 bg-gray-50">
                <div className="px-5 py-2 flex space-x-5 items-center">
                    <img src={imagem} alt={nome} className="w-1/12 rounded-full"/>
                    <h4 className="text-2xl font-semibold">{nome}</h4>
                </div>
                <div className="px-8 py-2">                    
                    <p className="text-left">{comentario}</p>
                </div>
                <div className="flex space-x-12 mt-8 px-5">
                    <span className="hover:scale-125 cursor-pointer"><i className="fi fi-rr-social-network"><p className="text-xs">Curtir</p></i></span>
                    <span className="hover:scale-125 cursor-pointer"><i className="fi fi-rs-undo"><p className="text-xs">Comentar</p></i></span>
                    <span className="hover:scale-125 cursor-pointer"><i className="fi fi-rr-megaphone"><p className="text-xs">Denunciar</p></i></span>
                </div>
            </div>
        </div>
    )
}