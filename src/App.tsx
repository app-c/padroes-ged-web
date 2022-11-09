import { ChangeEvent, useCallback, useState } from 'react'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import {fire, storege} from './config/firebase'
import { Select } from './components'

export const colection = {
  sed: 'sed',
  ser: 'ser',
  set: 'set',
  padroes: 'pad'
}


function App() {
  const [count, setCount] = useState(0)

  const [nome, setNome] = useState('')
  const [file, setFile] = useState<any>(null)
  const [value, setValue] = useState('')

  const getFile = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }, [])
  
  const upload = useCallback(async () => {
    const fileRef = ref(storege, `pdf/${value}/${file.name}`)
    console.log(String(file.name).split('.').map(String)[0])

    uploadBytes(fileRef, file).then(h => { })
    const url = await getDownloadURL(fileRef)

    const colect = collection(fire, colection.sed)
    const name = String(file.name).split('.').map(String)[0]
    const dados = {
      page: 1,
      name,
      uri: url,
    }


    switch (value) {
      case 'pad':
        console.log('Oranges are $0.59 a pound.');
        break;
      case 'sed':
        console.log('ok sed')
        break;
      case 'ser':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      case 'set':

        break;
      default:
        console.log(`Sorry, we are out of ${value}.`);
    }

    // addDoc(colect, dados).then(() => alert('Success'))
    
  }, [file, value])

  return (
    <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}} className="App">
      <div style={{display: 'flex', flexDirection: 'column'}} >
        <h1>Uploads de arquivos da geds</h1>

        <input onChange={getFile} type='file' />

        <p >Qual o tipo de ged</p>

        <div style={{display: 'flex', marginBottom: 20}} >
          <Select select={value === 'sed'} title='sed' pres={() => setValue('sed')} />
          <Select select={value === 'set'} title='set' pres={() => setValue('set')} />
          <Select select={value === 'ser'} title='ser' pres={() => setValue('ser')} />
          <Select select={value === 'padrao'} title='padrões' pres={() => setValue('padrao')} />
        </div>

        <button onClick={upload} >upload</button>
      </div>



    </div>
  )
}

export default App
