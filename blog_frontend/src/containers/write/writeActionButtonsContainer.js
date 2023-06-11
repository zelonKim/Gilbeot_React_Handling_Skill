import React, { useEffect } from 'react'
import WriteActionButtons from '../../components/write/writeActionButton'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { writePost } from '../../modules/write'

const writeActionButtonsContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {title, body, tags, post, postError} = useSelector(({write}) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError
    }))

    const onPublish = () => {
        dispatch(
            writePost({
                title,
                body,
                tags,
            })
        )
    }

    const onCancel = () => {
        navigate(-1)
    }

    useEffect(()=> {
        if (post) {
            const {_id, user} = post;
            navigate(`/@${user.username}/${_id}`)
        }
        if (postError) {
            console.log(postError)
        }
    }, [navigate, post, postError])
    
    return <WriteActionButtons onPublish= {onPublish} onCancel={onCancel} />
}
export default writeActionButtonsContainer