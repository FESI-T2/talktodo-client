interface IconProps {
  type: 'PC' | 'Mobile';
}

const MainLogo = ({ type }: IconProps) => {
  if (type === 'PC') {
    return (
      <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='40' height='40' rx='12' fill='#8F3FFF' />
        <path
          d='M21.5146 9C27.802 9.00016 32.8994 14.0973 32.8994 20.3848C32.8993 26.6721 27.8019 31.7694 21.5146 31.7695H11.6591C11.5933 31.7695 11.5293 31.7603 11.4677 31.7461C11.2774 31.7588 11.0867 31.7686 10.8955 31.7686C9.76863 31.7686 8.65235 31.5464 7.61129 31.1152C6.6619 30.7218 6.89673 29.418 7.77828 28.8896C9.04744 28.129 10.0968 27.0394 10.8095 25.7393V12.6816C10.8095 10.6484 12.4579 9 14.4912 9H21.5146Z'
          fill='white'
        />
        <g filter='url(#filter0_dd_804_23725)'>
          <path
            d='M20.293 17C20.293 16.4477 20.7407 16 21.293 16C21.8453 16 22.293 16.4477 22.293 17V19C22.293 19.5523 21.8453 20 21.293 20C20.7407 20 20.293 19.5523 20.293 19V17Z'
            fill='#8F3FFF'
          />
        </g>
        <g filter='url(#filter1_dd_804_23725)'>
          <path
            d='M25.293 17C25.293 16.4477 25.7407 16 26.293 16C26.8453 16 27.293 16.4477 27.293 17V19C27.293 19.5523 26.8453 20 26.293 20C25.7407 20 25.293 19.5523 25.293 19V17Z'
            fill='#8F3FFF'
          />
        </g>
        <defs>
          <filter
            id='filter0_dd_804_23725'
            x='19.3314'
            y='15.0385'
            width='3.92308'
            height='5.92308'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
            <feOffset dx='-0.384615' dy='-0.384615' />
            <feGaussianBlur stdDeviation='0.288462' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 0.0392157 0 0 0 0 0.0431373 0 0 0 0 0.121569 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_804_23725' />
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
            <feOffset dx='0.384615' dy='0.384615' />
            <feGaussianBlur stdDeviation='0.288462' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='effect1_dropShadow_804_23725' result='effect2_dropShadow_804_23725' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_804_23725' result='shape' />
          </filter>
          <filter
            id='filter1_dd_804_23725'
            x='24.3314'
            y='15.0385'
            width='3.92308'
            height='5.92308'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
            <feOffset dx='-0.384615' dy='-0.384615' />
            <feGaussianBlur stdDeviation='0.288462' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 0.0392157 0 0 0 0 0.0431373 0 0 0 0 0.121569 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_804_23725' />
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
            <feOffset dx='0.384615' dy='0.384615' />
            <feGaussianBlur stdDeviation='0.288462' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='effect1_dropShadow_804_23725' result='effect2_dropShadow_804_23725' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_804_23725' result='shape' />
          </filter>
        </defs>
      </svg>
    );
  }

  if (type === 'Mobile') {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
        <rect width='32' height='32' rx='9.6' fill='#8F3FFF' />
        <path
          d='M17.2115 7.20001C22.2415 7.20001 26.3188 11.2775 26.3189 16.3074C26.3189 21.3375 22.2415 25.4149 17.2115 25.4149H9.32773C9.27564 25.4149 9.22509 25.4074 9.17636 25.3963C9.02344 25.4066 8.87009 25.4149 8.7164 25.4149C7.81498 25.4148 6.92226 25.2373 6.08945 24.8924C5.32985 24.5778 5.51715 23.5339 6.22226 23.1111C7.23781 22.5025 8.07786 21.6311 8.64804 20.5906V10.1453C8.64804 8.5187 9.96673 7.20001 11.5934 7.20001H17.2115Z'
          fill='white'
        />
        <g filter='url(#filter0_dd_1480_73626)'>
          <path
            d='M16.2344 13.6C16.2344 13.1582 16.5925 12.8 17.0344 12.8C17.4762 12.8 17.8344 13.1582 17.8344 13.6V15.2C17.8344 15.6418 17.4762 16 17.0344 16C16.5925 16 16.2344 15.6418 16.2344 15.2V13.6Z'
            fill='#8F3FFF'
          />
        </g>
        <g filter='url(#filter1_dd_1480_73626)'>
          <path
            d='M20.2344 13.6C20.2344 13.1582 20.5925 12.8 21.0344 12.8C21.4762 12.8 21.8344 13.1582 21.8344 13.6V15.2C21.8344 15.6418 21.4762 16 21.0344 16C20.5925 16 20.2344 15.6418 20.2344 15.2V13.6Z'
            fill='#8F3FFF'
          />
        </g>
        <defs>
          <filter
            id='filter0_dd_1480_73626'
            x='15.4651'
            y='12.0308'
            width='3.13856'
            height='4.73847'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
            <feOffset dx='-0.307692' dy='-0.307692' />
            <feGaussianBlur stdDeviation='0.230769' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 0.0392157 0 0 0 0 0.0431373 0 0 0 0 0.121569 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1480_73626' />
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
            <feOffset dx='0.307692' dy='0.307692' />
            <feGaussianBlur stdDeviation='0.230769' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='effect1_dropShadow_1480_73626' result='effect2_dropShadow_1480_73626' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_1480_73626' result='shape' />
          </filter>
          <filter
            id='filter1_dd_1480_73626'
            x='19.4651'
            y='12.0308'
            width='3.13856'
            height='4.73847'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
            <feOffset dx='-0.307692' dy='-0.307692' />
            <feGaussianBlur stdDeviation='0.230769' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 0.0392157 0 0 0 0 0.0431373 0 0 0 0 0.121569 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1480_73626' />
            <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
            <feOffset dx='0.307692' dy='0.307692' />
            <feGaussianBlur stdDeviation='0.230769' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='effect1_dropShadow_1480_73626' result='effect2_dropShadow_1480_73626' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow_1480_73626' result='shape' />
          </filter>
        </defs>
      </svg>
    );
  }
};

export default MainLogo;
