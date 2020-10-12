import React, { Component } from "react";
import classNames from "classnames";
import ReactDOM from 'react-dom';

import ModalHeader from "./header";
import ModalBody from "./body";
import ModalFooter from "./footer";

import "./modal.scss";

interface ModalProps {
  className?: string;
  size?: "small" | "medium" | "large",
  type?: "centered" | "top",
  open: boolean;
  onClose: Function;
}

const baseClass = "UI_collection_modal";
const modalContentBaseClass = "UI_collection_modal_content";
const closeIconBaseClass = "UI_collection_modal_close_icon";

class Modal extends Component<ModalProps> {
  static Header: any;
  static Body: any;
  static Footer: any;

  static defaultProps = {
    open: false,
    size: "medium",
    type: "centered",
    onClose: () => null,
  };

  modalBackdropRef: React.RefObject<HTMLDivElement>;

  constructor(props: ModalProps) {
    super(props);
    this.modalBackdropRef = React.createRef();
  }

  onDocumentClick = (event: any) => {
    if (event.target === this.modalBackdropRef.current) {
      this.props.onClose();
    }
  };

  componentWillMount = () => {
    window.addEventListener("click", this.onDocumentClick);
  };

  componentWillUnmount = () => {
    window.removeEventListener("click", this.onDocumentClick);
  };

  render() {
    const { className, size, type, open, onClose, children } = this.props;
    const modalSizeClass = `__${size}`;
    const modalTypeClass = `__${type}`;
    const modalContentClasses = classNames(
      modalContentBaseClass,
      modalSizeClass,
      modalTypeClass,
    );
    const classes = classNames(baseClass, className, {
      ["__open"]: open,
      ["__closed"]: !open,
    });
    return ReactDOM.createPortal(
      <div className={classes} ref={this.modalBackdropRef}>
        <span
          className={closeIconBaseClass}
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
        >
          &times;
        </span>
        <div className={modalContentClasses}>
          {React.Children.map(children, (child) => {
            return React.isValidElement(child)
              ? React.cloneElement(child)
              : null;
          })}
        </div>
      </div>,
      document.body
    );
  }
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
