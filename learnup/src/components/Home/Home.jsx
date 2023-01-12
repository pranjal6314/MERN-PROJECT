import React from 'react'
import { Stack } from "@chakra-ui/react"
import './Home.css  '
const Home = () => {
    return (
        <section className='Home'>
            <div className="container">
                <Stack direction={['column', 'row']} height='100%' justifyContent={['center', 'space-between']} alignItems="center" spacing={['16', '56']}
                > {/* stack is div with display flex  direction id column if this is phone other wise row*/}

                </Stack>
            </div>
        </section>
    )
}

export default Home
