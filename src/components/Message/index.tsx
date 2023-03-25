import React, { forwardRef, useImperativeHandle, useRef, useCallback } from 'react'
import ErrorTip, { ErrorMessageAction, ErrorMessageOption } from './ErrorMessage';
import TipMessage, { TipMessageAction, MessageOption } from './Message';

export interface MessageAction {
  show(option: MessageOption): void,
  error(option: ErrorMessageOption): void,
}

export default forwardRef<MessageAction>(function Message(props, refs) {

  const messageRef = useRef<TipMessageAction>(null);
  const errorMessageRef = useRef<ErrorMessageAction>(null);

  const show = useCallback((option:MessageOption) => {
    messageRef.current?.show(option)
  }, []);

  const error = useCallback((option:ErrorMessageOption) => {
    errorMessageRef.current?.error(option)
  }, []);

  useImperativeHandle(refs, () => ({
    show,
    error,
  }));

  return (
    <>
      <ErrorTip ref={errorMessageRef} />
      <TipMessage ref={messageRef } />
    </>
    
  )
})
