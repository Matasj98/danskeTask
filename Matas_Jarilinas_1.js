const email1 = "jonas@danske.lt";
const email2 = "petrasDanske.lt";
const email3 = "vitalija@danske";
const email4 = "";

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isValidEmail = (emailAdress) => regex.test(String(emailAdress).toLowerCase());

const SendEmail = (email) => {
    if (email.length === 0) {
        return "No email";
    } else if (isValidEmail(email)) {
        return "Valid email";
    } else return "Email not valid";
};

console.log(SendEmail(email1));
console.log(SendEmail(email2));
console.log(SendEmail(email3));
console.log(SendEmail(email4));
