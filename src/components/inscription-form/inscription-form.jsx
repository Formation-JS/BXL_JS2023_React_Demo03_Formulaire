
const InscriptionForm = () => {

    return (
        <>
            <h2>Formulaire d'inscription</h2>
            <form>
                <div>
                    <label htmlFor='input-pseudo'>Pseudo : </label>
                    <input type='text' id='input-pseudo' />
                </div>
                <div>
                    <label htmlFor='input-email'>Courriel : </label>
                    <input type='email' id='input-email' />
                </div>
                <div>
                    <label htmlFor='input-loc'>Lieux : </label>
                    <select id='input-loc'>
                        <option value='' disabled>----------</option>
                        <option value='Pre'>Présentiel</option>
                        <option value='Dis'>Distenciel</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='input-spam'>Newsletter : </label>
                    <input type='checkbox' id='input-spam' />
                </div>
                <input type="submit" value="Valider" />
            </form>
        </>
    )
}

export default InscriptionForm;