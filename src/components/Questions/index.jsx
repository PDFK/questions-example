// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import MultipleForm from './multiple_form.jsx'

const MultipleQuestions = () => {
  // const [t] = useTranslation();

  // const questions = [{errors: {"description": ["Debe ingresar una Descripción"], "killer_value": ["La respuesta debe ser un rango valido"], "killer_condition": ["La condición de descarte no es validad para el valor esperado actual."]},id: 1297,killer_value: "No",killer_condition: "==",description: "¿Puedes trabajar en turnos Rotativos?",value_type: "boolean",project_id: 245,en_description: "",order: 0,options: []},{ id: 1297, killer_value: "1,5", killer_condition: "between?", description: "¿Puedes trabajar en turnos Rotativos?", value_type: "range", project_id: 245, en_description: "", order: 0, options: []},{id: 1298,killer_value: ["Otros","San Bernardo"],killer_condition: "are_options?",description: "¿En que comuna vives?",value_type: "multiple_option",project_id: 245,en_description: "",order: 1,options: ["San Bernardo","San Ramón","La Pintana","Puente Alto","Lo Espejo","Talagante","Peñaflor","Buin","Paine","Padre Hurtado","Maipú","Santiago Centro","El Bosque","La Cisterna","El Paico","El Monte","Otros"]},{id: 1299,killer_value: "$550,000",killer_condition: ">",description: "¿Cuál es tu expectativa de renta?",value_type: "currency",project_id: 245,en_description: "",order: 2,options: []},{id: 1300,killer_value: "No tengo",killer_condition: "==",description: "¿Cual es tu nivel de estudios máximo alcanzado?",value_type: "string",project_id: 245,en_description: "",order: 3,options: []},{id: 1301,killer_value: "3",killer_condition: ">",description: "¿Cuántos años de experiencia tienes para el cargo?",value_type: "int",project_id: 245,en_description: "",order: 4,options: []},{id: 1302,killer_value: "Ingeniero",killer_condition: "is_option?",description: "¿Posees especialidad asociada al cargo?",value_type: "option",project_id: 245,en_description: "",order: 5,options: ["Técnico en Alimentos","Técnico en Control de Calidad","Técnico Industrial","Técnico en Alimentación Colectiva","Técnico Químico","Técnologo","Biotecnólogo","Ingeniero"], errors: {"description": ["Debe ingresar una Descripción"], "killer_value": ["La respuesta debe ser 'Si' o 'No'"], "killer_condition": ["La condición de descarte no es validad para el valor esperado actual."]}}];

  // if (t) {
  //   return (
  //     <div className='preview'>
  //       <MultipleForm questions={ questions } t={ t } name={ "project[questions_attributes]" }/>
  //     </div>
  //   )
  // }
  // else{
    return <div>CARGANDO</div>
  // }
}



export default MultipleQuestions;
