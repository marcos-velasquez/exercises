import { Text } from './models/Text.ts';

(async () => {
    const phrase = `
    Nos encontramos en un
    periodo de guerra civil. Las
    naves espaciales rebeldes,
    atacando desde una base
    oculta, han logrado su 
    primera victoria contra
    el malvado Imperio
    Galáctico.

    Durante la batalla, los 
    espías rebeldes han
    conseguido apoderarse de 
    los planos secretos del
    arma total y definitiva del
    Imperio, la ESTRELLA
    DE LA MUERTE,
    una estación espacial
    acorazada, llevando en sí
    potencia suficiente para
    destruir a un planeta
    entero.

    Perseguida por los 
    siniestros agentes del 
    Imperio, la Princesa Leia 
    vuela hacia su patria, a
    bordo de su nave espacial,
    llevando consigo los
    planos robados, que
    pueden salvar a su pueblo
    y devolver la libertad a la
    galaxia....
    `;
    const text = new Text(phrase);
    console.log('Numero de palabras: ', text.words.total);
    console.log('Longitud media de las palabras: ', text.words.averageLength);
    console.log('Numero de oraciones: ', text.sentences.total);
    console.log('Las palabras mas largas: ', text.words.longest);
})();
