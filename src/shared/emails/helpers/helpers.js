export const setEmailsInitialState = (emails = []) => emails
  .map(email => ({
    ...email,
    selected: false
  }))
