import React from "react";

import styles from "../styles/tabs.module.css";

import Tab from "./tab";

interface Props {
  children: JSX.Element[];
}

interface State {
  active: number
}

class Tabs extends React.Component<Props, State> {
  state = {
    active: 0,
  }

  handleActiveChange = (tabIdx: number) => {
    const { active } = this.state;
    if (tabIdx === active) return;
    this.setState({ active: tabIdx })
  }

  render = () => {
    const { children } = this.props;
    const { active } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          {React.Children.map(children, (child, idx) => {
            if (child.type.type === Tab.type) {
              return React.cloneElement(child, {
                className:
                  active === idx
                    ? [styles.tab, styles.active].join(" ")
                    : styles.tab,
                onClick: this.handleActiveChange.bind(this, idx),
              })
            }
            return null;
          })}
        </div>
        <div className={styles.content}>
          {React.Children.toArray(children)[active].props.children}
        </div>
      </div>
    )
  }
};

export default Tabs;
