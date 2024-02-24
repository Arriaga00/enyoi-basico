const d = document
const $email = d.getElementById('correo')
const $password = d.getElementById('password')
const $btnIngreso = d.getElementById('ingresar')

const usuarios = [
    {
        nombre : "Diego Jhondoe",
        email: "diego@gmail.com",
        contraseña: "Jhondoe"
      },
      {
        nombre : "Jane Smith",
        email: "Jane.Smith@gmail.com",
        contraseña: "JaneSmith"
      }
]

$btnIngreso.addEventListener('click',(e)=>{
    e.preventDefault()
    const email = $email.value
    const password = $password.value
    usuarios.map(el=>{
        if(el.email === email && el.contraseña=== password) {
            window.open('../pages/formulario.html')
        }else{
             console.warn(`ereror`)
            }
    })
})