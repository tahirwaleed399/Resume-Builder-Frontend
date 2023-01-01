import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
// React Beautiful Dnd Drag And Drop Feature
const DragAndDropArea = ({droppableId , itemsArray , setItemsArray}) => {
    const onDragEnd = (result) => {
        if (!result.destination) {
          return;
        }
        const newItems = [...itemsArray];
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setItemsArray(newItems);
      };
  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result,itemsArray,setItemsArray)}>
    <Droppable droppableId="droppable2">
      {(provided, snapshot) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {itemsArray.map((item, index) => {
            return (
              <Draggable
                key={item.id}
                draggableId={item.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {/* // The Item to be rendered  */}
                    {item.component}
                    {provided.placeholder}
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
  )
}

export default DragAndDropArea