
const enum ERROR_TYPES {
    NOT_FOUND = 'notFound',
    UNAUTHORIZED= 'unauthorized',
    FORBIDDEN= 'forbidden'
}

const _mostrarMensajeError = (tipoError: ERROR_TYPES) => {
    if (tipoError===ERROR_TYPES.NOT_FOUND) {
        console.log("Error NOT FOUND");
    } else if (tipoError===ERROR_TYPES.UNAUTHORIZED) {
        console.log("Error UNAUTHORIZED");
    } else if (tipoError===ERROR_TYPES.FORBIDDEN) {
        console.log("Error FORBIDDEN");
    }
}

