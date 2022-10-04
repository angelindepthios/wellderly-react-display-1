import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';

// Emojies PNG
import angry from "../statics/Angry.png";
import flat from "../statics/Flat.png";
import happy from "../statics/Happy.png";
import sad from "../statics/Sad.png";
import smile from "../statics/Smile.png";

class DisplayCard extends Component {

    constructor(props){
        super(props);
        this.content = props.content;
        this.emoji = props.emoji;
    }

    getEmoji() {
        if(this.emoji === "Ecstatic"){
            return happy;
        }else if(this.emoji === "Happy"){
            return smile;
        }else if(this.emoji === "Neutral"){
            return flat;
        }else if(this.emoji === "Sad"){
            return sad;
        }else if(this.emoji === "Angry"){
            return angry;
        }
    }

    render() {
        const imageStyle = {
            width: "50%",
            height: "auto",
        }

        const cardStyle = {
            textAlign: "center"
        }

        return(
        <CardWrapper>
            <Card style={cardStyle}>
                <div id='separator' style={{height: "25%"}}>&nbsp;</div>
                <div>
                    <img src={this.getEmoji()} style={imageStyle}></img>
                    <div id="separator">&nbsp;</div>
                    {this.content}
                </div>
            </Card>
        </CardWrapper>
        );
    }
}

export default DisplayCard;