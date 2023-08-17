import React, { useState } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Createtask({ modal, toggle, addTodo }) {
  const [task, setTask] = useState("");
  const [description, setDescriptin] = useState("");

  const handleCreate = (e) => {
    const newTodo = {
      id: Date.now(),
      task,
      description,
      Status: "notCompleted",
    };
    addTodo(newTodo);
    setTask("");
    setDescriptin(""); 
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name :</label>
            <input
              type="text"
              className="form-control"
                value={task}
              onChange={(e) => setTask(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label className="">Task Decription :</label>
            <textarea
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescriptin(e.target.value)}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" disabled = {task === "" || description ===""}  onClick={handleCreate}>
          Create
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default Createtask;
