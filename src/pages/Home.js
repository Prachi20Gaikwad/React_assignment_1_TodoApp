import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { logoutInitiate } from '../redux/actions';
import TodoApp from '../components/TodoApp';


const Home = () => {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handle = () => {
        if (currentUser) {
            dispatch(logoutInitiate())
        }
    }

    return (
        <div>
            <h2>Welcome to Our Site</h2>
            <br />
            <button className="btn btn-danger" onClick={handle}> Logout </button>
            <TodoApp />
        </div>
    );

};

export default Home;