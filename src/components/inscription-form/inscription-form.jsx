import { useState } from 'react';

const pseudoRegex = /^([a-z][a-z0-9]*)?$/i;

const InscriptionForm = () => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [loc, setLoc] = useState('');
    const [spam, setSpam] = useState(false)

    const handleInputPseudo = (e) => {
        if(pseudoRegex.test(e.target.value)) {
            setPseudo(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            pseudo,
            email,
            isPresentiel: loc === 'Pre',
            spam
        };

        console.log(data);
    }

    return (
        <>
            <h2>Formulaire d'inscription</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='input-pseudo'>Pseudo : </label>
                    <input type='text' id='input-pseudo' required
                        value={pseudo}
                        onChange={handleInputPseudo}/>
                </div>
                <div>
                    <label htmlFor='input-email'>Courriel : </label>
                    <input type='email' id='input-email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='input-loc'>Lieux : </label>
                    <select id='input-loc' value={loc} onChange={e => setLoc(e.target.value)}>
                        <option value='' disabled>----------</option>
                        <option value='Pre'>Présentiel</option>
                        <option value='Dis'>Distenciel</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='input-spam'>Newsletter : </label>
                    <input type='checkbox' id='input-spam' 
                        checked={spam}
                        onChange={e => setSpam(e.target.checked)}/>
                </div>
                <input type="submit" value="Valider" />
            </form>
        </>
    )
}

export default InscriptionForm;