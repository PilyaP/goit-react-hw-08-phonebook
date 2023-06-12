import PropTypes from 'prop-types';
import { ContactsItem } from './ContactList.styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'redux/contactSlice';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = ({ contacts, deleteContact }) => {
  const dispatch = useDispatch();

  const favContactsIds = useSelector(
    state => state.contacts.favoriteContactIds
  );

  const favoriteContacts = contacts.filter(contact =>
    favContactsIds.includes(contact.id)
  );
  const nonFavContacts = contacts.filter(
    contact => !favContactsIds.includes(contact.id)
  );

  const onToggleFav = contactId => {
    dispatch(toggleFavorite(contactId));
  };

  return (
    <ul>
      {favoriteContacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <p className="contact-name">
              <button
                onClick={() => onToggleFav(id)}
                type="button"
                className="fav-btn"
              >
                <FavoriteBorderIcon className="icon active" />
              </button>{' '}
              {name}: {number}
            </p>
            {/* <button type="button" className="bnt-name">
              Delete
            </button> */}
            <IconButton
              onClick={() => deleteContact(id)}
              aria-label="delete"
              size="large"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </ContactsItem>
        );
      })}
      {nonFavContacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <p className="contact-name">
              <button
                onClick={() => onToggleFav(id)}
                type="button"
                className="fav-btn"
              >
                <FavoriteBorderIcon className="icon" />
              </button>{' '}
              {name}: {number}
            </p>
            {/* <button
              type="button"
              onClick={() => deleteContact(id)}
              className="bnt-name"
            >
              Delete
            </button> */}
            <IconButton
              onClick={() => deleteContact(id)}
              aria-label="delete"
              size="large"
              className="iconbutton-delete"
            >
              <DeleteIcon className="iconbutton-delete" fontSize="inherit" />
            </IconButton>
          </ContactsItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

// import React, { useState } from 'react';
// import List from 'your-list-library';
// import ItemDragging from 'your-item-dragging-library';

// const App = () => {
//   const [plannedTasks, setPlannedTasks] = useState([]);
//   const [doingTasks, setDoingTasks] = useState([]);

//   const onDragStart = (e) => {
//     // Handle drag start event
//   };

//   const onAdd = (e) => {
//     const tasks = [...e.toData];
//     tasks.splice(e.toIndex, 0, e.itemData);
//     e.toData === 'plannedTasks' ? setPlannedTasks(tasks) : setDoingTasks(tasks);
//   };

//   const onRemove = (e) => {
//     const tasks = [...e.fromData];
//     tasks.splice(e.fromIndex, 1);
//     e.fromData === '' ? setPlannedTasks(tasks) : setDoingTasks(tasks);
//   };

//   const onReorder = (e) => {
//     onRemove(e);
//     onAdd(e);
//   };

//   return (
//     <div className="widget-container">
//       <List dataSource={plannedTasks} keyExpr="id">
//         <ItemDragging
//           allowReordering={true}
//           group="tasks"
//           data=""
//           onDragStart={onDragStart}
//           onAdd={onAdd}
//           onRemove={onRemove}
//           onReorder={onReorder}
//         />
//       </List>
//     </div>
//   );
// };

// import React from 'react';
// import PropTypes from 'prop-types';
// import { ContactsItem } from './ContactList.styled';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFavorite } from 'redux/contactSlice';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const ContactList = ({ contacts, deleteContact }) => {
//   const dispatch = useDispatch();

//   const favContactsIds = useSelector(
//     state => state.contacts.favoriteContactIds
//   );

//   const favoriteContacts = contacts.filter(contact =>
//     favContactsIds.includes(contact.id)
//   );
//   const nonFavContacts = contacts.filter(
//     contact => !favContactsIds.includes(contact.id)
//   );

//   const onToggleFav = contactId => {
//     dispatch(toggleFavorite(contactId));
//   };

//   const onDragEnd = result => {
//     if (!result.destination) {
//       return;
//     }

//     const { source, destination } = result;

//     if (
//       source.droppableId === 'favoriteContacts' &&
//       destination.droppableId === 'favoriteContacts'
//     ) {
//       const newFavoriteContacts = Array.from(favoriteContacts);
//       const [movedContact] = newFavoriteContacts.splice(source.index, 1);
//       newFavoriteContacts.splice(destination.index, 0, movedContact);

//     } else if (source.droppableId !== destination.droppableId) {
//       const newFavoriteContacts = Array.from(favoriteContacts);
//       const newNonFavContacts = Array.from(nonFavContacts);
//       const [movedContact] =
//         source.droppableId === 'favoriteContacts'
//           ? newFavoriteContacts.splice(source.index, 1)
//           : newNonFavContacts.splice(source.index, 1);

//       if (destination.droppableId === 'favoriteContacts') {
//         newFavoriteContacts.splice(destination.index, 0, movedContact);
//       } else {
//         newNonFavContacts.splice(destination.index, 0, movedContact);
//       }

//     }
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <ul>
//         <Droppable droppableId="favoriteContacts">
//           {provided => (
//             <div ref={provided.innerRef} {...provided.droppableProps}>
//               {favoriteContacts.map(({ id, name, number }, index) => (
//                 <Draggable key={id} draggableId={id} index={index}>
//                   {provided => (
//                     <ContactsItem
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <p className="contact-name">
//                         <button
//                           onClick={() => onToggleFav(id)}
//                           type="button"
//                           className="fav-btn"
//                         >
//                           <FavoriteBorderIcon className="icon active" />
//                         </button>{' '}
//                         {name}: {number}
//                       </p>
//                       <IconButton
//                         onClick={() => deleteContact(id)}
//                         aria-label="delete"
//                         size="large"
//                       >
//                         <DeleteIcon fontSize="inherit" />
//                       </IconButton>
//                     </ContactsItem>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//         {nonFavContacts.map(({ id, name, number }, index) => (
//           <Draggable key={id} draggableId={id} index={index}>
//             {provided => (
//               <ContactsItem
//                 ref={provided.innerRef}
//                 {...provided.draggableProps}
//                 {...provided.dragHandleProps}
//               >
//                 <p className="contact-name">
//                   <button
//                     onClick={() => onToggleFav(id)}
//                     type="button"
//                     className="fav-btn"
//                   >
//                     <FavoriteBorderIcon className="icon" />
//                   </button>{' '}
//                   {name}: {number}
//                 </p>
//                 <IconButton
//                   onClick={() => deleteContact(id)}
//                   aria-label="delete"
//                   size="large"
//                 >
//                   <DeleteIcon fontSize="inherit" />
//                 </IconButton>
//               </ContactsItem>
//             )}
//           </Draggable>
//         ))}
//       </ul>
//     </DragDropContext>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;

// import PropTypes from 'prop-types';
// import { ContactsItem } from './ContactList.styled';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFavorite } from 'redux/contactSlice';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import {
//   updateFavoriteContacts,
//   updateNonFavoriteContacts,
// } from 'redux/contactOperations';

// const ContactList = ({ contacts, deleteContact }) => {
//   const dispatch = useDispatch();

//   const favoriteContactIds = useSelector(
//     state => state.contacts.favoriteContactIds
//   );

//   const favoriteContacts = contacts.filter(contact =>
//     favoriteContactIds.includes(contact.id)
//   );
//   const nonFavoriteContacts = contacts.filter(
//     contact => !favoriteContactIds.includes(contact.id)
//   );

//   const onToggleFavorite = contactId => {
//     dispatch(toggleFavorite(contactId));
//   };

//   const onDragEnd = result => {
//     if (!result.destination) {
//       return;
//     }

//     const { source, destination } = result;

//     if (
//       source.droppableId === destination.droppableId &&
//       source.index === destination.index
//     ) {
//       return;
//     }

//     if (source.droppableId === destination.droppableId) {
//       const updatedContacts =
//         source.droppableId === 'favoriteContacts'
//           ? Array.from(favoriteContacts)
//           : Array.from(nonFavoriteContacts);

//       const [movedContact] = updatedContacts.splice(source.index, 1);
//       updatedContacts.splice(destination.index, 0, movedContact);

//       if (source.droppableId === 'favoriteContacts') {
//         dispatch(updateFavoriteContacts(updatedContacts));
//       } else {
//         dispatch(updateNonFavoriteContacts(updatedContacts));
//       }
//     } else {
//       const updatedFavoriteContacts = Array.from(favoriteContacts);
//       const updatedNonFavoriteContacts = Array.from(nonFavoriteContacts);

//       const [movedContact] = updatedFavoriteContacts.splice(source.index, 1);
//       updatedNonFavoriteContacts.splice(destination.index, 0, movedContact);

//       dispatch(updateFavoriteContacts(updatedFavoriteContacts));
//       dispatch(updateNonFavoriteContacts(updatedNonFavoriteContacts));
//     }
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="favoriteContacts">
//         {(provided, snapshot) => (
//           <ul ref={provided.innerRef} {...provided.droppableProps}>
//             {favoriteContacts.map(({ id, name, number }, index) => (
//               <Draggable key={id} draggableId={id} index={index}>
//                 {(provided, snapshot) => (
//                   <ContactsItem
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <p className="contact-name">
//                       <button
//                         onClick={() => onToggleFavorite(id)}
//                         type="button"
//                         className="fav-btn"
//                       >
//                         <FavoriteBorderIcon className="icon active" />
//                       </button>{' '}
//                       {name}: {number}
//                     </p>
//                     <IconButton
//                       onClick={() => deleteContact(id)}
//                       aria-label="delete"
//                       size="large"
//                     >
//                       <DeleteIcon fontSize="inherit" />
//                     </IconButton>
//                   </ContactsItem>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </ul>
//         )}
//       </Droppable>
//       <Droppable droppableId="nonFavoriteContacts">
//         {(provided, snapshot) => (
//           <ul ref={provided.innerRef} {...provided.droppableProps}>
//             {nonFavoriteContacts.map(({ id, name, number }, index) => (
//               <Draggable key={id} draggableId={id} index={index}>
//                 {(provided, snapshot) => (
//                   <ContactsItem
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <p className="contact-name">
//                       <button
//                         onClick={() => onToggleFavorite(id)}
//                         type="button"
//                         className="fav-btn"
//                       >
//                         <FavoriteBorderIcon className="icon" />
//                       </button>{' '}
//                       {name}: {number}
//                     </p>
//                     <IconButton
//                       onClick={() => deleteContact(id)}
//                       aria-label="delete"
//                       size="large"
//                     >
//                       <DeleteIcon fontSize="inherit" />
//                     </IconButton>
//                   </ContactsItem>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </ul>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;
