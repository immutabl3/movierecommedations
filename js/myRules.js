// Object containing the validation rules
export default {
	// The "name" attribute of the form control
	userGenre: {
		// Make this field required
		required: true
	},
	// Set the minimum value
	userDecade: {
		// Only digits are allowed
		required: true,
		digits: true,
		min: 4
	},
	// Set the minimum value
	userMinutes: {
		// Only digits are allowed
		required: true,
		digits: true,
		min: 3
	}
};