import { ChangeEvent, useCallback, useState } from 'react'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {storege} from './config/firebase'



function App() {
  const [count, setCount] = useState(0)

  const [nome, setNome] = useState('')
  const [file, setFile] = useState<any>(null)

  const getFile = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }, [])

  const upload = useCallback(async () => {
    const fileRef = ref(storege, 'pdf/sed/sed.pdf')

    uploadBytes(fileRef, file).then(h => { })
    const url = await getDownloadURL(fileRef)
    console.log(url)
    
  }, [])

console.log(nome)

  return (
    <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}} className="App">
      <div style={{display: 'flex', flexDirection: 'column'}} >
        <h1>Uploads de arquivos da geds</h1>

        <input onChange={getFile} type='file' />


        <h3>Nome do arquivo</h3>
        <input onChange={h => setNome(h.target.value)}  style={{marginBottom: 20}} type='text' />
        <button onClick={upload} >upload</button>
      </div>



    </div>
  )
}

export default App
