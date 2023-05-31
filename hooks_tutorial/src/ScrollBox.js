import {Component} from 'react'

class ScrollBox extends Component {
    
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;

        this.box.scrollTop = scrollHeight - clientHeight
    }

    render() {
        const styles = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative',
        };

        const innerStyles = {
            width: '100%',
            height: '1000px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div
            style={styles}
            ref={(ref) => {this.box = ref}}>
                    <div style={innerStyles} />
            </div>
                )
    }

}
export default ScrollBox;

