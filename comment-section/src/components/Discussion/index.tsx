import { IUser } from "../../shared/interface/IUser"
import { User } from "../User"

interface DiscussaoProps{
    users: IUser[]
}

export const Discussao = ({users}:DiscussaoProps) => {
    return(
        <section className="py-2">            
            <div className="space-y-2">
                {users.map(user => 
                <User
                    imagem={'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png'}
                    nome={user.nome}
                    comentario={user.comentario}
                    key={user.nome}
                />)}
            </div>
        </section>
    )
}