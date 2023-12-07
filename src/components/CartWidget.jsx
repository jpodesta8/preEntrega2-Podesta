import React from 'react'
import {
    IconButton, Stack, Center, Circle
} from '@chakra-ui/react'
import { HiOutlineShoppingCart } from "react-icons/hi"

//COMPONENTE DE PRESENTACION

const CartWidget = () => {
    return (
        <div>
            <Stack direction='row' p='2'>
                <Center fontWeight='bold' fontSize='xs'>
                    <Circle as='span' color="white" bg='red' w='18px' h='18px'>  4  </Circle>
                </Center>
                <IconButton
                    aria-label='CartWidget'
                    icon={<HiOutlineShoppingCart />}
                    size='md'
                    fontSize='20px'
                />
            </Stack>
        </div>
    )
}

export default CartWidget