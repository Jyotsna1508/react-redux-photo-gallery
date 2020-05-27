import React from 'react';
import Photo from './photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Select from 'react-select';
function Photowall(props) {
    return (
        <div>
            <div className="selectClass">
                <h2>Filter</h2>
                <Select
                defaultValue={{ label: 'All the memories', value: 10}}/>
            </div>
            <Link to="/Addphoto" className="addIcon"> </Link>
            <div className="photogrid">
                {props.posts.sort((x,y) => {
                    return y.id - x.id;
                }).map((post, i) => <Photo key={i} post={post} {...props} index={i}/>)}
            </div>
        </div>
        )
}
Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
}
export default Photowall