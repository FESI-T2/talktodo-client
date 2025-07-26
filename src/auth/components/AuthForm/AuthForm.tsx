import FormAction from './FormAction/FormAction';
import ProfileUpload from './ProfileUpload/ProfileUpload';
import SocialInfo from './SocialInfo/SocialInfo';
import Title from './Title/Title';
import UserInfo from './UserInfo/UserInfo';

interface ProfileFromProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const AuthForm = ({ children, ...props }: ProfileFromProps) => {
  return (
    <form
      {...props}
      className='max-w-[640px] w-[90%] h-[613px] rounded-[28px] bg-[var(--color-white)] pt-[56px] pr-[32px] pb-[40px] pl-[32px]'
    >
      {children}
    </form>
  );
};

export default AuthForm;
AuthForm.displayName = 'AuthForm';
AuthForm.Title = Title;
AuthForm.ProfileUpload = ProfileUpload;
AuthForm.UserInfo = UserInfo;
AuthForm.SocialInfo = SocialInfo;
AuthForm.Button = FormAction;
