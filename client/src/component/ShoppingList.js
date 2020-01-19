import React, { useEffect } from 'react'
import ItemModal from './ItemModal';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from "react-redux";
import { getItems, delItems } from '../actions/itemActions';
import PropTypes from 'prop-types';

function ShoppingList({ getItems, delItems, item }) {
    useEffect(() => {
        getItems();
    }, [getItems])
    
    const handleDelete = id => {
        delItems(id);
    }

    return (
        <Container>
            <ItemModal />
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    { item.items.map(item => (
                        <CSSTransition key={ item._id } timeout={ 500 } classNames="fade">
                            <ListGroupItem>
                                <Button className="remove-btn" color="danger" size="sm" onClick = { handleDelete.bind(this, item._id) }>&times;</Button>
                                { item.name }
                            </ListGroupItem>
                        </CSSTransition>
                    )) }
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, delItems })(ShoppingList)
