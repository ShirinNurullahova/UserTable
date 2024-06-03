import { PayloadAction, createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getUsersData } from '../../services/api';

export type UserState = {
    usersData: User[];
};

const initialState: UserState = {
    usersData: [],
};


export const getUsers = createAsyncThunk(
    'user/getUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getUsersData();
            return response.data;
        } catch (error) {
            return rejectWithValue(" error occured");
        }
    }
);



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteUser: (state, action: PayloadAction<User>) => {
            state.usersData = state.usersData.filter(user => user.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.usersData = action.payload;
        });
    }
});

export const {deleteUser } = userSlice.actions;

const selectSelf = (state: RootState) => state.user;

export const selectAllUsers = createSelector(selectSelf, (user) => (user.usersData));

export const userReducer = userSlice.reducer;
