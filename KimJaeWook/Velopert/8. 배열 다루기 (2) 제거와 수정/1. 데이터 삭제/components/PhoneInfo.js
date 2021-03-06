import React, { Component } from 'react';

class PhoneInfo extends Component{
    static defaultProps = {
        info: {
            id: 0,
            name: '홍길동',
            phone: '010-0000-0000',            
        }
    };

    handleRemove = () => {
        // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
        const { info, onRemove } = this.props;
        this.props.onRemove(info.id);
    }

    render()
    {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };
        
        const { name, phone, id } = this.props.info;

        return(
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;