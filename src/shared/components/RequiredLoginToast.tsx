import Link from 'next/link';
import { ERROR_MESSAGE } from '../constants/error';
import PATH from '../constants/path';
import ToastPop from './ToastPop';

const RequiredLoginToast = () => (
  <ToastPop>
    <span>{ERROR_MESSAGE.requiredLogin}</span>
    <Link className="hover:underline" href={PATH.login}>
      로그인
    </Link>
  </ToastPop>
);

export default RequiredLoginToast;
