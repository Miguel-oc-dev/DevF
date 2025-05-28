function verificarUsuario(usuario, callback) {
    setTimeout(() => {
        const usuariosExistentes = ['ana', 'luis'];
        const existe = usuariosExistentes.includes(usuario);
        callback(existe);
    }, 1000);
};

function comprobarCuentaActiva(usuario, callback) {
    setTimeout(() => {
        const cuentaActiva = usuario !== 'luis';
        callback(cuentaActiva);
    }, 1000);
};

function verificarPermisos(usuario, callback) {
    setTimeout(() => {
        const tienePermisos = usuario === 'ana';
        callback(tienePermisos);
    },1000);
};

function procesoDeVerificacion(usuario) {
    console.log(`Iniciando verificacion para el usuario ${usuario}`);

    verificarUsuario(usuario, (existe) => {
        if (!existe) {
            return console.log('El usuario no existe.\n');
        }
        console.log('Usuario verificado exitosamente.');
        
        comprobarCuentaActiva(usuario, (activa) => {
            if (!activa) {
                return console.log('La cuenta del usuario no está activa.\n');
            }
            console.log('La cuenta del usuario está activa.');
        
            verificarPermisos(usuario, (permisos) => {
                if (!permisos) {
                    return console.log('El usuario no tiene permisos.\n');
                }
                console.log('El usuario tiene permisos. Acceso concedido.\n');
            });
        });
    });
}