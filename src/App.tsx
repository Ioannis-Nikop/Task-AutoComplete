import React, { useState, useEffect } from 'react'
import AutoComplete from './components/AutoComplete'
import json from './countries.json'

function App() {
	const [suggestions, setSuggestions] = useState([] as string[])

	useEffect(() => {
		getSuggestions()
	}, [])

	// Having the function return a Promise to simulate an async API call
	const getSuggestions = () => {
		return new Promise(resolve => {
			const values = json && json.countries && json.countries.map(item => {
				return item.name
			})
			setSuggestions(values)
			resolve('resolved')
		})
	}

	return (
		<div className='min-h-screen bg-base-200 p-4'>
			<AutoComplete
				suggestions = {suggestions}
			/>
		</div>
	)
}

export default App
