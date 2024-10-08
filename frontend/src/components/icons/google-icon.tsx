type ClassName = { className: string }

export function GoogleIcon({ className }: ClassName) {
  return (
    <svg
      className={className satisfies string}
      width={24}
      height={25}
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>google logo</title>
      <g clipPath='url(#clip0_871_2688)'>
        <path
          d='M23.766 12.776c0-.815-.066-1.635-.207-2.438H12.24v4.621h6.482a5.554 5.554 0 01-2.399 3.647v2.998h3.867c2.27-2.09 3.576-5.177 3.576-8.828z'
          fill='#4285F4'
        />
        <path
          d='M12.24 24.5c3.237 0 5.966-1.062 7.955-2.896l-3.867-2.998c-1.076.731-2.465 1.146-4.083 1.146-3.131 0-5.786-2.112-6.738-4.952h-3.99v3.091a12.002 12.002 0 0010.723 6.61z'
          fill='#34A853'
        />
        <path
          d='M5.503 14.8a7.188 7.188 0 010-4.594V7.115H1.516a12.01 12.01 0 000 10.776l3.987-3.09z'
          fill='#FBBC04'
        />
        <path
          d='M12.24 5.25a6.52 6.52 0 014.603 1.799l3.427-3.426A11.533 11.533 0 0012.24.5 11.998 11.998 0 001.517 7.115l3.986 3.09C6.45 7.363 9.109 5.25 12.24 5.25z'
          fill='#EA4335'
        />
      </g>
      <defs>
        <clipPath id='clip0_871_2688'>
          <path fill='#fff' transform='translate(0 .5)' d='M0 0H24V24H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
