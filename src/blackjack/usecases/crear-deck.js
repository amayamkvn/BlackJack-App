import _ from 'underscore';

// Esta función crea un nuevo deck
/**
 *
 * @param { Array<string> } tiposCarta Ejemplo: ['C','D','H','S']
 * @param { Array<string> } tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {

    if( !tiposCarta || tiposCarta.length === 0 ) throw new Error(`Tipos de carta es obligatorio como un arreglo de strings`);
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error(`Tipos especiales es obligatorio como un arreglo de strings`);

    console.log({tiposCarta, tiposEspeciales});
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;