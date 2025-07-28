interface IconProps {
  type: 'PC' | 'Mobile';
}

const SvgIconMainLogo = ({ type }: IconProps) => {
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
            <feColorMatrix type='matrix' values='0 0 0 0 0.560784 0 0 0 0 0.247059 0 0 0 0 0.996078 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_804_23725' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_804_23725' result='shape' />
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
            <feColorMatrix type='matrix' values='0 0 0 0 0.560784 0 0 0 0 0.247059 0 0 0 0 0.996078 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_804_23725' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_804_23725' result='shape' />
          </filter>
        </defs>
      </svg>
    );
  }
  if (type === 'Mobile') {
    return (
      <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='28' height='28' rx='8' fill='#8F3FFF' />
        <path
          d='M15.0602 6.3C20.4414 6.30011 24.8201 10.6787 24.8201 16.0599C24.8201 21.4411 20.4414 25.8198 15.0602 25.8198H7.95996C7.91113 25.8198 7.86353 25.8127 7.81787 25.8026C7.67041 25.8127 7.52222 25.8198 7.37329 25.8198C6.44238 25.8198 5.52002 25.6426 4.6626 25.292C3.87256 24.9785 4.0625 23.8574 4.80371 23.4043C5.93018 22.7139 6.84912 21.7471 7.42041 20.583V10.1455C7.42041 8.53027 8.69043 7.26025 10.3057 7.26025H15.0602V6.3ZM14.0602 18.0599C14.0602 17.5076 14.5079 17.0599 15.0602 17.0599C15.6125 17.0599 16.0602 17.5076 16.0602 18.0599V19.0599C16.0602 19.6122 15.6125 20.0599 15.0602 20.0599C14.5079 20.0599 14.0602 19.6122 14.0602 19.0599V18.0599ZM19.0602 18.0599C19.0602 17.5076 19.5079 17.0599 20.0602 17.0599C20.6125 17.0599 21.0602 17.5076 21.0602 18.0599V19.0599C21.0602 19.6122 20.6125 20.0599 20.0602 20.0599C19.5079 20.0599 19.0602 19.6122 19.0602 19.0599V18.0599Z'
          fill='white'
        />
        <g filter='url(#filter0_dd_804_23726)'>
          <path
            d='M14.0602 18.0599C14.0602 17.5076 14.5079 17.0599 15.0602 17.0599C15.6125 17.0599 16.0602 17.5076 16.0602 18.0599V19.0599C16.0602 19.6122 15.6125 20.0599 15.0602 20.0599C14.5079 20.0599 14.0602 19.6122 14.0602 19.0599V18.0599Z'
            fill='#8F3FFF'
          />
        </g>
        <g filter='url(#filter1_dd_804_23726)'>
          <path
            d='M19.0602 18.0599C19.0602 17.5076 19.5079 17.0599 20.0602 17.0599C20.6125 17.0599 21.0602 17.5076 21.0602 18.0599V19.0599C21.0602 19.6122 20.6125 20.0599 20.0602 20.0599C19.5079 20.0599 19.0602 19.6122 19.0602 19.0599V18.0599Z'
            fill='#8F3FFF'
          />
        </g>
        <defs>
          <filter
            id='filter0_dd_804_23726'
            x='13.0986'
            y='16.0984'
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
            <feColorMatrix type='matrix' values='0 0 0 0 0.560784 0 0 0 0 0.247059 0 0 0 0 0.996078 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_804_23726' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_804_23726' result='shape' />
          </filter>
          <filter
            id='filter1_dd_804_23726'
            x='18.0986'
            y='16.0984'
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
            <feColorMatrix type='matrix' values='0 0 0 0 0.560784 0 0 0 0 0.247059 0 0 0 0 0.996078 0 0 0 0.2 0' />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_804_23726' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_804_23726' result='shape' />
          </filter>
        </defs>
      </svg>
    );
  }
};

export default SvgIconMainLogo;
