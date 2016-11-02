import React from 'react';
// import ReactDOM from 'react-dom'


// function showNotImplemented() {
//   console.warn('This function is not implemented yet.');
// }

// const CalcButton = (props) => {
//   const { className, children, onClick } = props;
//   const extraClass = className || '';
//   return (
//     <div>
//       <button
//         className={`calc-btn ${extraClass}`}
//         onClick={onClick}
//       >
//         {children}
//       </button>
//     <div>
//   );
// };

class CalcButton extends React.Component {
  render() {
    const { className, children, onClick } = this.props;
    return (
      <div
        className={'calc-btn ' + (className ? className : '')}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}

CalcButton.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

CalcButton.defaultProps = {
  onClick: () => {},
};

export default CalcButton;
