import { strings } from '@sekeron/domain';
import React, { useState } from 'react';
import ImageAssets from 'src/assets';
import { commentData } from 'src/core/json/HomePageJson';
import styles from './CommentScreen.module.css';

const CommentScreen = () => {

    const [isReplyClicked, setIsReplyClicked] = useState(false);
    const [indexOfCommentClicked, setIndexOfCommentClicked] = useState(null)
    const [commentId, setCommentId] = useState('');


    const handleClickOnReply = (index: number) => {
        setIndexOfCommentClicked(index)
        setIsReplyClicked(true)
    }

    const handleClickOnHideReply = () => {
        setIsReplyClicked(false)
        setIndexOfCommentClicked(null)
    }

    return (
        <div className={styles['comment-screen']} >

            <div className={styles['comments-profile-details']}>
                <img alt='profile-image' className={styles['profile-image']} src={ImageAssets.ic_indian_flag} />
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <span className={styles['commenter-name']}>{'artistName'} :
                        <span className={styles['comment-by-poster']}> {'photoConent'}</span>
                    </span>
                    <span className={styles['commented-time']}>{'20m'}</span>
                </div>
            </div>

            <div className={styles['inside-comments']}>
                {commentData?.map((comment: any, commentIndex: number) => {
                    return (
                        <div key={commentIndex} className={styles['comment-container']}>
                            <img alt='profile-image' className={styles['profile-image']} src={ImageAssets.ic_indian_flag} />
                            <div style={{ display: 'flex', flexDirection: "column" }}>
                                <span className={styles['commenter-name-container']}>
                                    <span className={styles['commenter-name']}>{comment?.artistName}</span>
                                    <span className={styles['comments']}>{comment?.comments[0].comment}</span>
                                </span>
                                <span className={styles['commented-time']} onClick={() => handleClickOnReply(commentIndex)}>
                                    <span>{comment?.commentedTime} {strings.reply} {comment?.comments.length} {comment?.comments.length == 1 ? strings.reply : strings.replies}</span>
                                </span>

                                {isReplyClicked && indexOfCommentClicked == commentIndex ?
                                    <React.Fragment>
                                        {comment?.comments?.map((data: any, dataIndex: number) => {
                                            return (
                                                <div key={dataIndex} className={styles['comment-reply-container']}>
                                                    <img alt='profile-image' className={styles['profile-image']} src={data?.profileImage} />
                                                    <div style={{ display: 'flex', flexDirection: "column" }}>
                                                        <span className={styles['commenter-name-container']}>
                                                            <span className={styles['commenter-name']}>{data?.name}</span>
                                                            <span className={styles['comments']}>{data?.comment}</span>
                                                        </span>
                                                        <span className={styles['commented-time']}>
                                                            <span onClick={() => setCommentId(data?.name)}>{'20m'} {strings.reply}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div className={styles['hide-replies']} onClick={handleClickOnHideReply} >{strings.hideReplies}</div>
                                    </React.Fragment>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={styles['comment-post']} >
                <div className={styles['add-a-comment-container']}>
                    <div className={styles['sub-add-a-comment-container']}>
                        <img alt='profile-image' className={styles['profile-image']} src={ImageAssets.ic_artist_image_2} />
                        <input className={styles['write-message-text-field']} value={commentId} placeholder={strings.addCommnet} onChange={(e: any) => setCommentId(e.target.value)} />
                    </div>
                    <div className={styles['post-string']} >{strings.post}</div>
                </div>
            </div>

        </div>
    )
}

export default CommentScreen;