import { Dispatch, SetStateAction, useState } from "react"
import { InputText, TextArea } from "../FieldText"
import { IUser } from "../../shared/interface/IUser"

interface CaixaComentarioProps{
    comentarioAdd: (user: IUser) => void
    nome: string | Dispatch<SetStateAction<string>>
    comentario: string | Dispatch<SetStateAction<string>>
    imagem: string | Dispatch<SetStateAction<string>>
}

export const CaixaComentario = (props:CaixaComentarioProps) => {

const [nome, setNome] = useState('')
const [comentario, setComentario] = useState('')
const [imagem, setImagem] = useState('')

const aoSalvar = (comentarioAdd: React.FormEvent<HTMLFormElement>) => {
    comentarioAdd.preventDefault()
    props.comentarioAdd({nome, comentario, imagem})
    setNome('')
    setComentario('')
    setImagem('')
}


    return (
        <section className="h-96 flex justify-center w-full">
            <form onSubmit={aoSalvar} className="w-1/2 border-2 border-zinc-300 rounded bg-stone-200">
                <div className="flex justify-start px-5 items-center content-center h-full w-full">
                    <div className="flex flex-col items-start w-full">
                        <InputText 
                            placeholder={'Digite aqui seu nome...'} 
                            aoAlterado={valor => setNome(valor)}
                            valor={nome}
                            obrigatorio={true}                            
                            comente={'Comente'}
                        />

                        <TextArea
                            placeholder={'Digite aqui seu comentário...'}
                            obrigatorio={true}
                            valor={comentario}
                            enviar={'Enviar'}
                            aoAlterado={valor => setComentario(valor)}
                        />
                    </div>
                </div>
            </form>
        </section>
    )
}