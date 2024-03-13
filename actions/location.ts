'use server'

// ipify

// Get the IP address of the client
export async function getUserIp() {
  const response = await fetch('https://api.ipify.org?format=json')
  const data = await response.json()

  return {
    body: data,
  }
}
