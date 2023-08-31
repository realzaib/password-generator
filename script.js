const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const digits =  '0123456789'
const symbols = '~!@#$%^&*_+'

const passBox = document.querySelector(".pass")
const uppercaseInput = document.querySelector("#input-uppercase")
const lowercaseInput = document.querySelector("#input-lowercase")
const digitsInput = document.querySelector("#input-digits")
const symbolInput = document.querySelector("#input-symbols")
const lengthInput = document.querySelector("#input-length")
const btn =  document.querySelector(".pg-btn")


const getData = (data) => {
    return  data[Math.trunc(Math.random() * data.length)]
}

const truncateString = (value, num) => {
    if(value.length > num){
        let subStr = value.substring(0,num);
        return subStr ;
    }else{
        return value
    }
}

const generatPass = (password = "") => {
    if (uppercaseInput.checked){
        password += getData(uppercase)
    }
    if (lowercaseInput.checked){
        password += getData(lowercase)
    }
    if (digitsInput.checked){
        password += getData(digits)
    }
    if (symbolInput.checked){
        password += getData(symbols)
    }
    if(password.length < lengthInput.value){
        return generatPass(password)
    }

    passBox.innerText = truncateString(password, lengthInput.value)
    
}

btn.addEventListener('click', () => {
    generatPass()
})

passBox.addEventListener('click', (e)=>{
    console.log(e);
})