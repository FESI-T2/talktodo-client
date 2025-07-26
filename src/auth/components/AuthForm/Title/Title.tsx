interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h1 className='font-title2-bold mb-4'>{title}</h1>;
};

export default Title;
