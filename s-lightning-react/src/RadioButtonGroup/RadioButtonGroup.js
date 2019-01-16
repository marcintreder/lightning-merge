import React from "react";
import PropTypes from "prop-types";
import { RadioButtonGroup } from '@salesforce/design-system-react';

function RadioButtonGroupM(props) {
    return (
      <RadioButtonGroup {...props} />
    );
  }

  RadioButtonGroupM.propTypes = {
    /**
	 * **Assistive text for accessibility**
	 * * `label`: This label appears in the legend.
	 */
	assistiveText: PropTypes.shape({
		label: PropTypes.string,
	}),
	/**
	 * Children are expected to be Radio components.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Custom CSS classes added to `slds-radio_RadioButtonGroup-group` node.
	 */
	className: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),
	/**
	 * **Text labels for internationalization**
	 * This object is merged with the default props object on every render.
	 * * `error`: Message to display when any of Checkboxes are in an error state.
	 * * `label`: This label appears above the RadioButtonGroup group.
	 */
	labels: PropTypes.shape({
		error: PropTypes.string,
		label: PropTypes.string,
	}),
	/**
	 * This event fires when the radio selection changes.
	 */
	onChange: PropTypes.func,
	/**
	 * Disable all radio inputs.
	 */
	disabled: PropTypes.bool,
	/**
	 * Adds an indicator that this field is required.
	 */
	required: PropTypes.bool,
	/**
	 * The name of this radio group.
	 */
	name: PropTypes.string,
	/**
	 * The ID of the error message, for linking to radio inputs with aria-describedby.
	 */
	errorId: PropTypes.string, 
  }

  export { RadioButtonGroupM as default };
