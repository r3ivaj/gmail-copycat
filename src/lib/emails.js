import {
  compose,
  map,
  flatten,
  uniq,
  curryN,
} from 'ramda';

const createIdsHash = ids => ids.reduce((p, c) => ({ ...p, [c]: true }), {});

const updateProp = (
  prop,
  value,
  emails = [],
  ids = []
) => {
  const idsHash = createIdsHash(ids);

  return emails.map(email => {
    if (idsHash[email.id]) {
      return {
        ...email,
        [prop]: value
      }
    }
    return email;
  })
}

export const updatePropCurried = curryN(4, updateProp)

const filterEmails = (
  emails = [],
  ids = []
) => {
  const idsHash = createIdsHash(ids);

  return emails.filter(email => !idsHash[email.id])
}

export const filterEmailsCurried = curryN(2, filterEmails)

export const isSelected = email => email.selected;

export const getTagsUnique = compose(
  uniq,
  flatten,
  map(email => email.tags)
);