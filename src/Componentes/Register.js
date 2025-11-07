import React from 'react';

const Register = () => {
    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h2>Registrar</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Registrar</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',

    },
    box: {
        background: 'linear-gradient(135deg, #a6e6cf, #89CFF0)',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
    }
};

export default Register;
