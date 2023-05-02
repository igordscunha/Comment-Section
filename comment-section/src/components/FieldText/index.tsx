import { ReactElement } from "react"

interface InputTextProps {
    comente: string
    obrigatorio: boolean
    valor: string
    placeholder: string
    aoAlterado: (valor: string) => void
}


export const InputText = ({placeholder, aoAlterado, comente, obrigatorio, valor}:InputTextProps) => {
    

const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value)
}
    
    return(
        <div className="w-full flex flex-col">
            <h3 className="text-2xl font-semibold flex py-4">{comente}</h3>
            <input className="border-2 border-indigo-300 w-2/5" 
                required={obrigatorio} 
                value={valor}
                placeholder={placeholder}
                onChange={aoDigitar}
            />
        </div>
    )
}

// _____________________________________________________________________________________________

interface TextAreaProps{
    placeholder: string
    obrigatorio: boolean
    valor: string
    enviar: ReactElement | string
    aoAlterado: (valor: string) => void
}

export const TextArea = ({aoAlterado, placeholder, obrigatorio, valor, enviar}:TextAreaProps) => {

const aoDigitar = (evento: React.ChangeEvent<HTMLTextAreaElement>) => {
    aoAlterado(evento.target.value)
}

    return(
        <div className="w-full">
            <textarea className="border-2 border-indigo-300 w-full h-24 my-3 resize-none" 
                placeholder={placeholder} 
                required={obrigatorio}
                value={valor}
                onChange={aoDigitar}
            />
            <button className="bg-indigo-300 px-5 py-1 rounded-full hover:bg-indigo-500 hover:text-white active:text-white active:bg-indigo-700 flex" type="submit">{enviar}</button>
        </div>
    )
}