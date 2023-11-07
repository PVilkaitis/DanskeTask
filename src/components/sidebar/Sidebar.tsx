import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import styles from './styles.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
      >
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : undefined
              }
            >
              Films
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? styles.activeNavLink : undefined
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>

      <GiHamburgerMenu
        className={styles.toggleButton}
        size={25}
        color='#2a2a2a'
        onClick={() => setIsOpen(!isOpen)}
      />

      <div className={`${styles.content} ${isOpen ? styles.contentShift : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
