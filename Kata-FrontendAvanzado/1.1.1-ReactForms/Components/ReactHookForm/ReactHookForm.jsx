import reactLogo from '../../src/assets/react.svg'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const ReactHookForm = () => {
 {/* El esquema (schema) de validación para nuestro formulario */}
    const userFormSchema = yup.object({
        firstName: yup.string().required('Escribe tu nombre'),
        lastName: yup.string().required('Escribe tu apellido'),
        age: yup
            .number()
            .positive('el dato debe ser positivo')
            .integer('ingresa tu edad'),
        password: yup
            .string()
            .required('No ingresa tu contraseña')
            .min(5, 'La contraseña debe tener al menos 5 caracteres')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/, 'La contraseña debe tener al menos 5caracteres, un número, una letra mayúscula, una letra minúscula y un caracter especial'),
        gender: yup
            .mixed()
            .oneOf(['M', 'F', 'O'], 'Selecciona un género: Hombre, Mujer u Otro')
            .defined(),
    }).required();

const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(userFormSchema)
});
const onSubmit = data => console.log(data);

    return (
        <div>
            ReactHookForm
        {/* VA TODO NUESTRO DISEÑO HTML */}
        {/* Paso #1: Crear el formulario base en JSX */}
            <div className='login'>
                <div className='login-container'>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor='firstName'>Nombre</label>
                    <input 
                        type='text' 
                        name='firstName' 
                        placeholder='Tu Nombre' 
                        id='firstName' 
                        {...register('firstName', {required: true, maxLength: 20})}
                    />
                    <p>{errors.firstName?.message}</p>

                    <label htmlFor='lastName'>Apellido</label>
                    <input 
                        type='text' 
                        name='lastName' 
                        placeholder='Tu Apellido' 
                        id='lastName' 
                        {...register('lastName', {pattern: /^[A-Za-z]+$/i})}
                    />
                    <p>{errors.lastName?.message}</p>

                    <label htmlFor='age'>Edad</label>
                    <input 
                        type='number' 
                        name='age' 
                        placeholder='Tu Edad'
                        id='age' 
                        {...register('age')}
                    />
                    <p>{errors.age?.message}</p>

                    <label htmlFor='gender'>Género</label>
                        <select name='gender' id='gender'>
                        <option value=''>Elige un género</option>
                        <option value='M'>Masculino</option>
                        <option value='F'>Femenino</option>
                        <option value='O'>Otro</option>
                    </select>
                    <p>{errors.gender?.message}</p>

                    <label htmlFor='email'>Email</label>
                    <input 
                        type='text' 
                        name='email' 
                        placeholder='correo@mail.com' 
                        id='email' 
                        {...register('email')}
                    />
                    <p>{errors.email?.message}</p>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        name='password' 
                        id='password' 
                        {...register('password')}
                    />
                    <p>{errors.password?.message}</p>
                    
                    <button type='submit'>Registrar</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default ReactHookForm