function Header() {
  return (
    <nav
      className="navbar navbar-light bg-warning text-dark border-bottom border-1 border-primary"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container">
        <h3>
          <i class="bi bi-wallet2"></i> Expense Tracker
        </h3>
      </div>
    </nav>
  );
}

export default Header;
