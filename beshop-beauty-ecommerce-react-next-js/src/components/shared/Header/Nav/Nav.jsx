import useWindowSize from 'components/utils/windowSize/windowSize';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const Nav = ({ navItem }) => {
  const router = useRouter();
  const [activeSub, setActiveSub] = useState(null); // Track which submenu is active
  const [height] = useWindowSize();

  useEffect(() => {
    if (height > 768) {
      setActiveSub(null); // Close submenus on larger screens
    }
  }, [height]);

  const toggleSubmenu = (index) => {
    setActiveSub((prev) => (prev === index ? null : index)); // Toggle submenu
  };

  return (
    <ul className="header-nav">
      {navItem.map((nav, index) => (
        <li key={`${nav.path}-${index}`}>
          <div
            onClick={() => {
              if (nav.subNav) toggleSubmenu(index);
            }}
          >
            <Link href={nav.path}>
              <a className={nav.path === router.pathname ? 'active' : ''}>{nav.name}</a>
            </Link>
          </div>
          {nav.subNav && (
            <ul className={activeSub === index ? 'active' : ''}>
              {nav.subNav.map((sub, subIndex) => (
                <li key={`${sub.path}-${index}`}>
                  <Link href={sub.path}>
                    <a>{sub.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
