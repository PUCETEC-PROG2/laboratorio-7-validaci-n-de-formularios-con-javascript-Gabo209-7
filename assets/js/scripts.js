// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Escuchar el evento submit del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío por defecto
        
        // Llamar a la función de validación
        if (validateForm()) {
            alert('✅ ¡Formulario válido! Registro exitoso.');
            // Opcional: limpiar el formulario después de enviar
            // form.reset();
        } else {
            alert('❌ Por favor, corrija los errores en el formulario.');
        }
    });
});

/**
 * Función principal de validación del formulario
 * Retorna true si todos los campos son válidos, false si hay errores
 */
function validateForm() {
    let isValid = true;
    
    // ==========================================
    // VALIDACIÓN DE EJEMPLO: Campo Nombre
    // ==========================================
    const nombre = document.getElementById('nombre');
    const valorNombre = nombre.value.trim();
    
    if (valorNombre === '') {
        // Campo vacío - marcar como inválido
        nombre.classList.add('no-valid');
        isValid = false;
    } else if (valorNombre.length < 2) {
        // Muy corto - marcar como inválido
        nombre.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        nombre.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Apellido Paterno
    // ==========================================
    // Requisitos: No vacío, mínimo 2 caracteres
    // Pista: Usa getElementById('apellidoPaterno')
    
    // Tu código aquí...
    const apellidoPaterno = document.getElementById('apellidoPaterno');
    const valorApellidoPaterno = apellidoPaterno.value.trim();
    
    if (valorApellidoPaterno === '') {
        // Campo vacío - marcar como inválido
        ApellidoPaterno.classList.add('no-valid');
        isValid = false;
    } else if (valorApellidoPaterno.length < 2) {
        // Muy corto - marcar como inválido
        ApellidoPaterno.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        apellidoPaterno.classList.remove('no-valid');
    }
    
    
    // ==========================================
    // TODO: Validar Apellido Materno
    // ==========================================
    // Requisitos: No vacío, mínimo 2 caracteres
    
    // Tu código aquí...
    const ApellidoMaterno = document.getElementById('ApellidoMaterno');
    const valorApellidoMaterno = nombre.value.trim();
    
    if (valorApellidoMaterno === '') {
        // Campo vacío - marcar como inválido
        ApellidoMaterno.classList.add('no-valid');
        isValid = false;
    } else if (valorApellidoMaterno.length < 2) {
        // Muy corto - marcar como inválido
        ApellidoMaterno.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        ApellidoMaterno
        .classList.remove('no-valid');
    }
    
    
    // ==========================================
    // TODO: Validar Cédula
    // ==========================================
    // Requisitos: Exactamente 10 dígitos numéricos
    // Pista: Usa /^\d{10}$/.test(valor) para validar
    
    // Tu código aquí...
    const cedula = document.getElementById('cedula');
    const valorcedula = nombre.value.trim();
    const regex = "/^\d{10}$/.";
    if (!regex.test(valorCedula)){
        cedula.classList.add('no-valid')
        isValid = false;
    } else { 
        cedula.classList.remove('no-valid')
    }
    
    if (valorcedula === '') {
        // Campo vacío - marcar como inválido
        cedula.classList.add('no-valid');
        isValid = false;
    } else if (valorcedula.length < 2) {
        // Muy corto - marcar como inválido
        cedula.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        cedula
        .classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Motivo
    // ==========================================
    // Requisitos: No vacío, mínimo 10 caracteres
    
    // Tu código aquí...
    
    const motivo = document.getElementById('motivo');
    if (!validarCampoTexto(motivo, 10)) {
        isValid = false;
    }
    
    
    // ==========================================
    // TODO: Validar Tipo de Cuenta
    // ==========================================
    // Requisitos: Debe tener un valor seleccionado (no vacío)
    // Pista: Verifica que select.value !== ''
    
    // Tu código aquí...
    const tipoCuenta = document.getElementById('tipo_cuenta');
    if (tipoCuenta.value === '') {
        tipoCuenta.classList.add('no-valid');
        isValid = false;
    } else {
        tipoCuenta.classList.remove('no-valid');
    }
    
    
    // ==========================================
    // TODO: Validar Calle
    // ==========================================
    // Requisitos: No vacío, mínimo 3 caracteres
    
    // Tu código aquí...
    const calle = document.getElementById('calle');
    if (!validarCampoTexto(calle, 3)) {
        isValid = false;
    }
    
    
    // ==========================================
    // TODO: Validar Número
    // ==========================================
    // Requisitos: No vacío
    
    // Tu código aquí...
    const numero = document.getElementById('numero');
    if (!validarCampoTexto(numero, 1)) {
        isValid = false;
    }
    
    // ==========================================
    // TODO: Validar Intersección
    // ==========================================
    // Requisitos: No vacío, mínimo 3 caracteres
    
    // Tu código aquí...
    const interseccion = document.getElementById('interseccion');
    if (!validarCampoTexto(interseccion, 3)) {
        isValid = false;
    }
    
    // Retornar el resultado final de la validación
    return isValid;
}


// ==========================================
// FUNCIONES AUXILIARES (OPCIONALES)
// ==========================================
// Puedes crear funciones auxiliares para evitar repetir código
// Por ejemplo:

/**
 * Valida un campo de texto
 * @param {HTMLElement} campo - El elemento input a validar
 * @param {number} minLength - Longitud mínima requerida
 * @returns {boolean} - true si es válido, false si no
 */
function validarCampoTexto(campo, minLength) {
    const valor = campo.value.trim();
    
    if (valor === '' || valor.length < minLength) {
        campo.classList.add('no-valid');
        return false;
    } else {
        campo.classList.remove('no-valid');
        return true;
    }
}

// Ejemplo de uso de la función auxiliar:
// if (!validarCampoTexto(nombre, 2)) {
//     isValid = false;
// }
