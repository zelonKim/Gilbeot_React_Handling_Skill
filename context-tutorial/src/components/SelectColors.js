/* import { ColorConsumer } from '../contexts/color'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const SelectColors = () => {
    return (
        <div>
            <h2>Select Color</h2>
            <ColorConsumer>
            {({ actions }) => (
            <div style={{ display: 'flex' }}>
                {colors.map(color => (
                    <div
                    key={color}
                    style={{
                        background: color,
                        width: '24px',
                        height: '24px',
                        cursor: 'pointer', }}
                        onClick={()=> actions.setColor(color)}
                        onCotextMenu={e=> {
                            e.preventDefault();
                            actions.setSubcolor(color)
                        }}
                    />
                ))}
            </div>
            )}
            </ColorConsumer>
            <hr />
        </div>
    )
}
export default SelectColors;
 */

/////////////////////

import { Component } from 'react'
import ColorContext from '../contexts/color'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

class SelectColors extends Component {
    static contextType = ColorContext;

    handleSetColor = color => {
        this.context.actions.setColor(color)
    }

    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor)
    }

    render() {
    return (
        <div>
            <h2>Select Color</h2>
            <div style={{ display: 'flex' }}>
                {colors.map(color => (
                    <div
                    key={color}
                    style={{
                        background: color,
                        width: '24px',
                        height: '24px',
                        cursor: 'pointer' 
                        }}
                        onClick={()=> this.handleSetColor(color)}
                        onContextMenu={e => {
                            e.preventDefault();
                            this.handleSetSubcolor(color)
                        }}
                    />
                ))}
            </div>
            <hr />
        </div>
        )
    }
}
export default SelectColors;
