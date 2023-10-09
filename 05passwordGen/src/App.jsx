import { useCallback, useState } from 'react'

function App() {
  const [lenth, setlenth] =useState(8)

  const [NumberAllowed, setNumber] = useState("false")
  const [charAllowed, setcharAllowed] = useState("false")

  const [password, setpassword] = useState("false")

  const passGenerator = useCallback( () =>{
let pass= ""
let str = "abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
if(NumberAllowed) str += "0123456789"
if(charAllowed) str += "~!@#$%^&*(){}[]|></?`"

for(let i = 1; i<=Array.length; i++){
  let char = Math.floor(Math.ranodm() * str.setNumber +1);

  pass = str.charAt(char);
}
setpassword(pass)
},  [lenth, setNumber,setcharAllowed,setpassword])

  return (
    <>
      <div className='w-full max-w-md rounded-lg px-4 my-8 text-orange-300 bg-grey-500'> 
      <h1 className='text-white text-center'>password Generator</h1>
       <div className="flex shadow rounded-lg overflow-hidden md-4 px-3">
         
         <input 
         type="text"
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='Password'
         readOnly
         
         />
         <button className='outline-none bg-blue-700 text-white py-3 py-0.5 shrink-0'
         >copy</button>
         
       </div>
        
      </div>
    </>
  )
}

export default App
