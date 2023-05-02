import { useState } from 'react';
import './App.css';
import { CaixaComentario } from './components/CommentBox';
import { IUser } from './shared/interface/IUser';
import { Discussao } from './components/Discussion';

function App() {


const [users, setUsers] = useState<IUser[]>([])
const nome = ('')
const comentario = ('')
const imagem = ('')

const novoCommentAdd = (user: IUser) => {
  //debugger
  setUsers([...users, user])
}

  return (
    <div className="App">
      <CaixaComentario 
        nome={nome}
        comentario={comentario}
        imagem={imagem}
        comentarioAdd={user => novoCommentAdd(user)}
      />
      <Discussao
        users={users.filter(user => user)}
      />
    </div>
  );
}

export default App;
