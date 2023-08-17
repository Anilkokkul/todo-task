import React, { useState } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function EditTask({ editModel, edittoggle, updateTodo ,todos}) {
  const [editTask, setEditTask] = useState(""); 
  const [editDescription, setEditDescriptin] = useState("");

  console.log("edite:", todos);
  const handleUpdate = () => {
    updateTodo  = {
      ...todos,
      task: editTask,
      description: editDescription,
      Status: "notCompleted",
    };
    handleUpdate(updateTodo );
    editTask("");
    editDescription("");
  };

  return (
    <Modal isOpen={editModel} toggle={edittoggle}>
      <ModalHeader toggle={edittoggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label> New Task Name :</label>
            <input
              type="text"
              className="form-control"
                value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label className=""> New Task Decription :</label>
            <textarea
              type="text"
              className="form-control"
              value={editDescription}
              onChange={(e) => setEditDescriptin(e.target.value)}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button color="secondary" onClick={edittoggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default EditTask;
