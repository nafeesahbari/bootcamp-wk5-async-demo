const path = require("path");
const { readFile, writeFile } = require("fs").promises; // Object destructuring

async function main() {
    console.log('=== SYNCHRONOUS ===');

    let newPokemon = {
        name: 'Pikachu',
        typs: 'Electric',
    }

    console.log('new pokemon created')
    let dbArray = [];
    console.log('db array created');
    dbArray.push(newPokemon)
    console.log('pokemon added to db');
    console.log(dbArray)

    // concats file path -> use __dirname so don't have to memorize path.
    const buffer = await readFile(path.join(__dirname, 'pokemonDb.txt'))
    console.log(buffer);

    // Parsing:
    const db = JSON.parse(buffer);
    // console.log(db);

    // pushed new pokemon from that parse
    db.push(newPokemon);
    console.log(db)

    // takes that JS code & makes it a string
    const presave = JSON.stringify(db);
    await writeFile(path.join(__dirname, 'pokemonDb.txt'), presave);

}

main();