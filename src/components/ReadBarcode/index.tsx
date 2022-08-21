import { useState } from 'react'
import BarcodeScannerComponent from 'react-qr-barcode-scanner'
import { ReadBarcodeContainer } from './styles'

export function ReadBarcode() {
  const [scan, setScan] = useState(false)
  const [logs, setLog] = useState<Array<string>>([])

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState<any>()

  const barcodeScannerComponentHandleUpdate = (error: any, result: any) => {
    if (result) {
      setLog([...logs, result.text])
      window.navigator.vibrate(100)
      setScan(false)
    } else {
      setError(error)
    }
  }

  return (
    <ReadBarcodeContainer>
      <button onClick={() => setScan(true)}>SCAN</button>
      <button onClick={() => setScan(false)}>CANCEL</button>
      {scan && (
        <BarcodeScannerComponent
          onUpdate={barcodeScannerComponentHandleUpdate}
        />
      )}
      <div>
        {logs.map((log) => (
          <div key={log}>{log}</div>
        ))}

        <button onClick={() => setLog([])}>CLEAR</button>
      </div>
    </ReadBarcodeContainer>
  )
}
