import Header from "./Header";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className="content">Content</div>
    </div>
  );
}

export default DefaultLayout;
