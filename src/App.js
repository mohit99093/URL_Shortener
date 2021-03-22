import { useState } from 'react'
import './App.css'

function App() {
	const [encodeState, setencodeState] = useState({ encode: '', decode: '' })
	const [decodeState, setdecodeState] = useState({ encode: '', decode: '' })
	const encodeinput = async () => {
		await fetch('api/encode', {
			method: 'POST',
			body: JSON.stringify({ value: encodeState.encode }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(res => {
				// console.log(res)
				if (res.status === 201) {
					setencodeState({ ...encodeState, decode: res.compressString })
				} else {
					alert(res.message)
				}
			})
	}
	const decodeinput = async () => {
		await fetch('/api/decode', {
			method: 'POST',
			body: JSON.stringify({ value: decodeState.decode }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(res => {
				// console.log(res)
				if (res.status === 201) {
					setdecodeState({ ...decodeState, encode: res.decompressString })
				} else {
					alert(res.message)
				}
			})
	}
	return (
		<>
			<div className="App">
				<h2 className="mb-5">URL Shortener</h2>
				<div className="fun">
					<div className="encode">
						<div class="input-group mb-3">
							<span class="input-group-text" id="basic-addon1">
								URL
							</span>
							<input type="text" class="form-control" placeholder="only alphbets" value={encodeState.encode} onChange={e => setencodeState({ ...encodeState, encode: e.target.value })} aria-describedby="basic-addon1" />
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text" id="basic-addon1">
								Compressed URL
							</span>
							<input type="text" class="form-control" disabled value={encodeState.decode} aria-describedby="basic-addon1" />
						</div>
						<div className="btns">
							<button type="button" class="btn btn-primary" onClick={() => encodeinput()}>
								Encode
							</button>
						</div>
					</div>
					<div className="decode">
						<div class="input-group mb-3">
							<span class="input-group-text" id="basic-addon1">
								URL
							</span>
							<input type="text" class="form-control" disabled value={decodeState.encode} aria-describedby="basic-addon1" />
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text" id="basic-addon1">
								Compressed URL
							</span>
							<input type="text" class="form-control" value={decodeState.decode} onChange={e => setdecodeState({ ...decodeState, decode: e.target.value })} aria-describedby="basic-addon1" />
						</div>
						<div className="btns">
							<button type="button" class="btn btn-danger" onClick={() => decodeinput()}>
								Decode
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
