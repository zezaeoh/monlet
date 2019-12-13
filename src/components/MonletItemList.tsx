import React, { Component } from 'react';
import MonletFoodItem from './MonletItems/MonletFoodItem';

class MonletItemList extends Component<any, any> {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove, onClick, onChange } = this.props;

    const todoList = todos.map(
      ({id, title, content, date, checked, clicked, color}) => (
        <MonletFoodItem
          id={id}
          title={title}
          content={content}
          date={date}
          checked={checked}
          clicked={clicked}
          onToggle={onToggle}
          onRemove={onRemove}
          onChange={onChange}
          onClick={onClick}
          color={color}
          key={id}
        />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default MonletItemList;