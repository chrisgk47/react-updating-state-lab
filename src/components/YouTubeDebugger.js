import React, {Component} from 'react'

class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleChangeBit = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        })
    }

    handleChangeRes = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                video: Object.assign({}, this.state.settings.video, {
                    resolution: '720p'
                })
            })
        })
    }
    

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleChangeBit}>
                    Change bitrate
                </button>
                <button className='resolution' onClick={this.handleChangeRes}>
                    Change resolution
                </button>
            </div>
        )
    }
}
export default YouTubeDebugger