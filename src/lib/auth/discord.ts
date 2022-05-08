const clientId = '971375358559526922'
const clientSecret = 'fMl2XVg0QwSCL1IkGPPdOgjhlFemjX9r'
const API_URL = 'https://discord.com/api/oauth2/token'

export function code(code: string|null) {
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent('http://localhost:3000/auth/redirect')}&client_id=${clientId}&client_secret=${clientSecret}`
    }).then(res => res.json()).then(res => {
        console.log(res)
    })
}