import { helpers } from '@vuelidate/validators'

// password pattern check
export const passwordMatchValidation = (val)=>{
    const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
    return regex.test(val)
    // console.log(regex.test(val))
}
// password doesn't contain email
export const passwordNotContainingEmail =(emailParam)=> helpers.withParams(
    {type : 'passwordNotContainingEmail' , value : emailParam},
    (val)=>{
        console.log(!val.includes(emailParam.split("@")[0]))
        console.log(emailParam.split("@")[0])
        return !val.includes(emailParam.split("@")[0])
    }
)