import React, { useState, useEffect } from 'react'

import './styles.css'

import { Card } from '../../components/Card'
import { packageList } from '../../constants/packages'

export function Home() {

    const [ packages, setPackages ] = useState()

    useEffect(() => setPackages(packageList))

    return (
        <>
            <header>
                <h1>Conheça nossos planos</h1>
                <h2>Conheça nossas soluções e escolha o plano ideal para o seu próximo projeto</h2>
            </header>
            <main>
                {
                    packages?.map(pckg => 
                        <Card
                            key={pckg.name}
                            name={pckg.name}
                            price={pckg.price}
                            description={pckg.description}
                            benefits={pckg.benefits}
                            popular={pckg.popular}
                        />
                    )
                }
            </main>
        </>
    )
}