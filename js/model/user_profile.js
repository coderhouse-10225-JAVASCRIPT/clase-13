export default class UserProfile {
    constructor(){
        this.darkmode = false;
        this.language = "es";
    }

    save(){
        // Ahora creo un objeto porque mas datos para guardar...
        let objecto1 = { darkmode: this.darkmode , language: this.language};
        // [objec object]
        localStorage.setItem("UserProfile", JSON.stringify(objecto1));
    }

    load() {
        let loaded_darkmode = localStorage.getItem("UserProfile");

        if (loaded_darkmode != null){
            // Lo vuelvo a convertir en objeto
            // Si quiero volver un objeto mas complejo puedo pasarle este json
            // como parametros al constructor
            let loaded_darkmode_JSON = JSON.parse(loaded_darkmode);

            

            this.darkmode = loaded_darkmode_JSON.darkmode;
            this.language = loaded_darkmode_JSON.language;
        }
        
    }
}