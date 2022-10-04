import React from "react";

const Layout = (props) => {
  //layout은 이미 부모에 속해있기 때문에 props로 받게된다
  //  div에 감싸져있기 때문에 children으로 가져온다.
  return <div className="layout">{props.children}</div>;
};

export default Layout;
