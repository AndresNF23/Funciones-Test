const wordsrepeated = require ('./funcion4');

test('RW', ()=>{

    const arraywordA: string[] = ['laptop', 'mouse', 'teclado', 'pantalla'];
    const arraywordB: string[] = ['teclado', 'microfono', 'mouse', 'audifonos'];
    
    const listWords: string[] = ['teclado', 'mouse'];


    expect(wordsrepeated(arraywordA, arraywordB)).toEqual(listWords);
});