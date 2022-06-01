import authStatus from "@/utils/authenticationStatus"
import users from "@/utils/usersArray"

export const LogIn = (user)=>{
    // if the user truly exists in the array
    if(users.find((_user)=> _user.email === user.email && _user.password === user.password)){
        return authStatus.confirmed
    }
    // email or password wrong
    else if(users.find((_user)=> _user.email === user.email || _user.password === user.password)){
        return authStatus.pending
    }
    // doesn't exist
    return authStatus.notExist
}

