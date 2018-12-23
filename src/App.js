import React, { Component } from "react";

const tab = {
  display: "inline-block",
  padding: 10,
  margin: 10,
  borderBottom: "4px solid",
  borderBottomColor: "#ccc",
  cursor: "pointer"
};

const styles = {
  tab,
  activeTab: {
    ...tab,
    borderBottomColor: "#000"
  },
  disabledTab: {
    ...tab,
    opacity: 0.25,
    cursor: "default"
  }
};

const Tab = props => (
  <div
    onClick={props.disabled ? null : props.onClick}
    style={
      props.disabled
        ? styles.disabledTab
        : props.isActive
        ? styles.activeTab
        : styles.tab
    }
  >
    {props.children}
  </div>
);

const TabList = props => {
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === props.activeIndex,
      onClick: () => props.onActivate(index)
    });
  });

  return <div style={styles.tabs}>{children}</div>;
};

class TabContainer extends Component {
  state = { activeIndex: 0 };
  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        activeIndex: this.state.activeIndex,
        onActivate: activeIndex => this.setState({ activeIndex })
      });
    });
    return <div>{children}</div>;
  }
}

class App extends Component {
  render() {
    return (
      <TabContainer>
        <TabList>
          <Tab>Bananas</Tab>
          <Tab>Macaroni</Tab>
          <Tab>Paprica</Tab>
        </TabList>
      </TabContainer>
    );
  }
}

export default App;
