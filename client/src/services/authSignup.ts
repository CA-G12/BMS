import axios from 'axios';
import { ISignupResult } from '../Models/ISignupResult';
import { ISignupModel } from '../Models/signup';
import { authSignup } from '../Utilities/apiConsts';

const signup = (signupModel: ISignupModel): Promise<ISignupResult> => axios.post(authSignup, {
  firstName: signupModel.firstName,
  lastName: signupModel.lastName,
  phoneNumber: signupModel.phoneNumber,
  email: signupModel.email,
  password: signupModel.password,
});

export default signup;
