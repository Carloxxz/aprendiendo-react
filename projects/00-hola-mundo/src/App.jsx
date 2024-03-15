import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'Pheralb',
        name: 'Pablo H.',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
]

export function App() {

    return (
        <section className='App'> {/*<></> Esto es igual a <React.Fragment></React.Fragment>*/}
            <TwitterFollowCard userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb">
                Pablo Heraldo
            </TwitterFollowCard>

            {/*<button onClick={() => setIsFollowing(!isFollowing)}>
                Cambiar estado de App
    </button>*/}


            {
                users.map(({ userName, name, isFollowing }) => {
                    {/* const { userName, name, isFollowing } = user */ }
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>

                    )
                })
            }
        </section >
    )
}