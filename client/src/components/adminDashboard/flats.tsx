import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Flats = () => (
  <>
    <h1>flats</h1>
    <Button type="primary" htmlType="submit">
      <Link to="/admin/auth/signup">إضافة مستخدم</Link>

    </Button>
  </>
);
export default Flats;
