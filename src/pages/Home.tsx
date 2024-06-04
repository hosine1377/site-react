import { useState, useRef, useMemo } from 'react'

const Home = () => {
  const [brithDate, setBrithDate] = useState<any>()
  const [reRender, setReRender] = useState(0)
  const myRef = useRef<HTMLInputElement>()
  const handelBrithDateSubmit = () => {
    setBrithDate(myRef.current?.value)
  }
  //   const inputChenge = (e: any) => {
  //     setBrithDate(e.target.value)
  //   }
  const handelCalcluted = useMemo(() => {
    console.log('calcluted hapend')

    if (!brithDate) return null
    let currentYear = new Date().getFullYear()
    return currentYear - brithDate
  }, [brithDate])
  console.log('rerender')
  return (
    <div>
      <h2>Calcluter Age</h2>
      {handelCalcluted ? <p>your age is {handelCalcluted}</p> : null}
      <input
        ref={myRef}
        // onChange={inputChenge}
        type="text"
        placeholder="Enter Age"
      />
      <button onClick={handelBrithDateSubmit}>submit</button>
      <button onClick={() => setReRender(reRender + 1)}>reRender</button>
    </div>
  )
}
export default Home
