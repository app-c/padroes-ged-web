import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import {ref, uploadBytes, getDownloadURL, deleteObject} from 'firebase/storage'
import {fire, storege} from './config/firebase'
import { Select } from './components'
import { addDoc, collection, deleteDoc, onSnapshot, doc } from 'firebase/firestore'
import { Geds } from './components/geds'


interface Props {
  name: string
  uri: string
  page:number
  id: string
}

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('sed')

  const [nome, setNome] = useState('')
  const [file, setFile] = useState<any>(null)

  const [dados, setDados] = useState<Props[]>([])
  const colect = collection(fire, value)


  const getFile = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }, [])

  const upload = useCallback(async () => {
    const fileName = String(file.name).split('.').map(String)[0]
    const fileRef = ref(storege, `pdf/${value}/${fileName.trim()}.pdf`)

    const fil = dados.find(h => h.name === fileName)

    
    console.log(fil)
    if(fil) {
      deleteObject(fileRef)
      const ref = doc(fire, value, fil.id)
      deleteDoc(ref)
      
    }

    await uploadBytes(fileRef, file).then(h => { console.log('app ok')})
    const url = await getDownloadURL(fileRef) 
    console.log(url)

    const dt = {
      page: 1,
      name: fileName,
      uri: url
    }

    const colect = collection(fire, value)
    addDoc(colect, dt).then(() => alert('success'))
    
  }, [file, value, dados])

  const handleDelete = useCallback(async(data: Props) => {
    const fileRef = ref(storege, `pdf/${value}/${data.name}.pdf`)

    deleteObject(fileRef)
    const refD = doc(fire, value, data.id)
    deleteDoc(refD)
    
  }, [value])

  useEffect(() => {

    onSnapshot(colect, h => {
      const res = h.docs.map(p => {
        return {
          ...p.data(),
          id: p.id,
        } as Props
      })
      setDados(res)
    })
  }, [value])


  return (
    <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}} className="App">
      <div style={{display: 'flex', padding: 20, flexDirection: 'column'}} >
        <h1>Uploads de arquivos da geds</h1>

        <input onChange={getFile} type='file' />

        <p >Qual o tipo de ged</p>

        <div style={{display: 'flex', marginBottom: 20}} >
        <Select select={value === 'sed'} title='sed' pres={() => setValue('sed')} />
        <Select select={value === 'set'} title='set' pres={() => setValue('set')} />
        <Select select={value === 'ser'} title='ser' pres={() => setValue('ser')} />
        <Select select={value === 'padrao'} title='padrões  ' pres={() => setValue('padrao')} />

        </div>

        <button onClick={upload} >upload</button>
      </div>

      <div style={{alignSelf: 'flex-start', padding: 10, flexDirection: 'column', display: 'flex'}} >
        {dados.map(h => (
            <Geds pres={() => handleDelete(h)} key={h.id} title={h.name} />
        ))}
      </div>

    </div>
  )
}

export default App
