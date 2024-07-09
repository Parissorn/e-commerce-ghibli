import React, { createContext, useState } from 'react'
import allFilmsData from '../assets/allfilms';

export const GhibliContext = createContext(null);

// filmography reading type
function readContainer() {

    const readType = {};

    for (let i = 1; i < allFilmsData.length + 1; i++) {

        readType[i] = 'about'

    };

    return readType
};

// cart containg quantities of items
function cart() {

    const cart = {};

    for (let i = 1; i < allFilmsData.length + 1; i++) {
        cart[i] = 0
    };

    return cart

};

//item category 
function itemCategoryContainer() {

    const icc = {};

    for (let i = 1; i < allFilmsData.length + 1; i++) {
        icc[i] = 'dvd'
    };

    return icc

}


const GhibliContextProvider = (props) => {

    const [read, setRead] = useState(readContainer());
    const [cartItem, setCartitem] = useState(cart());
    const [itemCategory, setItemCategory] = useState(itemCategoryContainer());
    const [num, setNum] = useState(0);


    function category(id, mode) {

        setItemCategory((currCat) => {
            if (currCat[id] !== mode) {
                return { ...currCat, [id]: mode }
            }
            return currCat
        })

    };

    function toCart(id, num) {
        setCartitem((previousQnt) => (
            { ...previousQnt, [id]: previousQnt[id] + num }
        ));

        setNum(0);

    };

    function increaseQauntity() {

        setNum((num) => (num + 1))

    };

    function decreaseQauntity() {
        if (num > 0) {
            setNum((num) => (num - 1))
        }
    };



    function getTotalPerItem(id) {

        let totalAmount = 0;
        let thatItem = allFilmsData.find((film) => (film.id === parseInt(id)))

        totalAmount = thatItem.new_price * cartItem[id];

        return totalAmount
    };

    function getTotal() {

        let total = 0;

        for (const item in cartItem) {

            if (cartItem[item] > 0) {
                let thisItem = allFilmsData.find((film) => (film.id === parseInt(item)))
                total += thisItem.new_price * cartItem[item]
            }

        };

        return total.toFixed(2)
    };

    function deleteItemCart(id) {
        setCartitem((currCart) => (
            { ...currCart, [id]: 0 }
        ))
    };


    function readMode(id, mode) {

        setRead((currRead) => {
            if (currRead[id] !== mode) {
                return { ...currRead, [id]: mode }
            }
            return currRead
        })

    };

    function countCart() {
        let count = 0;

        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                count += 1
            }
        };

        return count
    };

    const contextValue = {
        allFilmsData, readMode, read, cartItem, itemCategory, category,
        getTotalPerItem, getTotal, deleteItemCart, toCart, countCart, num, increaseQauntity, decreaseQauntity
    };

    return (
        <GhibliContext.Provider value={contextValue}>
            {props.children}
        </GhibliContext.Provider>
    )
}

export default GhibliContextProvider;