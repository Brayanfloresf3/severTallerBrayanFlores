import 'dotenv/config.js';
import '../../config/database.js';
import Store from '../../models/Store.js';

let stores = [
    {
        name: "BurguerLabs",
        address: "123 Fake Street",
        phone: 123456789
    },
    {
        name: "Hamburgers El Rey",
        address: "456 Main Avenue",
        phone: 987654321
    },
    {
        name: "The Perfect Hamburger",
        address: "789 Food Boulevard",
        phone: 456123789
    },
    {
        name: "Gourmet Hamburgers",
        address: "321 Flavor Street",
        phone: 321654987
    },
    {
        name: "Fast Food Burgers",
        address: "654 Hunger Plaza",
        phone: 789456123
    }
];

Store.insertMany(stores)
.then(() => console.log('Stores inserted'))
.catch((error) => console.log('Error inserting stores:', error));
