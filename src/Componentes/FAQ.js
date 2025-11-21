import React, { useState } from 'react';

const faqData = [
    {
        question: "O que é o PORTAL TEA?",
        answer: "O PORTAL TEA é uma comunidade dedicada a pais e cuidadores de pessoas com autismo, oferecendo um espaço de apoio e compartilhamento de experiências."
    },
    {
        question: "Como posso me Cadastrar na comunidade?",
        answer: "Para se registrar, clique na aba 'Entrar' no menu superior e logo após clique em 'Cadastre-se' preencha as informações necessárias."
    },
    {
        question: "Quais são os principais recursos da plataforma?",
        answer: "O PORTAL TEA oferece testes de autismo, um fórum comunitário, suporte profissional e acesso a informações sobre o autismo."
    },
    {
        question: "Posso alterar meu perfil depois de registrado?",
        answer: "Sim, você pode alterar suas informações de perfil acessando as configurações de sua conta."
    },
];

const FAQ = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleQuestion = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Perguntas Frequentes (FAQ)</h2>
            <div style={styles.faqList}>
                {faqData.map((faq, index) => (
                    <div 
                        key={index} 
                        style={styles.faqItem}
                        onClick={() => toggleQuestion(index)}
                    >
                        <div style={styles.question}>
                            {faq.question}
                            <span style={styles.toggleIcon}>{expanded === index ? '−' : '+'}</span>
                        </div>
                        {expanded === index && <div style={styles.answer}>{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Estilos
const styles = {
    container: {
        padding: '40px',
        fontFamily: 'DynaPuff, sans-serif',
        minHeight: '100vh',
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: '32px',
        marginBottom: '30px',
        color: '#333',
    },
    faqList: {
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    faqItem: {
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
        transition: 'background 0.3s',
        backgroundColor: 'white', // Adicionado fundo branco explícito
    },
    question: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toggleIcon: {
        fontSize: '20px',
        color: '#333',
    },
    answer: {
        marginTop: '10px',
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.6',
    },
};

export default FAQ;
