import reactLogo from '../../src/assets/react.svg'

const Signup = () => {
    return (
    <> 
        <h1>Signup</h1>
        <main className='form-signin w-100 m-auto'>
        <form>
            <img className='mb-4' src={reactLogo} alt='' width='72' height='57' />
            <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

            <div className='form-floating'>
            <input
                type='text'
                className='form-control'
                id='first_name'
                name='first_name'
                value=''
                onChange={() => {}}
                placeholder='John'
            />
            <label htmlFor='first_name'>First Name</label>
            </div>

            <div className='form-floating'>
            <input
                type='text'
                className='form-control'
                id='last_name'
                name='last_name'
                value=''
                onChange={() => {}}
                placeholder='Doe'
            />
            <label htmlFor='last_name'>Last Name</label>
            </div>

            <div className='form-floating'>
            <select
                className='form-select'
                id='gender'
                name='gender'
                value=''
                onChange={() => {}}
            >
                <option value=''>Choose...</option>
                <option value='M'>Male</option>
                <option value='F'>Female</option>
            </select>
            <label htmlFor='gender'>Gender</label>
            </div>

            <div className='form-floating'>
            <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value=''
                onChange={() => {}}
                placeholder='name@example.com'
            />
            <label htmlFor='email'>Email address</label>
            </div>

            <div className='form-floating'>
            <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                value=''
                onChange={() => {}}
                placeholder='Password'
            />
            <label htmlFor='password'>Password</label>
            </div>

            <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>
            <p className='mt-5 mb-3 text-muted'>© 2017–2025</p>
        </form>
        </main>
    </>
    )
}

export default Signup