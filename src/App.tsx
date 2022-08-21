import { useState } from 'react'
import BarcodeScannerComponent from 'react-qr-barcode-scanner'

export function App() {
  const [scan, setScan] = useState(false)
  const [logs, setLog] = useState<Array<string>>([])

  const barcodeScannerComponentHandleUpdate = (error: any, result: any) => {
    if (result) {
      setLog([...logs, result.text])
      window.navigator.vibrate(100)
      setScan(false)
    } else {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <button onClick={() => setScan(true)}>SCAN</button>
      <button onClick={() => setScan(false)}>CANCEL</button>
      {scan && (
        <div className="w-full h-12">
          <BarcodeScannerComponent
            onUpdate={barcodeScannerComponentHandleUpdate}
          />
        </div>
      )}
      <div>
        {logs.map((log) => (
          <div key={log}>{log}</div>
        ))}

        <button onClick={() => setLog([])}>CLEAR</button>
      </div>
    </div>
  )
}
