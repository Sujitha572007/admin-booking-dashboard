import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const tasks = [
  { id: "1", title: "Booking Open" },
  { id: "2", title: "Seats Filling" },
  { id: "3", title: "House Full" },
];

export default function KanbanPage() {
  return (
    <div className="p-6">
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="tasks">
          {(p) => (
            <div ref={p.innerRef} {...p.droppableProps} className="w-64">
              {tasks.map((task, i) => (
                <Draggable key={task.id} draggableId={task.id} index={i}>
                  {(p) => (
                    <div
                      ref={p.innerRef}
                      {...p.draggableProps}
                      {...p.dragHandleProps}
                      className="bg-white p-4 mb-2 rounded shadow"
                    >
                      {task.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {p.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
