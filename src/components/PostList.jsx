import React from 'react'

export const PostList = ({postList, setPostList}) => {
    return (
        <div className='PostList'>
            <div className='posts'>
                {postList.map((post, index) => (
                    <div className='post' key={index}>
                    <div>
                        <span>{post.text}</span>
                    </div>
                </div>
                ))}

                
            </div>
        </div>
    )
}
