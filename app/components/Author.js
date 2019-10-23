import React from 'react';

export default class Author extends React.Component{
    render(){
        return(
            <figure className={"Author"}>
                <figcaption><small> created by: {this.props.question.author.username}</small></figcaption>

                <img src={this.props.question.author.photo.url}
                     alt={this.props.question.author.photo.filename}
                     width={"2.5%"}
                     height={"2.5%"}
                />
            </figure>
        )
    }
}
