import { createSelector } from '@reduxjs/toolkit';

// contact selectors
export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return filter.length > 1
      ? contacts.filter(el => el.name.toLowerCase().includes(filter))
      : contacts;
  }
);

// alert selectors
export const selectAlert = state => state.alert.value;


// auth selectors
export const selectUser = state=> state.auth.user
export const selectLogin = state=>state.auth.isLoggedIn