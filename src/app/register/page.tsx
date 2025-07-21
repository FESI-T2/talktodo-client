import ProfileFrom from '@/auth/components/ProfileForm/ProfileFrom';

const page = () => {
  return (
    <div className='min-h-screen gradient-bg w-full flex items-center justify-center'>
      <ProfileFrom>
        <ProfileFrom.Title>{'회원 가입'}</ProfileFrom.Title>
        <ProfileFrom.ImageUpload />
        <ProfileFrom.Info content={'이름'} />
        <ProfileFrom.SocialInfo content={'이메일'} variant={'kakao'} />
        <ProfileFrom.Button />
      </ProfileFrom>
    </div>
  );
};

export default page;
