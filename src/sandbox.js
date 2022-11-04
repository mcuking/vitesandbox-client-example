import React, { useEffect, useCallback, useRef } from 'react';

const urlParams = new URLSearchParams(window.location.search);

const ViteSandbox = ({
  files = {},
  bundlerURL = '',
}) => {
  const iframeEl = useRef(null);

  const sendProjectInfo = useCallback((files) => {
    iframeEl.current.contentWindow.postMessage(
      {
        type: 'compile-esm',
        payload: {
          files,
          busid: urlParams.get('sprintId') || '',
          wcid: urlParams.get('appId') || '',
        },
      },
      '*',
    );
  }, []);

  const sandboxOnLoad = useCallback(() => {
    sendProjectInfo(files);
  }, [files, sendProjectInfo]);

  useEffect(() => {
    sendProjectInfo(files);
  }, [files, sendProjectInfo]);

  return (
    <iframe
        ref={iframeEl}
        title="sandbox-container"
        id="sandbox-container"
        style={{
          width: '100%',
          height: '100%',
          border: 0,
          outline: 0,
        }}
        src={bundlerURL}
        onLoad={sandboxOnLoad}
      />
  );
};

export default ViteSandbox;
