export { addContact, getContact } from './contactsUs';

export { getFlatsUsers } from './flatsUsers';
export {
  getAnnouncement, postAnnouncement, getAnnouncementById, putAnnouncement, deleteAnnouncement,
} from './announcements';
export { getAdvertisements } from './advertisements';

export { getAllBills, sendBillMessage } from './Bills';
export {
  getFlats, flatById, updateFlat, availableFlats,
} from './flats';

export {
  getServices, postServices, updateServices, getServiceById,
} from './services';
export { login } from './auth';
export {
  addComplaints, deleteSingleComplaint, getAllComplaints, getSingleComplaint,
} from './complaints';
export { addUser, getUsers } from './users';
export { getUsersBills } from './billUser';
