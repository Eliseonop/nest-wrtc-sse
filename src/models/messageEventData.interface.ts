// export interface MessageEventData {
//   value: SendOffer
//   usuario: string
// }
// export interface Offer {
//   offer: RTCSessionDescriptionInit
//   clientDestiny: string
//   clientOrigin: string
// }

// export interface Answer {
//   answer: RTCSessionDescriptionInit
//   clientDestiny: string
// }

export interface HaveEventData {
  clientOrigin?: string;
  clientDestiny?: string;
  rtc: RTCSessionDescriptionInit;
  type?: string;
  candidates?: RTCIceCandidate[];
}

// export interface Offer {
//   offer: RTCSessionDescriptionInit
// }
