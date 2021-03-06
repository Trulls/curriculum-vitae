import React from 'react';

export default React.createClass({
  render() {
    let {url, title} = this.props.resource;
    var style = {
      url: {
        textDecoration: 'none',
        color: 'grey',
        fontFamily: 'Montserrat',
        display: 'block',
        paddingBottom: '10px',
        textAlign: 'right'
      }
    }
    return (
      <a href={url} style={style.url}>{title}</a>
    )
  }
});

