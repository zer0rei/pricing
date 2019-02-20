import React from 'react';

function FooterColumn({ content }) {
  const {
    header,
    linksList
  } = content;
  let links = linksList.map((linkElement) => 
    <li><a className={`text-muted`} href={linkElement.link}>
      {linkElement.name}
    </a></li>
  );
  return (
    <div className={`
      col-6
      col-md
    `}>
      <h5>{header}</h5>
      <ul className={`
        list-unstyled
        text-small
      `}>
        {links}
      </ul>
    </div>
  );
}

export default FooterColumn;
