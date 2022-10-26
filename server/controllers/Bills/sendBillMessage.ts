import {
  Request, Response, NextFunction,
} from 'express';
import SendSMS from '../../helpers/SMS';
import { GetUserCntact } from '../../interfaces/SMSMessage';
import { BillModel, FlatModel, UserModel } from '../../models';

const sendBillMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { billID } = req.params;
    const data : GetUserCntact = await BillModel.findOne({
      raw: true,
      where: { id: Number(billID) },
      attributes: ['id', 'total_price', 'createdAt'],
      include: [
        {
          model: FlatModel,
          attributes: ['id', 'flat_number'],
          include: [{
            model: UserModel,
            attributes: [
              'id',
              'phone_number',
            ],
          }],
        },
      ],
    });

    const message = `Your Bill Coasts For Flat ${data['Flat.flat_number']} \n
    At ${new Date(data.createdAt).getMonth()}/${new Date(data.createdAt).getFullYear()} \n
    is ${data.total_price}.00 NIS \n
    BMS`;
    console.log(message);

    const messageResult = SendSMS({ recipient: data.User.phone_number, message });
    if (messageResult) { res.json({ message: 'Send Successfully ' }); } else throw new Error();
  } catch (err) {
    next(err);
  }
};

export default sendBillMessage;
