import store from '../Store'

//Creamos funciones a los onChange para realizar la actualizacion de datos 

export const cambiarEmail = (email) => {
    store.update(s =>{
        s.usuario.email = email
    })
}
export const cambiarNombre = (displayName) => {
    store.update(s =>{
        s.usuario.displayName = displayName
    })
}
export const cambiarContraseña = (contraseña) => {
    store.update(s =>{
        s.usuario.contraseña = contraseña
    })
}
export const guardarUsuario = (usuario) => {
    store.update(s => {
        s.usuario = usuario
    })
}
export const autenticado = (autenticado) => {
    store.update(s => {
        s.autenticado = autenticado
    })
}
export const activeTab = (activeTab) =>{
    store.update(s => {
        s.activeTab = activeTab
    })
}