import axiosIns from '@/libs/axios'

export default {
  PostUserDetails(userradio) {
    return axiosIns.post('/user', { userid: userradio })
  },
  PostVehicleDetails(drivertext, driverradio) {
    return axiosIns.post('/driver', { drivertext, driverradio })
  },
  PostRideDetails(Ridetext, riderdio) {
    return axiosIns.post('/ride', { ridetext: Ridetext, rideradio: riderdio })
  },
}
