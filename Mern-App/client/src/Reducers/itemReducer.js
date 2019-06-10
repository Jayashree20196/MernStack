import uuid from 'uuid';

const initialState = {
    items: [
        {
            id: uuid(),
            name: "biriyani",
            price: 100,
        },
        {
            id: uuid(),
            name: "Rice",
            price: 80,

        },
        {
            id: uuid(),
            name: "noodles",
            price: 120,

        }
    ]
}