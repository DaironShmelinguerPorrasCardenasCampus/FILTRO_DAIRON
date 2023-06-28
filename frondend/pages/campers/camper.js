import { get_campers, nuevoCamper} from "./API.js";
const campers = document.querySelector('#datosCampers');

async function loadCons(){
    let datos = await get_campers();
    datos.forEach(element => {
        let tabla = `
        <tr>
        <td>${element.idCamper}</td>
        <td>${element.nombreCamper}</td>
        <td>${element.apellidoCamper}</td>
        <td>${element.fechaNac}</td>
        <td>${element.FkidReg}</td>
        <td><td><button class="btn btn-danger delete" id="${element.idCamper}">Eliminar</button></td></td>
        </tr>
        `
        campers.innerHTML += tabla
    });
}

addEventListener('DOMContentLoaded', ()=>{
    loadCons();
});

const formulario  = document.getElementById('registrar');
formulario.addEventListener('submit', nuevoCampers)

function nuevoCampers(e){
    e.preventDefault();

    const idCamper = document.querySelector('#id').value
    const nombreCamper = document.querySelector('#Nombre').value
    const apellidoCamper = document.querySelector('#Apellido').value
    const fechaNac = document.querySelector('#Fecha').value
    const FkidReg = document.querySelector('#id_region').value

    const registro = {
        idCamper,
        nombreCamper,
        apellidoCamper,
        fechaNac,
        FkidReg

    }
    console.log(registro);

    if(validation(registro)){
      alert("TODOS LOS CAMPOS SON OBLIGATORIOS")
    }
    return nuevoCamper(registro)
  }
  
  function validation(Objeto){
    return !Object.values(Objeto).every(element=>element !== '')
  }
  


