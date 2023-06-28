const urlCampers = "http://localhost/ArTeM01-045/Proyectos/FILTRO_DAIRON/backend/controllers/controllerCamper.php?op=GetAll"
const urlnuevoCamper = "http://localhost/ArTeM01-045/Proyectos/FILTRO_DAIRON/backend/controllers/controllerCamper.php?op=insert"

export const get_campers = async()=>{
    try {
        const campers = await fetch(urlCampers);
        const datosCampers =  campers.json();
        return datosCampers;
    } catch (error) {
        console.log(error);
    }
}

export const nuevoCamper = async (registro)=>{
    try {
        await fetch(urlnuevoCamper,{
            method: "POST",
            body:JSON.stringify(registro),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    } catch (error) {
        
    }

}
