import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <Palette />
  )
}

function Palette() {

	const colors = ["red", "green", "yellow", "olive", "grey", "pink", "purple", "lavender", "white", "black"];
	
	const displayButtons = colors.map(color => 
			<ColorButton color={color}/>
	);
	
	return (
		<div className="palette-style">
			{displayButtons}
		</div>
	)
}

function ColorButton({color}) {
	
	function changeBgColor() {
		document.body.style.backgroundColor = color;
	}
	
	return (
			<button
				className="btn-style"
				style={{color: color}}
				onClick={changeBgColor}
			>
				{color.toUpperCase()}
			</button>
	)
}

export default App
