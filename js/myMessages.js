// Object containing the error messages
export default {
	// The "name" attribute of the form control
	userGenre: {
		// The message to display
		required: `Don't Leave This Blank!`
	},
	userDecade: {
		// Only digits are allowed
		required: `Don't Leave This Blank!`,
		digits: 'Digits Only',
		min: 'Must be exactly 4 digits'
	},
	userMinutes: {
		// Only digits are allowed
		required: `Don't Leave This Blank!`,
		digits: 'Digits Only',
		min: 'Must be greater than 2 digits'
	}
};