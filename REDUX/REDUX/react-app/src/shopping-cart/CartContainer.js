
import React from 'react'
import { CartItem } from './CartItem'

export const CartContainer = () => {
    return (
        <section className="cart">
            <header><h2>your bag</h2>     </header>
            <article>
                <CartItem/>
            </article>
            <footer>
                <hr />
                <div className="cart-total">
                <h4>
                    total <span></span>
                </h4>
                </div>
                <button>clear cart</button>
            </footer>
        </section>
    )
}
