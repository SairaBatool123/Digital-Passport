import { useLayoutContext } from '@/context/useLayoutContext';
import { Link } from "react-router";
import { Container} from 'react-bootstrap';
import { TbMenu4 } from 'react-icons/tb';

import FullscreenToggle from '@/layouts/components/topbar/components/FullscreenToggle';
import ThemeToggler from './components/ThemeToggler';

const Topbar = () => {
  const {
    sidenav,
    changeSideNavSize,
    showBackdrop
  } = useLayoutContext();
  const toggleSideNav = () => {
    const html = document.documentElement;
    const currentSize = html.getAttribute('data-sidenav-size');
    if (currentSize === 'offcanvas') {
      html.classList.toggle('sidebar-enable');
      showBackdrop();
    } else if (sidenav.size === 'compact') {
      changeSideNavSize(currentSize === 'compact' ? 'condensed' : 'compact', false);
    } else {
      changeSideNavSize(currentSize === 'condensed' ? 'default' : 'condensed');
    }
  };
  return (
    <header className="app-topbar">
      <Container fluid className="topbar-menu">
        <div className="d-flex align-items-center gap-2">
          <button onClick={toggleSideNav} className="sidenav-toggle-button btn btn-default btn-icon">
            <TbMenu4 className="fs-22" />
          </button>
        </div>

        <div className="d-flex align-items-center gap-2">
          <ThemeToggler />

          <FullscreenToggle />
        </div>
      </Container>
    </header>
  )
};
export default Topbar;