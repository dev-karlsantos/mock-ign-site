/*******w************

    Project 3
    Name: Karl Santos
    Date: April 20, 2022
    Description: Project 3 WEBD-1008

********************/

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);

function load()
{
    document.getElementById("contact-page").addEventListener("submit", validate);

}

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e)
{
    // Hides all error elements on the page
    hideErrors();

    // Determine if the form has errors
    if(formHasErrors())
    {
        // Prevents form from submitting
        e.preventDefault();

        // Returning false prevents the form from submitting
        return false;
    }
    return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e)
{
    // Confirm that the user wants to reset the form.
    if (confirm('Reset Page?') )
    {
        // Ensure all error fields are hidden
        hideErrors();
        
        // Set focus to the first text field on the page
        document.getElementById("fullname").focus();
        
        // When using onReset="resetForm()" in markup, returning true will allow
        // the form to reset
        return true;
    }

    // Prevents the form from resetting
    e.preventDefault();
    
    // When using onReset="resetForm()" in markup, returning false would prevent
    // the form from resetting
    return false;   
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors()
{
    let errorFlag = false;

    let requiredFields = ["fullname", "comment"];

    for(let i = 0; i < requiredFields.length; i++)
    {
        let textField = document.getElementById(requiredFields[i]);

        if(textField.value == "")
        {
            document.getElementById(requiredFields[i] + "_error").style.display = "block";

            if(!errorFlag)
            {
                textField.focus();
                textField.select();
            }

            errorFlag = true;
        }
    }

    let phoneRegex = new RegExp(/^[0-9]{10}$/);
    let phoneValue = document.getElementById("phone").value;

    if(phoneValue == "")
    {
        document.getElementById("phone_error").style.display = "block";

        if(!errorFlag)
        {
            document.getElementById("phone").focus();
            document.getElementById("phone").select();
        }

        errorFlag = true;
    }
    else if(!phoneRegex.test(phoneValue))
    {
        document.getElementById("phoneformat_error").style.display = "block";

        if(!errorFlag)
        {
            document.getElementById("phone").focus();
            document.getElementById("phone").select();
        }

        errorFlag = true;
    }

    let emailRegex = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
    let emailValue = document.getElementById("email").value;

    if(emailValue == "")
    {
        document.getElementById("email_error").style.display = "block";

        if(!errorFlag)
        {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }

        errorFlag = true;
    }
    else if(!emailRegex.test(emailValue))
    {
        document.getElementById("emailformat_error").style.display = "block";

        if(!errorFlag)
        {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }

        errorFlag = true;
    }

    return errorFlag;
}

/*
 * Hides all of the error elements.
 */
function hideErrors()
{
    // Get an array of error elements
    let error = document.getElementsByClassName("inputError");

    // Loop through each element in the error array
    for (let i = 0; i < error.length; i++)
    {
        // Hide the error element by setting it's display style to "none"
        error[i].style.display = "none";
    }
}