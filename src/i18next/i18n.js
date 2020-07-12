import i18n from "i18next"
const resources ={
    en : {
        translation :{
            "welcome" : "welcome to react and react-i18next",
            "login" : "login"
        }
    },
    fr : {
        translation :{
            "welcome" : "bonjour react and react-i18next",
            "login": "connection"
        }
    }
};
i18n.init({
    resources,
    lng: "fr"
});
export default i18n;