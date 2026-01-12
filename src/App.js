import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  const times = [
    {
      nome: 'Programação',
      CorPrimaria: '#57c278',
      CorSecundaria: '#d9f7d9'
    },
    {
      nome: 'Front-End',
      CorPrimaria: '',
      CorSecundaria: ''
    },{
      nome: 'Data Science',
      CorPrimaria: '',
      CorSecundaria: ''
    },{
      nome: 'Devops',
      CorPrimaria: '',
      CorSecundaria: ''
    },{
      nome: 'Ux e Design',
      CorPrimaria: '',
      CorSecundaria: ''
    },{
      nome: 'Mobile',
      CorPrimaria: '',
      CorSecundaria: ''
    },{
      nome: 'Inovação e Gestão',
      CorPrimaria: '',
      CorSecundaria: ''
    },
    
  ]




  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
      <Time nome="Programação" />
      <Time nome="Front-end" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
