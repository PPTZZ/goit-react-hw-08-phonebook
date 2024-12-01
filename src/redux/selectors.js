import { createSelector } from '@reduxjs/toolkit';

// Contacts selectors
export const selectContacts = state => state.myContacts.contacts;
export const selectFilter = state => state.myContacts.filter;
export const selectLoader = state => state.myContacts.isLoading;
export const selectError = state => state.myContacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return filter.length > 1
      ? contacts.filter(el => el.name.toLowerCase().includes(filter))
      : contacts;
  }
);

// Alert Selectors
export const selectAlert = state => state.alert.value;

// Auth Selectors
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
