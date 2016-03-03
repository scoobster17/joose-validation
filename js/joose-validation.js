/*
Joose Validation Component
@author Phil Gibbins

Depends on Joose.utils

N.B. THIS CODE IS NOT YET WORKING; IS SOMEWHAT PSEUDO CODE SO FAR

*/

;var joose = window.joose || {};
joose.validation = (function(js) {
    
    "use strict";

    // set config for validation
    var config = {
        classes: {
            valid: 'valid',
            error: 'invalid'
        }
    };

    // validate a form
    var validateForm = function(form) {

        if (!form || form.tagName.toLowerCase() !== 'form') return false;

        // console.log(form);

        // get all inputs in the form
        var inputs = form.querySelectorAll('input');
        var noOfInputs = inputs.length;

        // loop through remaining inputs and validate each one
        for (var i=0; i<noOfInputs; i++) {

            // check if has value
            if (inputs[i].value !== '') {

                // check is valid
                validateInput(inputs[i]);

            } else {

                // check if required
                if (inputs[i].getAttribute('aria-required') === 'true') {

                    // check is valid
                    validateInput(inputs[i]);

                }

            }
        }
    }

    // check to see if an input is valid
    var validateInput = function(input) {

        // check to see what types of validation checks need to be run on the input

        // loop through the types of checks

        // return isValid;

    };

    // find any instances of forms to be validated on load
    var init = function() {

        // find all forms on the page not manually validated
        var formsToBeValidated = document.querySelectorAll('[data-component="validateForm"]');
        var noOfForms = formsToBeValidated.length;
        
        // if there are forms to be validated we want to initialise them individually
        if (noOfForms > 0) {

            for (var i=0; i<noOfForms; i++) {

                // get the form details
                var formId = formsToBeValidated[i].getAttribute('id');

                // default the id if none supplied
                if (!formId) {
                    formId = 'forms-' + i;
                    formsToBeValidated[i].setAttribute('id', formId);
                }

                // record instance of validatedForms to variable
                joose.validatedForms[formId] = formsToBeValidated[i];

                joose.validation.validateForm(formsToBeValidated[i]);
            }
        }
    };

    return {
        init: init,
        validate: validate
    }

})(joose);

// initialise validation functionality
joose.validation.init();

// remove public method
delete joose.validation.init;