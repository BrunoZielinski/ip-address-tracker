export type IpifyLocation = {
  ip: string
  isp: string
  location: {
    lat: number
    lng: number
    city: string
    region: string
    country: string
    timezone: string
    geonameId: number
    postalCode: string
  }
  as: {
    asn: number
    name: string
    type: string
    route: string
    domain: string
  }
}
