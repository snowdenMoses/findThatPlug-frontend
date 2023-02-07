
export default function IsCurrentUser() {
    const token = localStorage.getItem('token')
    if (token) return true
}
