import styled from "styled-components"
const Image = styled.img`
width:30px;
margin-right: 10px;
`

const Cart = styled.span`
    position: absolute;
    background-color: #f33d3d;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
   
    display: flex;
    justify-content: center;
    align-items: center;
    top: auto;
    bottom: 0;
    right: 0px;
    left: auto;
    text-align: center;
`
const CartIcon = ({ count = 0 }) => {
    return (
        <>
            <Image   src='/cart.png'></Image>
            <Cart>
                { count}
            </Cart>
        </>
    )
}

export default CartIcon