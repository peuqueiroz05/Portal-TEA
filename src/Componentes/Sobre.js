import React from 'react';

const Sobre = () => {
    return (
        <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh', // Garante altura mínima de tela, mas permite expansão
                
                padding: '40px',
                textAlign: 'center',
                color: '#333',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
        >
            <div 
                style={{
                    maxWidth: '900px',
                    background: 'linear-gradient(135deg, rgba(137, 207, 240, 0.5), rgba(137, 207, 240, 0.5))', // Gradiente azul
                    padding: '20px',
                    borderRadius: '10px',
                    fontFamily: 'Arial, sans-serif', 
                    color: '#333', 
                    fontSize: '19px'
                }}
            >
                <h2 style={{ marginBottom: '20px' }}>O que é o Autismo?</h2>
                <p style={{ marginBottom: '20px' }}>
                    O Transtorno do Espectro Autista (TEA) é uma condição de desenvolvimento que afeta a comunicação, comportamento e interação social. Pessoas com autismo podem apresentar desafios em diferentes graus, variando de dificuldades mais leves a desafios mais complexos no dia a dia.
                </p>
                <h3>Níveis de Autismo</h3>
                <p>
                    O autismo é classificado em três níveis, de acordo com o grau de suporte necessário:
                </p>
                <ul style={{ textAlign: 'left' }}>
                    <li><strong>Nível 1</strong>: Requer suporte - As pessoas neste nível têm dificuldades na socialização, mas podem viver de maneira relativamente independente com apoio.</li>
                    <li><strong>Nível 2</strong>: Requer suporte substancial - Há dificuldades mais evidentes na comunicação e comportamento, necessitando de mais apoio no dia a dia.</li>
                    <li><strong>Nível 3</strong>: Requer suporte muito substancial - As pessoas nesse nível têm grandes dificuldades na comunicação verbal e não verbal e enfrentam desafios significativos na vida cotidiana, necessitando de assistência constante.</li>
                </ul>

                <h3 style={{ marginTop: '30px' }}>Classificação Internacional de Doenças (CID) para o TEA</h3>
                <p>
                    O código da Classificação Internacional de Doenças (CID) para o Transtorno do Espectro do Autismo (TEA) é <strong>6A02</strong> na CID-11:
                </p>
                <ul style={{ textAlign: 'left' }}>
                    <li><strong>6A02.0</strong>: TEA sem Transtorno do Desenvolvimento Intelectual (DI) e com leve ou nenhum comprometimento da linguagem funcional</li>
                    <li><strong>6A02.1</strong>: TEA com DI e com leve ou nenhum comprometimento da linguagem funcional</li>
                    <li><strong>6A02.2</strong>: TEA sem DI e com linguagem funcional prejudicada</li>
                    <li><strong>6A02.3</strong>: TEA com DI e com linguagem funcional prejudicada</li>
                    <li><strong>6A02.5</strong>: TEA com DI e com ausência de linguagem funcional</li>
                    <li><strong>6A02.Y</strong>: Outro TEA especificado</li>
                    <li><strong>6A02.Z</strong>: TEA não especificado</li>
                </ul>
            </div>
        </div>
    );
}

export default Sobre;
