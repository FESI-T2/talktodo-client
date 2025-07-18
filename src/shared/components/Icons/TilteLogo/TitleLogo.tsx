interface TitleLogoProps {
  className?: string;
}
const TitleLogo = ({ className }: TitleLogoProps) => {
  return <img src='/icon/talktodo.svg' alt='Title Logo' className={className} />;
};

export default TitleLogo;
