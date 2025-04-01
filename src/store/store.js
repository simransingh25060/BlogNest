import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
     reducer: {
          placeholder: (state = {}, action) => state,
     }

});

export default store;
