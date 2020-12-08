import { Alert } from "react-native";

export const getAPILogin = (username, password) => {
    if(username && password){
    let myHeaders = new Headers();
    myHeaders.set('Accept','application/json');
    myHeaders.set('Content-Type','application/json');
    myHeaders.set('Cache-Control','no-cache');
    return fetch('https://fapi.fesonline.net:20901/apiConfig/users/verify',{
        method:'POST',
        headers:myHeaders,
        body:JSON.stringify({
            username:username,
            password:password
        })
    
    }).then(response => response.json())
    .then((responseData)=>{
        console.log(responseData)
        Alert.alert("Welcom my app!")
    })
    .done()
    renderResult()
    }
}

const renderResult = () => {
    if(responseData){
        isLoading(true)
    }
}