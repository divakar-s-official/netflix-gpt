export const checkValidateData = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/.test(password);
    
    if(!emailRegex){
        return "Email ID is not valid"
    }
    if(!passwordRegex){
        return "Password is not valid"
    }
    return null;
   
}