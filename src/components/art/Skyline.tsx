import * as React from 'react';

export function Skyline() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1200 180" className="block h-20 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(30, 84, 130, 0.16)" />
          <stop offset="1" stopColor="rgba(0,0,0,0)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1200" height="180" fill="url(#sky)" />
      <g fill="rgba(20,14,10,.35)">
        <path d="M0 150h1200v30H0z" />
        <path d="M40 150V95h40v55H40zm52 0V120h30v30H92z" />
        <path d="M160 150V70h30v80h-30zm36 0V110h32v40h-32z" />
        <path d="M260 150V85h40v65h-40zm46 0V120h18v30h-18z" />
        <path d="M350 150V60h32v90h-32zm40 0V92h26v58h-26z" />
        <path d="M450 150V100h36v50h-36zm44 0V78h22v72h-22z" />
        <path d="M560 150V72h46v78h-46zm54 0V105h26v45h-26z" />
        <path d="M680 150V90h34v60h-34zm42 0V62h30v88h-30z" />
        <path d="M800 150V80h44v70h-44zm52 0V112h18v38h-18z" />
        <path d="M900 150V66h30v84h-30zm36 0V100h40v50h-40z" />
        <path d="M1020 150V88h34v62h-34zm44 0V58h28v92h-28z" />
        <path d="M1120 150V96h46v54h-46zm54 0V78h20v72h-20z" />
      </g>
      <g stroke="rgba(20,14,10,.35)" strokeWidth="4" strokeLinecap="round">
        <path d="M185 70v-18" />
        <path d="M380 60v-18" />
        <path d="M1068 58v-20" />
      </g>
      <g fill="rgba(123, 27, 31, 0.55)">
        <path d="M185 52l18 6-18 6z" />
        <path d="M380 42l18 6-18 6z" />
        <path d="M1068 38l18 6-18 6z" />
      </g>
    </svg>
  );
}
