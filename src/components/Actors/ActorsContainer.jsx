import React from 'react';
import Actors from './Actors';
import {connect} from 'react-redux';
import {addNewActor, deleteActor, deleteNewActor, getActors, updateNewActorNameBody} from '../../redux/actorsReducer';

class ActorsContainer extends React.Component {

    componentDidMount() {
        this.props.getActors();
    }

    onNewActorNameBodyChange = (e) => {
        this.props.updateNewActorNameBody(e.target.value);
    };

    render() {
        return <Actors {...this.props}
                       onNewActorNameBodyChange={this.onNewActorNameBodyChange}/>
    }
}

const mapStateToProps = (state) => ({
    actors: state.actorsPage.actors,
    isFetching: state.actorsPage.isFetching,
    newActors: state.actorsPage.newActors,
    newActorNameBody: state.actorsPage.newActorNameBody
});

export default connect(mapStateToProps, {getActors, updateNewActorNameBody, addNewActor, deleteNewActor, deleteActor})(ActorsContainer);