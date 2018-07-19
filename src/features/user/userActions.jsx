import moment from 'moment'
import {toastr} from 'react-redux-toastr'

export const updateProfile = user =>
    async (dispatchEvent, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const {isLoaded, isEmpty, ...updatedUser} = user;
        if(updatedUser.dateOfBirth !== getState().firebase.profile.dateOfBirth) {
            console.log('before', updatedUser.dateOfBirth)
            updatedUser.dateOfBirth = moment(updatedUser.dateOfBirth).toDate();
            console.log(updatedUser.dateOfBirth)
        }

        try {
            await firebase.updateProfile(updatedUser);
            toastr.success('Success', 'Profile updated')
        } catch (error) {
            console.log(error)
        }
    }