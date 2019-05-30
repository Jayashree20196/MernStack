import React, { Component } from 'react';
import {
    Container,
    ListGroupItem,
    ListGroup,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';


class AddItem extends Component {
    state =
        {
            items: [
                {
                    id: uuid(),
                    name: "biriyani",
                    price: 100,
                },
                {
                    id: uuid(),
                    name: "Rice",
                    price: 80,

                },
                {
                    id: uuid(),
                    name: "noodles",
                    price: 120,

                }
            ]
        }
    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: "2rem" }}
                    onClick={() => {
                        const name = prompt("enter item");
                        const price = prompt("enter price");
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name, price }]
                            })
                            );
                        }
                    }

                    }
                >
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="Items">
                        {items.map(({ id, name, price }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            })
                                            );
                                        }}
                                    >
                                        &times;
                                    </Button> {name} {price}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default AddItem;