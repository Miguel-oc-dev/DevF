import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '@/Service/userService'
import reactLogo from '../../src/assets/react.svg'
import '@/styles/form.css'

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); // hook - react-router-dom redirigir a un usuario a diferentes rutas de la aplicación
    
    const onSubmit = async (data) => {
        try{
        const response = await registerUserService(data);
        if(response.status === 201){
        navigate('/login')
        // console.log(response)
        console.log('Usuario creado exitosamente')
        }
        }
        catch(error){
        console.log('Ocurrio un error en Signup', error)
        }
    }

    return (
    <> 
        <h1>Signup</h1>
        <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <img className='mb-4' src={reactLogo} alt='' width='72' height='57' />
            <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

            <div className='form-floating'>
            <input
                type='text'
                className='form-control'
                id='first_name'
                name='first_name'
                onChange={() => {}}
                placeholder='John'
                {...register('first_name')}
            />
            <p>{errors.first_name?.message}</p>
            <label htmlFor='first_name'>First Name</label>
            </div>

            <div className='form-floating'>
            <input
                type='text'
                className='form-control'
                id='last_name'
                name='last_name'
                onChange={() => {}}
                placeholder='Doe'
                {...register('last_name')}
            />
            <p>{errors.last_name?.message}</p>
            <label htmlFor='last_name'>Last Name</label>
            </div>

            <div className='form-floating'>
            <select
                className='form-select'
                id='gender'
                name='gender'
                onChange={() => {}}
                {...register('gender')}
            >
                <option value=''>Choose...</option>
                <option value='M'>Male</option>
                <option value='F'>Female</option>
            </select>
            <p>{errors.gender?.message}</p>
            <label htmlFor='gender'>Gender</label>
            </div>

            <div className='form-floating'>
            <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                onChange={() => {}}
                placeholder='name@example.com'
                {...register('email')}
            />
            <p>{errors.email?.message}</p>
            <label htmlFor='email'>Email address</label>
            </div>

            <div className='form-floating'>
            <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                onChange={() => {}}
                placeholder='Password'
                {...register('password')}
            />
            <p>{errors.password?.message}</p>
            <label htmlFor='password'>Password</label>
            </div>

            <button className='w-100 btn btn-outline-primary' type='submit'>Sign up</button>
            <p className='mt-5 mb-3 text-muted'>© 2017–2025</p>
        </form>
        </main>
    </>
    )
}

export default Signup