import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost';

class Blog extends Component {
    render () {
        

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                serach: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home2</h1>} /> */}
                <Route path="/" exact component={Posts}/>
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts/:id" exact component={FullPost}/>
                    {/* <Redirect from="/" to="/posts"/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;