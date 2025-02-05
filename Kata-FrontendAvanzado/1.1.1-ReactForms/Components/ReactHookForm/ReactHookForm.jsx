const ReactHookForm = () => {
    return (
        <div className='login'>
        {/* VA TODO NUESTRO DISEÑO HTML */}
        {/* Paso #1: Crear el formulario base en JSX */}
        <div className='login-container'>
            <img src={logo} alt='logo' />
            <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='firstName'>Nombre</label>
            <input
                type='text'
                name='firstName'
                placeholder='Tu Nombre'
                id='firstName'
            />
            <p></p>

            <label htmlFor='lastName'>Apellido</label>
            <input
                type='text'
                name='lastName'
                placeholder='Tu Apellido'
                id='lastName'
            />
            <p></p>

            <label htmlFor='age'>Edad</label>
            <input
                type='number'
                name='age'
                placeholder='Tu Edad'
                id='age'
            />
            <p></p>

            <label htmlFor='gender'>Género</label>
            <select name='gender' id='gender'>
                <option value=''>Elige un género</option>
                <option value='M'>Masculino</option>
                <option value='F'>Femenino</option>
                <option value='O'>Otro</option>
            </select>
            <p></p>

            <label htmlFor='email'>Email</label>
            <input
                type='email'
                name='email'
                placeholder='correo@mail.com'
                id='email'
            />
            <p></p>

            <label htmlFor='password'>Password</label>
            <input
                type='password'
                name='password'
                id='password'
            />
            <p></p>

            <button type='submit'>Iniciar Sesión</button>
            </form>
        </div>
        </div>
    );
};

export default ReactHookForm;