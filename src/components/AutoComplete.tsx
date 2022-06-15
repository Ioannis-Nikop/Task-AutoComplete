import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AutoComplete = ({ suggestions }) => {
	const [userInput, setUserInput] = useState('')
	const [filteredSuggestions, setFilteredSuggestions] = useState([] as string[])
	const [activeSuggestionItem, setActiveSuggestionItem] = useState(0)
	const [showSuggestions, setShowSuggestions] = useState(false)
	
	// Filter suggestions that don't contain the user's input
	const filterSuggestions = (values : string[], input : string) => {
		const filtered = values.filter(
			(suggestion: string) =>
				suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
		)
		setFilteredSuggestions(filtered)
		setUserInput(input)
		setActiveSuggestionItem(0)
		setShowSuggestions(true)
	}

	// Handle change event for user's input
	const onChange = (e) => {
		filterSuggestions(suggestions, e.target.value)
	}

	// Handle click event
	const onClick = (e) => {
		setFilteredSuggestions([]) 
		setUserInput(e.target.innerText)
		setActiveSuggestionItem(0)
		setShowSuggestions(false)
	}

	// Handle key event
	const onKeyDown = (e) => {
		switch (e.keyCode) {
		case 13: // enter key
			setUserInput(filteredSuggestions[activeSuggestionItem])
			setActiveSuggestionItem(0)
			setShowSuggestions(false)
			break
		case 38: // up arrow
			if (activeSuggestionItem === 0) {
				return
			}
			setActiveSuggestionItem(activeSuggestionItem - 1)
			break
		case 40: // down arrow
			if (activeSuggestionItem - 1 === filteredSuggestions.length) {
				return
			}
			setActiveSuggestionItem(activeSuggestionItem + 1)
			break
		}
	}

	// List of suggestions to show as a dropdown
	const SuggestionsList = ({ input }) => {
		return (
			<div className="dropdown-content p-2 shadow bg-base-100 rounded w-full">
				{filteredSuggestions.length ? (
					<ul>
						{filteredSuggestions.map((value, index) => {
							let className = 'p-2'
							if (index === activeSuggestionItem) {
								className = `${className} bg-primary rounded text-white`
							}
							// Build the display value while highlighting the user's input
							const indexOfInput = value.toLowerCase().indexOf(input.toLowerCase())
							const string = value.substring(0, indexOfInput)
							const endString = value.substring(indexOfInput + input.length)
							const highlightedText = value.substring(indexOfInput, indexOfInput + input.length)
							return (
								<li className={className} key={value} onClick={onClick}>
									{string}
									<span className='font-bold underline'>{highlightedText}</span>
									{endString}
								</li>
							)
						})}
					</ul>
				) : (
					<span className='italic'>No values match the given input</span>
				)}
			</div>
		)
	}

	SuggestionsList.propTypes = {
		input : PropTypes.string.isRequired
	}

	return (
		<div className='w-80'>
			<input
				className='input input-bordered w-full max-w-xs'
				type="text"
				onChange={onChange}
				onKeyDown={onKeyDown}
				value={userInput}
			/>
			{showSuggestions && userInput && <SuggestionsList input={userInput}/>}
		</div>
	)
}

AutoComplete.propTypes = {
	suggestions : PropTypes.arrayOf(PropTypes.string)
}

export default AutoComplete