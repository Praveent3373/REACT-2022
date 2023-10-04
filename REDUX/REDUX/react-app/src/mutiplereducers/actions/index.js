
export const orderIce_Cream = () => {
    return {
        type: 'Order_IceCream'
    }
}
export const restackIce_Cream = (qty) => {
    return {
        type: 'Restack_IceCreams',
        payload: qty
    }
}

export const orderCake = () => {
    return {
        type: 'Order_Cake'
    }
}
export const restockCake = (qty) => {
    return {
        type: 'ReStock_Cakes',
        payload: qty
    }
}