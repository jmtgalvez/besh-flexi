import UIHeader from '../Body/UIHeader';

function Header({ togglePage, activePage}) {
  return (
    <div className="header">
      <UIHeader togglePage={togglePage} activePage={activePage} />
    </div>
  )
}

export default Header