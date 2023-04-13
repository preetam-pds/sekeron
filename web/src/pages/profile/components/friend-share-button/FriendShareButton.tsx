import * as React from 'react';
import { useState, useEffect } from "react";
import styles from "../profile-share-modal/ProfileShareModal.module.css";

interface Props {
  friendId: string;
  profileSharedTo: { profileId: string; sharedTo: string[] | any[] };
  handleShare: (shareTo: string | false) => void;
}
const FreindShareButton = (props: Props) => {
  const { handleShare, profileSharedTo, friendId } = props;

  const [shareToThis, setShareToThis] = useState<string | false>(false);
  const [requestUndo, setRequestUndo] = useState<boolean>(false);

  const initiateShare = (event: React.MouseEvent<HTMLButtonElement>) => {
    let shareTo = (event.target as HTMLButtonElement).dataset?.shareto;

    setRequestUndo((value) => (shareToThis ? true : false)); 
    setShareToThis((value) => (!value && shareTo ? shareTo : false)); 
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);
    if (shareToThis) { 
       timer = setTimeout(() => { 
        handleShare(shareToThis);
      }, 4000);
    }
    return () => {requestUndo !== true && clearTimeout(timer)}
  }, [shareToThis]); 

  return (
    <div>
      <button
        className={`${
          (profileSharedTo.sharedTo.includes(friendId) && shareToThis && styles["sent-button"]) 
          || (shareToThis && !requestUndo && styles["undo-button"]) 
          || styles["send-button"]
        }`}
        data-shareto={friendId}
        onClick={initiateShare}
        disabled={profileSharedTo.sharedTo.includes(friendId) && shareToThis ? true : false }
      >
        {`${
          (profileSharedTo.sharedTo.includes(friendId) && shareToThis) && "Sent" 
          || (shareToThis && !requestUndo && "Undo") 
          || "Send"
        }`}
      </button>
    </div>
  );
};

export default FreindShareButton;
