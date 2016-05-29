var React = require('react');
var ThumbnailList = require('./Thumbnail-list');

var options = {
  thumbnailData : [
    {
    title : 'See tutorials',
    number : '12',
    imageUrl: 'http://formatjs.io/img/react.svg',
    header: 'Learn React',
    description: 'React is fantastic new library for making fast , dynamic pages. But I dont know whether I am gonna continue with it nor not !'
  },
  {
    title : 'See tutorials',
    number : '25',
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400',
    header: 'Learn Gulp',
    description: 'Gulp will speed up your dvelopment workflow !!!!'
  }
]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.row'));
