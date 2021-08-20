import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const history = useHistory()

  const push = history.push

  useEffect(() => {
    fetchColorService(setColors)
  },[])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor, id) => {
      axiosWithAuth()
      .put(`/colors/${id}`,editColor)
      .then(res => {
        let newArray = colors.map(col => {
          if(col.id == id){
            return res.data
          } else {
            return col
          }
        })
        setColors(newArray)
      })
      .catch(err => console.log(err))
      .finally(() => push('/bubble-page'))
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete(`/colors/${colorToDelete.id}`)
      .then(res => {
        let deleteArray = colors.filter(col => col !== colorToDelete)
        setColors(deleteArray)
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
