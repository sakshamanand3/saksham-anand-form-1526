
        // get the reference to full name with id fname
        let fn = document.getElementById("uname");
        // get the reference to email with id email
        let em = document.getElementById("email");
        // get the reference to message with id message
        let msg = document.getElementById("message");
        // get the reference to button with id validate-form
        let btn = document.getElementById("submit-data");
        
        // create the event handler that will take care 
        // of the action following button-click
        function formValidator(){
            
            // create object that will save user inputs (empty bucket)
            let feedback = {};
            // create array that will save error messages (empty bucket)
            let errors = [];
            
            // check if full name has a value
            if (fn.value !== ""){
                // if it does, save it
                feedback.uname = fn.value;
            } else {
                // if it does not, create the error message (and save it too)
                errors.push("Please provide your full name");
            }
            
            // check if email has a value
            if (em.value !== ""){
                // if it does, save it
                feedback.email = em.value;
            } else {
                // if it does not, create the error message (and save it too)
                errors.push("Please provide your email");
            }

            if (msg.value !== ""){
                // if it does, save it
                feedback.message = msg.value;
            } else {
                // if it does not, create the error message (and save it too)
                errors.push("Please enter your message");
            }
            
            // check if message has a value
            // if it does, save it
            // if it does not, create the error message (and save it too)
        
            // create either feedback or display all errors
            
            if (errors.length ===0){
                console.log(feedback);
            }else{
                console.log(errors);
            }
        
        // close your event-handler
        }
        
        // register the button for click event
        btn.addEventListener("click", formValidator);
            
        