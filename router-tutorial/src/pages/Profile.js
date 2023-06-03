import { useParams } from 'react-router-dom'

const data = {
    seongjin: {
        name: 'seongjin kim',
        description: "developer who loves react"
    },
    gildong: {
        name: 'gildong hong',
        description: "korean traditional character"
    }
}

const Profile = () => {
    const params = useParams();
    console.log(params)
    const profile = data[params.username]

    return (
        <div>
            <h1>User profile</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>There is no profile</p>
            )}
        </div>
    )
}
export default Profile;