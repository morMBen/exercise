import React from 'react';
import Api from '../api/Api'
import './App.css'
class App extends React.Component {
    state = {
        pics: [
            {
                pic: 'https://files.geektime.co.il/wp-content/uploads/2018/04/GettyImages-641778984-1523445670.jpg',
                id: 1,
            },
            {
                pic: 'https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,w_500/455936',
                id: 2,
            },
            {
                pic: 'https://www.photo-art.co.il/wp-content/uploads/2015/09/BY1A4457.jpg',
                id: 3,
            }
        ]
        , currentPic: {
            pic: 'https://files.geektime.co.il/wp-content/uploads/2018/04/GettyImages-641778984-1523445670.jpg',
            id: 1,
        }
    }
    setBackground = () => {
        if ()
    }
    // async componentDidMount() {
    //     this.setState({ pics: await Api() }, () => {
    //         this.setState({ currentPic: this.state.pics[0] })
    //     })
    // }

    onClickRight = () => {
        // console.log(this.state.currentPic)
        const index = this.state.pics.findIndex((e) => {
            return e.id === this.state.currentPic.id;
        })
        this.setState({ currentPic: this.state.pics[index + 1] || this.state.pics[0] }, () => {
            console.log(this.state.currentPic)
        })
    }

    componentDidMount() {
        setTimeout(() => {
            const index = this.state.pics.findIndex((e) => {
                return e.id === this.state.currentPic.id;
            })
            this.setState({ currentPic: this.state.pics[index + 1] || this.state.pics[0] }, () => {
                console.log(this.state.currentPic)
            })
        }, 1000)
    }
    render() {
        return (
            <div className='container' style={{ background: { this.setBackground } }}>
                <div className='btn' onClick={this.onClickRight}>left</div>
                {this.state.currentPic &&
                    <img src={this.state.currentPic.pic} alt={this.state.currentPic.id} style={{ width: '400px', height: '400px' }} />}
                <div className='btn'>right</div>
            </div>
        )
    }
}

export default App;