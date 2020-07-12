import i18n from "i18next"
const resources ={
    en : {
        translation :{
            "welcome" : "welcome to react and react- 1",
            "login" : "login"
        }
    },
    fr : {
        translation :{
            "welcome" : "bonjour react and react-i18next 2",
            "login": "connection"
        }
    }
};
i18n.init({
    resources,
    lng: "fr"
});
export default i18n;