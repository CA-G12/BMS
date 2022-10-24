import axios from 'axios';
import { ILoginResult } from '../Models/ILoginResult';
import { ILoginModel } from '../Models/loginModel';
import { authLogin } from '../Utilities/apiConsts';

const Login = (loginModel: ILoginModel): Promise<ILoginResult> => axios.post(authLogin, {
  phoneNumber: loginModel.phoneNumber,
  password: loginModel.password,
});

export default Login;
