import React from "react";

interface Props {
  title: string,
  children: string | JSX.Element,
  className?: string,
  onClick?: ((e: React.MouseEvent) => void)
}

class Tab extends React.Component<Props> {
  static type = "Tab";
  render = () => {
    const { title, className, onClick } = this.props;
    return <div onClick={onClick} className={className}>
        {title}
      </div>
  }
};

export default Tab;