import generator from 'generate-password';

export const passwordGen = () => {

    const password = generator.generateMultiple(1, {
        length: 16,
        uppercase: true,
        numbers: true,
        symbols: true
    });
    
    console.log(`Generated password : ${password}`);

};