import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import faker from 'faker';


const App = ()=>{
    return(
        <div className='ui container comments'>
            <Comment name='Kaniah' post='awesome post!!' timeAgo='Today at 2:30PM' src={faker.image.avatar()}/>
            <Comment name='Maria' post='Great Tips' timeAgo='Today at 5:30PM'src={faker.image.avatar()}/>
            <Comment name='Ivy' post='These are very helpful!' timeAgo='Yesterday at 6:00PM' src={faker.image.avatar()}/>
            <Comment name='Tim' post='WWOOOOWWWW' timeAgo='Yesterday at 8:45PM' src={faker.image.avatar()}/>
        </div>
    ) 
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
)