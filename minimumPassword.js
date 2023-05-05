function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    //go through password characters
    //test to see if criteria is satisfied
    const regexps = [
                    /\d/,           // Matches a digit
                    /[a-z]/,        // Matches a lowercase letter
                    /[A-Z]/,        // Matches an uppercase letter
                    /[!@#$%^&*()\-+]/,  // Matches a special character
                ];
    let count = 0;
        for(const regexp of regexps){
             //if no match, increase count
             if(!password.match(regexp)){
                 count++
             }
         } 
    //length of at least 6
    if(n < 6){
        //if not atleast 6, return difference 6 - letter count
        return 6 - n > count ? 6 - n : count; 
    }//if at least 6, initialize counter
     else {
          //upon completion of checks, return difference 4 - counter
         return count;
     }
}