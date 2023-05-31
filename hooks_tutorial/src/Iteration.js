/* const Iteration = () => {
    const seasons = ['spring', 'summer', 'fall', 'winter']
    const seasonList = seasons.map(season => <li>{season}</li>)
     
    return ( 
    <ul>{seasonList}</ul>
    )
}
export default Iteration; */

/////////////

/* const Iteration = () => {
    const seasons = ['spring', 'summer', 'fall', 'winter']
    const seasonList = seasons.map((season, index) => <li key={index}>{season}</li>)

    return ( 
    <ul>{seasonList}</ul>
    )
}
export default Iteration; */

////////////////

/* import { useState } from 'react'

const Iteration = () => {
    const [seasons, setSeasons] = useState([
        { id: 1, text: 'spring' },
        { id: 2, text: 'summer' },
        { id: 3, text: 'fall' },
        { id: 4, text: 'winter' },
    ])
    const seasonList = seasons.map( season => <li key={season.id}> {season.text} </li>)

    return ( 
    <ul>{seasonList}</ul>
    )
}
export default Iteration; */

//////////////

/* import { useState } from 'react'

const Iteration = () => {
    const [seasons, setSeasons] = useState([
        { id: 1, text: 'spring' },
        { id: 2, text: 'summer' },
        { id: 3, text: 'fall' },
        { id: 4, text: 'winter' },
    ])

    const [inputText, setInputText] = useState('');

    const onChange = e => setInputText(e.target.value);

    const seasonList = seasons.map( season => <li key={season.id}> {season.text} </li>)

    return ( 
        <>
        <input value={inputText} onChange={onChange} />
        <ul>{seasonList}</ul>
        </>
    )
}
export default Iteration; */

/////////////////

/* import { useState } from 'react'

const Iteration = () => {
    const [seasons, setSeasons] = useState([
        { id: 1, text: 'spring' },
        { id: 2, text: 'summer' },
        { id: 3, text: 'fall' },
        { id: 4, text: 'winter' },
    ])

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = seasons.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId + 1)
        setSeasons(nextNames)
        setInputText('')
    }

    const seasonList = seasons.map( season => <li key={season.id}> {season.text} </li>)

    return ( 
        <>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>add</button>
        <ul>{seasonList}</ul>
        </>
    )
}
export default Iteration;
 */

////////////////

import { useState } from 'react'

const Iteration = () => {
    const [seasons, setSeasons] = useState([
        { id: 1, text: 'spring' },
        { id: 2, text: 'summer' },
        { id: 3, text: 'fall' },
        { id: 4, text: 'winter' },
    ])

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextSeasons = seasons.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId + 1)
        setSeasons(nextSeasons)
        setInputText('')
    }

    const onRemove = id => {
        const nextSeasons = seasons.filter(season => season.id !== id)
        setSeasons(nextSeasons)
    }
    
    const seasonList = seasons.map( season => <li key={season.id} onDoubleClick={() => onRemove(season.id)}>
         {season.text} </li>)

    return ( 
        <>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>add</button>
        <ul>{seasonList}</ul>
        </>
    )
}
export default Iteration;

