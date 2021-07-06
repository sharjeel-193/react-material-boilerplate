import React from 'react';
import MaskedInput from 'react-text-mask';
function TextMask(props) {
  const { inputRef, mask, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
      placeholderChar={'\u2000'}
    />
  );
}

export default TextMask;
