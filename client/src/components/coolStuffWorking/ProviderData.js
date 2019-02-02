import React, { Component } from 'react';




const theData = [
    {
        name: 'Mark Cacciamani',
        email: 'somewhere@gmail.com'
    },

    {
        name: 'Perrine Anderson',
        email: 'something@gmail.com'
    }
]

class ProviderData extends Component {
    render() {

        const theData = this.props.dataA.map((data, idx) => {
            return <p key={idx}>{data}</p>
        });

        return (
            <div>
                {theData}
                <p>object</p>
            </div>
        )
    }
}

export default ProviderData;
