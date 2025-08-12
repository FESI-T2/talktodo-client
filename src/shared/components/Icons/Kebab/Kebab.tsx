interface KebabProps {
  type: 'S' | 'M' | 'L';
  active?: boolean; // active 여부
}

const Kebab = ({ type, active = false }: KebabProps) => {
  if (type === 'S') {
    return (
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='16' height='16' rx='4' fill={active ? '#F5F5F5' : 'transparent'} />
        <circle cx='8' cy='5' r='1' fill='#D5D3DA' />
        <circle cx='8' cy='8' r='1' fill='#D5D3DA' />
        <circle cx='8' cy='11' r='1' fill='#D5D3DA' />
      </svg>
    );
  }

  if (type === 'M') {
    return (
      <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='32' height='32' rx='8' fill={active ? '#F5F5F5' : 'transparent'} />
        <path
          d='M18 10C18 11.1046 17.1046 12 16 12C14.8954 12 14 11.1046 14 10C14 8.89543 14.8954 8 16 8C17.1046 8 18 8.89543 18 10Z'
          fill='#D5D3DA'
        />
        <path
          d='M18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16Z'
          fill='#D5D3DA'
        />
        <path
          d='M18 22C18 23.1046 17.1046 24 16 24C14.8954 24 14 23.1046 14 22C14 20.8954 14.8954 20 16 20C17.1046 20 18 20.8954 18 22Z'
          fill='#D5D3DA'
        />
      </svg>
    );
  }

  if (type === 'L') {
    return (
      <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='40' height='40' rx='12' fill={active ? '#7F2DF1' : 'transparent'} />
        <path
          d='M22.5 12.5C22.5 13.8807 21.3807 15 20 15C18.6193 15 17.5 13.8807 17.5 12.5C17.5 11.1193 18.6193 10 20 10C21.3807 10 22.5 11.1193 22.5 12.5Z'
          fill='#D5D3DA'
        />
        <path
          d='M22.5 20C22.5 21.3807 21.3807 22.5 20 22.5C18.6193 22.5 17.5 21.3807 17.5 20C17.5 18.6193 18.6193 17.5 20 17.5C21.3807 17.5 22.5 18.6193 22.5 20Z'
          fill='#D5D3DA'
        />
        <path
          d='M22.5 27.5C22.5 28.8807 21.3807 30 20 30C18.6193 30 17.5 28.8807 17.5 27.5C17.5 26.1193 18.6193 25 20 25C21.3807 25 22.5 26.1193 22.5 27.5Z'
          fill='#D5D3DA'
        />
      </svg>
    );
  }

  return null;
};

export default Kebab;
