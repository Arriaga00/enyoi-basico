const d = document;
const btnGestion = d.getElementById('gestion');

btnGestion.addEventListener('click', e => {
    e.preventDefault()
    const $name = d.getElementById('nombre').value;
    const $lastName = d.getElementById('apellido').value;
    const $email = d.getElementById('correo').value;
    const $phone = d.getElementById('telefono').value;
    const $tabla = d.getElementById('tabla');

    const fragment = d.createDocumentFragment();
    let tabla = d.createElement('table');
    let encabezado = tabla.createTHead();
    let filaEncabezado = encabezado.insertRow();
    filaEncabezado.insertCell().textContent = 'Nombres';
    filaEncabezado.insertCell().textContent = 'Apellidos';
    filaEncabezado.insertCell().textContent = 'Correo';
    filaEncabezado.insertCell().textContent = 'Teléfono';

    let cuerpo = tabla.createTBody();
    let fila = cuerpo.insertRow();
    fila.insertCell().textContent = $name;
    fila.insertCell().textContent = $lastName;
    fila.insertCell().textContent = $email;
    fila.insertCell().textContent = $phone;

    //estilo
    tabla.className = 'min-w-full divide-y-2 divide-gray-200 bg-white text-sm '
    encabezado.className = 'ltr:text-left rtl:text-right'
    filaEncabezado.classList= 'whitespace-nowrap px-4 py-2 font-medium text-gray-900 '
    cuerpo.className ='divide-y divide-gray-200'
    fila.className = 'whitespace-nowrap px-4 py-2 font-medium text-gray-900 '

    fragment.appendChild(tabla);
    $tabla.appendChild(fragment);
});
