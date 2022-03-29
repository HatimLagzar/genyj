import React from "react";
import "./WashingDegreeLabel.scss"

export default function WashingDegreeLabel({text, htmlFor = ''}) {
	return <label htmlFor={htmlFor} className='washing-degree-item'>
		#{text}
	</label>
}
